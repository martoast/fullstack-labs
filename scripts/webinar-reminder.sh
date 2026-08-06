#!/usr/bin/env bash
# Send a webinar reminder to everyone registered for the upcoming session.
#
#   ./scripts/webinar-reminder.sh 3d --dry          # who WOULD get it
#   ./scripts/webinar-reminder.sh 1d --me           # send only to Alex, as a test
#   ./scripts/webinar-reminder.sh 1h                # send for real
#
# Kinds: 3d (three days out) · 1d (day before) · 1h (one hour before)
#
# Safe to re-run: the server records (email, session, kind), so a second run
# finds nobody pending and sends nothing. --me never records, so you can test
# as often as you like without burning anyone's reminder.
#
# The token comes from .env on the server (NUXT_WEBINAR_ADMIN_TOKEN).
set -euo pipefail

kind="${1:?usage: webinar-reminder.sh <3d|1d|1h> [--dry] [--me]}"
shift || true

case "$kind" in
  3d|1d|1h) ;;
  *) echo "kind must be 3d, 1d or 1h" >&2; exit 1 ;;
esac

here="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
env_file="$here/../.env"
[ -f "$env_file" ] || { echo "missing $env_file" >&2; exit 1; }
token="$(grep -E '^NUXT_WEBINAR_ADMIN_TOKEN=' "$env_file" | cut -d= -f2-)"
[ -n "$token" ] || { echo "NUXT_WEBINAR_ADMIN_TOKEN is not set in .env" >&2; exit 1; }

base="${WEBINAR_BASE:-https://fullstacklabs.org}"
payload="{\"kind\":\"$kind\""
for arg in "$@"; do
  case "$arg" in
    --dry) payload="$payload,\"dryRun\":true" ;;
    --me)  payload="$payload,\"only\":\"alexmartos96@gmail.com\"" ;;
    *)     echo "unknown option: $arg" >&2; exit 1 ;;
  esac
done
payload="$payload}"

curl -sS -X POST "$base/api/webinar/send-reminder" \
  -H "x-webinar-token: $token" \
  -H 'content-type: application/json' \
  -d "$payload"
echo
