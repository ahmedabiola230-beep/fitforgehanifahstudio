#!/bin/bash
# Fetch fitness images sequentially with retry
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

fetch hero "personal trainer coaching client in modern gym dark fitness photo"
fetch about "confident male fitness trainer portrait standing in gym arms crossed"
fetch strength "athlete doing barbell strength training in gym"
fetch hiit "high intensity interval training group fitness class"
fetch mobility "woman doing yoga mobility stretching on mat studio"
fetch nutrition "healthy meal prep containers lean protein vegetables"
fetch boxing "boxing training pads workout gym"
fetch online "fitness coach video call laptop home workout"
echo "BATCH1 DONE"
