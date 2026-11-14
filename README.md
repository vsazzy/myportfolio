# Yash Verma · Portfolio

Personal site for Yash Verma, applied AI engineer with a focus on inference.
Live at https://vsazzy.github.io/myportfolio.

## Editing the content

All copy lives in [`src/data/content.js`](src/data/content.js): the headline, stats,
projects, experience, stack and writing. Change that file and the page follows; the
components only handle layout.

| To change | Edit |
|---|---|
| Headline, role, links, availability line | `profile` |
| Prompts in the hero token stream | `stream` |
| Featured project cards | `projects` |
| The compact project list | `moreBuilds` |
| Inference section evidence | `inference` |
| Skills | `stack` |
| Resume download | replace `public/resume.pdf` |

## Structure

```
src/
  data/content.js            all copy
  components/Sections.js     hero, about, inference, work, experience, stack, writing, contact
  components/StreamPanel.js  simulated token stream in the hero
  components/LatencyBudget.js interactive latency model in the inference section
  components/Nav.js          sticky nav and theme toggle
  hooks.js                   scroll reveal, active section, theme
  App.css                    all styles, with light and dark tokens at the top
```

## Commands

```bash
npm start        # dev server at http://localhost:3000/myportfolio
npm test         # smoke tests
npm run build    # production build
npm run deploy   # build and publish to GitHub Pages
```
