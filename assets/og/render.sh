#!/usr/bin/env bash
# Render a share card to public/img/og-<card>-<version>.jpg
#
#   ./assets/og/render.sh me 1        -> public/img/og-me-1.jpg      (assets/og/me.html)
#   ./assets/og/render.sh webinar 1   -> public/img/og-webinar-1.jpg (assets/og/webinar.html)
#
# Bump the version whenever a card changes. Two independent caches make an
# in-place update impossible: /img/** carries a 1-year immutable
# cache-control, and WhatsApp/iMessage/Facebook cache a URL's preview
# indefinitely. Point the page's ogImage at the new filename too.
#
# JPEG (not webp/png) because that is what those crawlers reliably decode,
# and it keeps the file small enough that they bother fetching it.
set -euo pipefail

card="${1:?usage: render.sh <card-name> <version-number>}"
version="${2:?usage: render.sh <card-name> <version-number>}"

here="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
repo="$(cd "$here/../.." && pwd)"
src="$here/${card}.html"
out="$repo/public/img/og-${card}-${version}.jpg"
tmp_png="$here/.render-${card}.png"

[ -f "$src" ] || { echo "no such card: $src" >&2; exit 1; }

# chromium runs under snap confinement here: it cannot write to /tmp or to
# dotdirs, so the intermediate PNG must live in a normal dir under $HOME.
chromium --headless --disable-gpu --hide-scrollbars \
  --window-size=1200,630 --force-device-scale-factor=1 \
  --default-background-color=00000000 \
  --screenshot="$tmp_png" "file://$src" 2>/dev/null

python3 - "$tmp_png" "$out" <<'PY'
import sys
from PIL import Image
src, dst = sys.argv[1], sys.argv[2]
im = Image.open(src).convert("RGB")
assert im.size == (1200, 630), f"expected 1200x630, got {im.size}"
im.save(dst, "JPEG", quality=88, optimize=True, progressive=False)
print(f"wrote {dst} {im.size}")
PY

rm -f "$tmp_png"
ls -la "$out"
