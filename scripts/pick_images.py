#!/usr/bin/env python3
"""Consolidate image search results and pick the best URL for each slot."""
import json, glob, os

slots = ["hero","about","strength","hiit","mobility","nutrition","boxing","online",
         "cta_bg","team1","team2","team3","client1","client2","client3","blog1","blog2","blog3"]

out = {}
for s in slots:
    p = f"/home/z/my-project/scripts/img_{s}.raw"
    if not os.path.exists(p):
        out[s] = None
        continue
    try:
        raw = open(p).read()
        start = raw.find("{")
        data = json.loads(raw[start:])
        results = data.get("results", [])
        # prefer landscape-ish images with decent resolution
        best = None
        for r in results:
            w = int(str(r.get("original_width","0")).replace("px","") or 0)
            h = int(str(r.get("original_height","0")).replace("px","") or 0)
            url = r.get("original_url")
            if not url:
                continue
            score = min(w, h)  # prefer larger images
            if best is None or score > best[0]:
                best = (score, url, w, h)
        out[s] = best[1] if best else None
    except Exception as e:
        out[s] = None
        print(f"{s}: ERROR {e}")

print(json.dumps(out, indent=1))
with open("/home/z/my-project/scripts/images_final.json","w") as f:
    json.dump(out, f, indent=1)
