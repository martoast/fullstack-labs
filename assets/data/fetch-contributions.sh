#!/usr/bin/env bash
# Refresh assets/data/contributions.json from GitHub's real contribution calendar.
#
#   ./assets/data/fetch-contributions.sh          # 2022 vs current year to date
#   ./assets/data/fetch-contributions.sh 2021 2026
#
# The /webinar proof section renders THIS data — every square is a real day.
# Do not hand-edit the file: the totals and the grid must keep agreeing, and
# the whole point of the section is that the numbers are checkable against
# github.com/martoast.
#
# Needs an authenticated `gh`. Counts include private contributions because the
# token belongs to the user being queried — which is also what github.com shows
# Alex on his own profile, but a logged-out visitor may see a lower number if
# "include private contributions" is off in his profile settings.
set -euo pipefail

login="${LOGIN:-martoast}"
base_year="${1:-2022}"
now_year="${2:-$(date +%Y)}"
today="$(date +%Y-%m-%d)"

here="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
out="$here/contributions.json"
tmp="$here/.contrib"
mkdir -p "$tmp"

fetch() { # year, to-date
  gh api graphql \
    -f query='query($login:String!,$from:DateTime!,$to:DateTime!){user(login:$login){contributionsCollection(from:$from,to:$to){contributionCalendar{totalContributions weeks{contributionDays{date contributionCount contributionLevel}}}}}}' \
    -F login="$login" -F from="$1-01-01T00:00:00Z" -F to="$2T23:59:59Z" > "$tmp/$1.json"
}

fetch "$base_year" "$base_year-12-31"
fetch "$now_year" "$today"

python3 - "$tmp" "$out" "$base_year" "$now_year" <<'PY'
import json, sys, os
tmp, out, base, now = sys.argv[1], sys.argv[2], sys.argv[3], sys.argv[4]
LEVELS = {'NONE':0,'FIRST_QUARTILE':1,'SECOND_QUARTILE':2,'THIRD_QUARTILE':3,'FOURTH_QUARTILE':4}
res = {}
for year in (base, now):
    cal = json.load(open(os.path.join(tmp, f'{year}.json')))['data']['user'] \
            ['contributionsCollection']['contributionCalendar']
    days = [d for w in cal['weeks'] for d in w['contributionDays']]
    res[year] = {
        'total': cal['totalContributions'],
        'start': days[0]['date'],
        'end': days[-1]['date'],
        # One digit per day, 0-4, matching GitHub's own quartile shading.
        'levels': ''.join(str(LEVELS[d['contributionLevel']]) for d in days),
        'active': sum(1 for d in days if d['contributionCount'] > 0),
        'ndays': len(days),
    }
json.dump(res, open(out, 'w'))
for y, v in res.items():
    print(f"{y}: {v['total']} contributions over {v['ndays']} days "
          f"({v['total']/v['ndays']:.2f}/day, {v['active']} active days)")
PY

rm -rf "$tmp"
echo "wrote $out"
