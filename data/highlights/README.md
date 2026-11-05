# What's special highlights

One JSON file per school, named by the school's slug. Each fact is written in our own words from the linked source and checked against it before it's added. `reviewedAt` is the date the facts were last checked.

```json
{ "slug": "...", "reviewedBy": "...", "reviewedAt": "YYYY-MM-DD",
  "facts": [{ "text": "...", "sources": [{ "title": "...", "url": "..." }] }] }
```

Rules: specific, checkable, distinct from similar schools, useful to someone deciding whether to apply, no superlatives the source can't back. Recheck any fact whose source is more than a year old.
