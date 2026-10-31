# Invite me

A landing page for a digital invitation service. It presents custom-made animated invitations for weddings, birthdays, First Communions, gender reveal parties, company events and more.

**Live:** [https://moodddii.github.io/invite-me/](https://moodddii.github.io/invite-me/)

The page content is written in Polish.

## Features

- Responsive layout (desktop, tablet, mobile, down to 320px)
- Hero section with the main call to action
- Event types grid with image cards
- "How it works" step-by-step section
- Benefits section
- Mobile navigation menu built with pure CSS, no JavaScript
- Sticky header and smooth scrolling

## Tech stack

- HTML5
- CSS3: custom properties, flexbox, nesting, media queries
- Google Fonts: Inter and Playfair Display
- No JavaScript, no build step, no dependencies

## Project structure

```
invite-me/
├── index.html
├── images/
└── styles/
    ├── reset.css
    ├── main.css
    └── responsive.css
```

| File | Purpose |
| --- | --- |
| `styles/reset.css` | Basic CSS reset |
| `styles/main.css` | Design tokens, base styles and desktop layout |
| `styles/responsive.css` | Media queries and the CSS-only burger menu |

## Responsive breakpoints

| Breakpoint | Changes |
| --- | --- |
| `max-width: 1024px` | Hero switches to a single column, smaller headings and spacing |
| `max-width: 768px` | Burger menu, smaller text, full-width event cards |
| `max-width: 480px` | Compact header, full-width hero button, tighter spacing |

## How the mobile menu works

A hidden checkbox (`#nav-toggle`) and a `<label>` styled as a burger icon control the menu. When the checkbox is checked, the `:checked` selector reveals the navigation list. The burger icon turns into a close icon the same way.

## Run locally

Open `index.html` in a browser. To serve it over HTTP instead:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deployment

The site is hosted on GitHub Pages, served from the `main` branch root.

## Author

[MOODDDII](https://github.com/MOODDDII)
