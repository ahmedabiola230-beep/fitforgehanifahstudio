#!/bin/bash
# Fetch remaining fitness images
cd /home/z/my-project/scripts

fetch() {
  local key="$1"; local q="$2"
  if grep -q '"original_url"' "img_${key}.raw" 2>/dev/null; then
    echo "SKIP $key (already have)"
    return 0
  fi
  for attempt in 1 2 3; do
    z-ai image-search -q "$q" --count 4 --gl us --no-rank > "img_${key}.raw" 2>/dev/null
    if grep -q '"original_url"' "img_${key}.raw"; then
      echo "OK $key"
      return 0
    fi
    sleep 3
  done
  echo "FAIL $key"
}

fetch cta_bg "dark modern gym interior equipment moody lighting"
fetch team1 "african female fitness trainer portrait smiling gym"
fetch team2 "male strength coach portrait black gym wear"
fetch team3 "female yoga instructor portrait studio"
fetch client1 "happy smiling young man headshot portrait"
fetch client2 "happy smiling professional woman headshot portrait"
fetch client3 "smiling middle aged man headshot portrait"
fetch blog1 "person tying running shoes morning run"
echo "BATCH2 DONE"
