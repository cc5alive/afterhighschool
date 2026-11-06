# Mirrored CDS files

Some colleges block automated downloads with bot checks. For those, a person opens the college's own page,
downloads the official Common Data Set, and the file is kept here. `data/cds/sources.json` lists it as
`"mirror": "data/cds/mirror/<slug>.<ext>"` next to the college's own `url`, which is what the site cites.
The reader treats the copy exactly like a downloaded file. Replace it when the college posts a newer year.
