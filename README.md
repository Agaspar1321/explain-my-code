# ExplainMyCode

Paste in a block of code and get a plain-English explanation of what it does.

**Live:** [explainmycode2.netlify.app](https://explainmycode2.netlify.app)

I built this for the stretch where I could read syntax fine but kept losing track of what someone else's function was actually for. Every explanation comes back in the same four parts: a one-line summary, a section-by-section walkthrough, concepts to look up, and what to learn next. Pick the language from the dropdown or leave it on auto-detect.

This repo is the frontend. The Express API that calls the Anthropic API, and keeps the key off the browser, is in [explain-my-code-server](https://github.com/Agaspar1321/explain-my-code-server).

## Stack

HTML, CSS, vanilla JavaScript, and [marked](https://github.com/markedjs/marked) to render the markdown response. Hosted on Netlify.

## Run it locally

Open `index.html` in a browser. It calls the live API, so there's nothing else to start.
