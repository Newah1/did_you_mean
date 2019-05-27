# Did You Mean?
## Spelling correction from the only place that does it right <3

This is a small Node app. To set this up, you're required to create a custom search engine https://cse.google.com/cse/all. After setting that up, generate your [API keys](https://console.developers.google.com/) for Custom Search Engine. 

Fill in your API key and your Custom Search ID in the .env.example file, and rename it to .env

This app by default runs using the "restricted site" API, allowing you "unlimited" API requests. 

It runs on port 3200 by default. 

A request looks like this: http://localhost:3200?q=mispell


Response looks like this:
>{"corrected":"misspell"}

or if there is no correction
>No correction.

