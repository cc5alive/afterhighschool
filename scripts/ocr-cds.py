#!/usr/bin/env python3
"""Turn a scanned (image-only) CDS PDF into reader rows with OCR, for data/cds/mirror/<slug>.rows.json.
Usage: python3 scripts/ocr-cds.py data/cds/mirror/<slug>.pdf   (needs pdftoppm and tesseract)
Each output row is a list of {x, s} cells, like the PDF reader produces. Spot-check the key numbers
against the page images before publishing; build-cds.mjs applies the same consistency checks as always."""
import csv, glob, json, os, re, subprocess, sys, tempfile
pdf = sys.argv[1]
out = re.sub(r'\.pdf$', '', pdf) + '.rows.json'
with tempfile.TemporaryDirectory() as d:
    subprocess.run(['pdftoppm', '-r', '200', '-gray', '-png', pdf, f'{d}/p'], check=True)
    pages = sorted(glob.glob(f'{d}/p-*.png'))
    procs = [subprocess.Popen(['tesseract', p, p[:-4], '--psm', '6', 'tsv'], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL) for p in pages]
    for p in procs: p.wait()
    rows = []
    for f in sorted(glob.glob(f'{d}/p-*.tsv')):
        lines = {}
        with open(f) as fh:
            for w in csv.DictReader(fh, delimiter='\t', quoting=csv.QUOTE_NONE):
                t = (w.get('text') or '').strip()
                if not t or w['level'] != '5': continue
                key = (int(w['block_num']), int(w['par_num']), int(w['line_num']))
                lines.setdefault(key, []).append((int(w['left']), int(w['width']), int(w['height']), t))
        for key in sorted(lines):
            cells = []
            for (x, wd, h, t) in sorted(lines[key]):
                num = lambda s: re.fullmatch(r'[\d,.%$]+', s)
                if cells and x - cells[-1]['end'] < max(12, h * 0.9) and not num(t) and not num(cells[-1]['s'].split()[-1]):
                    cells[-1]['s'] += ' ' + t; cells[-1]['end'] = x + wd
                else:
                    cells.append({'x': x * 0.36, 's': t, 'end': x + wd})  # 200 dpi pixels to PDF points
            rows.append([{'x': round(c['x'], 1), 's': c['s']} for c in cells])
json.dump(rows, open(out, 'w'))
print(f'{out}: {len(rows)} rows')
