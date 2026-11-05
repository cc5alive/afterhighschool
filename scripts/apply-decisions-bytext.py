# Like apply-decisions.py but keyed by "slug||original fact text", so indexes can shift safely.
import json, os, sys
dec=json.load(open(sys.argv[1])); today=sys.argv[2] if len(sys.argv)>2 else '2026-11-05'
D='data/highlights/drafts'; pub_n=drop_n=held=0
for f in sorted(os.listdir(D)):
  if not f.endswith('.json'): continue
  d=json.load(open(f'{D}/{f}')); slug=d['slug']; keep=[]
  for x in d['facts']:
    v=dec.get(slug+'||'+x['text'])
    if v is None or v=='H': keep.append(x); continue
    if v=='D': drop_n+=1; continue
    if not x.get('quoteVerified'): keep.append(x); held+=1; continue
    pp=f'data/highlights/{slug}.json'
    pub=json.load(open(pp)) if os.path.exists(pp) else {"slug":slug,"facts":[]}
    srcs={}
    for s in x['sources']: srcs.setdefault(s.get('finalUrl') or s['url'], s['title'])
    pub['facts'].append({"text": x['text'] if v=='P' else v, "sources":[{"title":t,"url":u} for u,t in srcs.items()]})
    pub['reviewedBy']='source-check'; pub['reviewedAt']=today
    open(pp,'w').write(json.dumps(pub,indent=2,ensure_ascii=False)+'\n'); pub_n+=1
  if keep: d['facts']=keep; open(f'{D}/{f}','w').write(json.dumps(d,indent=2,ensure_ascii=False)+'\n')
  else: os.remove(f'{D}/{f}')
print('published',pub_n,'dropped',drop_n,'held',held)
