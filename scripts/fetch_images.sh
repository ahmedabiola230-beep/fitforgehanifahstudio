#!/bin/bash
# Fetch real fitness images for FitForge website (stdout capture version)
cd /home/z/my-project/scripts

declare -A queries=(
  ["hero"]="personal trainer coaching client in modern gym dark fitness photo"
  ["about"]="confident male fitness trainer portrait standing in gym arms crossed"
  ["strength"]="athlete doing barbell strength training in gym"
  ["hiit"]="high intensity interval training group fitness class"
  ["mobility"]="woman doing yoga mobility stretching on mat in studio"
  ["nutrition"]="healthy meal prep containers lean protein vegetables"
  ["boxing"]="boxing training pads workout in gym"
  ["online"]="fitness coach video call laptop home workout"
  ["cta_bg"]="dark modern gym interior equipment moody lighting"
  ["team1"]="african female fitness trainer portrait smiling gym"
  ["team2"]="male strength coach portrait black gym wear"
  ["team3"]="female yoga instructor portrait studio"
  ["client1"]="happy smiling young man headshot portrait"
  ["client2"]="happy smiling professional woman headshot portrait"
  ["client3"]="smiling middle aged man headshot portrait"
  ["blog1"]="person tying running shoes morning run"
  ["blog2"]="healthy protein breakfast bowl eggs avocado"
  ["blog3"]="person stretching before workout gym"
)

for key in "${!queries[@]}"; do
  z-ai image-search -q "${queries[$key]}" --count 4 --gl us --no-rank > "/home/z/my-project/scripts/img_${key}.raw" 2>/dev/null &
done
wait
echo "ALL DONE"
