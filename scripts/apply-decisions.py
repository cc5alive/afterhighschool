# Usage: python3 apply_decisions.py decisions.json  (run in repo root)
# decisions: {"slug:i": "P" | "D" | "H" | "<new text>"}; P/new text publish only if quoteVerified (else held), D drops, H holds.
import json, os, sys
dec=json.load(open(sys.argv[1])); today=sys.argv[2] if len(sys.argv)>2 else '2026-11-05'
by={}
for k,v in dec.items():
  s,i=k.rsplit(':',1); by.setdefault(s,{})[int(i)]=v
pub_n=drop_n=held=0
for slug,m in by.items():
  dp=f'data/highlights/drafts/{slug}.json'
  if not os.path.exists(dp): print('missing',slug); continue
  d=json.load(open(dp)); keep=[]
  for i,f in enumerate(d['facts']):
    v=m.get(i)
    if v is None or v=='H': keep.append(f); held+= v=='H'; continue
    if v=='D': drop_n+=1; continue
    if not f.get('quoteVerified'): keep.append(f); held+=1; print('held (unverified)',slug,i); continue
    pp=f'data/highlights/{slug}.json'
    pub=json.load(open(pp)) if os.path.exists(pp) else {"slug":slug,"facts":[]}
    srcs={}
    for s in f['sources']: srcs.setdefault(s.get('finalUrl') or s['url'], s['title'])
    pub['facts'].append({"text": f['text'] if v=='P' else v, "sources":[{"title":t,"url":u} for u,t in srcs.items()]})
    pub['reviewedBy']='source-check'; pub['reviewedAt']=today
    open(pp,'w').write(json.dumps(pub,indent=2,ensure_ascii=False)+'\n'); pub_n+=1
  if keep: d['facts']=keep; open(dp,'w').write(json.dumps(d,indent=2,ensure_ascii=False)+'\n')
  else: os.remove(dp)
print('published',pub_n,'dropped',drop_n,'held',held)
