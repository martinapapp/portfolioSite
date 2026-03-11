# Portfolio

A personal portfolio site showcasing my projects and skills, built with vanilla JavaScript.

*[link here](https://martinapapp.dev)*

## Index

- [About](#about)
- [Development](#development)
- [Contribution](#contribution)
- [License](#license)

---

## About

A clean, responsive portfolio to present my work and contact information. The main goal was to learn how to:

- Structure a multi-section single-page site without a framework
- Use ES modules to organise data and logic separately
- Build an interactive carousel with keyboard and touch/swipe support
- Write responsive CSS with media queries and mobile-first adjustments
- Configure Vite as a build tool for a vanilla JS project
- Deploy a static site to Netlify with a custom domain
- Manage DNS records (ALIAS, CNAME) to connect a domain

---

## Development

### File Structure

| No | File Name | What it does |
| -- | --------- | ------------ |
| 1 | `index.html` | Main HTML structure — navbar, sections, carousel shell |
| 2 | `index.js` | All JS logic — carousel, contact grid, touch/keyboard events |
| 3 | `style.css` | All styles including responsive media queries |
| 4 | `data/projects.js` | Project data array — title, description, tech, links |
| 5 | `data/contactItems.js` | Contact links with inline SVG icons |
| 6 | `public/images/` | Static assets — background, project screenshots, icons |
| 7 | `netlify.toml` | Netlify build config — points to Vite's `dist/` output |
| 8 | `package.json` | Project scripts and Vite dependency |

### Build

Vite bundles the project into a `dist/` folder on `npm run build`. Static assets in `public/` are copied directly to the root of `dist/`, which is what Netlify serves. The JS files use ES module imports which Vite resolves and optimises at build time.

---

## Contribution

1. Found a bug? Open an issue and I'll try to fix it.
2. Advice? If you have ideas for improving the design or structure, let me know!

---

## License

Code is free to use for your own practice — MIT License.  
**Content, images, and personal information are not included.**

**MIT** License.