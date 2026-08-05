#!/usr/bin/env bash
# Render the /me share card to public/img/og-me-<version>.jpg
#
#   ./assets/og/render.sh 2      -> public/img/og-me-2.jpg
#
# Bump the version whenever the card changes: /img/** carries a 1-year
# immutable cache-control, so an existing filename can never be updated at
# the edge. Remember to point pages/me.vue at the new filename too.
#
# JPEG (not webp/png) because that is what the WhatsApp, iMessage and
# Facebook crawlers reliably decode, and it keeps the file small — these
# crawlers skip images that are slow or large to fetch.
set -euo pipefail

version="${1:?usage: render.sh <version-number>}"
here="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
repo="$(cd "$here/../.." && pwd)"
out="$repo/public/img/og-me-${version}.jpg"
tmp_png="$here/.render.png"

# chromium runs under snap confinement here: it cannot write to /tmp or to
# dotdirs, so the intermediate PNG must live in a normal dir under $HOME.
chromium --headless --disable-gpu --hide-scrollbars \
  --window-size=1200,630 --force-device-scale-factor=1 \
  --default-background-color=00000000 \
  --screenshot="$tmp_png" "file://$here/me.html" 2>/dev/null

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
