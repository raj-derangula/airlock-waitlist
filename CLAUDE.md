# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static landing page for **Airlock**, a focus app for creators targeting iOS launch in June 2026. No build system — pure HTML/CSS/JavaScript served as static files.

## Development

No install or build step required. To develop locally:

```bash
# Serve with any static file server, e.g.:
python3 -m http.server 8080
# or
npx serve .
```

Open `http://localhost:8080` in a browser. The `airlock-mockup.html` is loaded inside an `<iframe>` in `index.html` — it uses React 18 + Babel Standalone loaded via CDN and transpiles JSX in-browser at runtime.

## Architecture

### Files

- **`index.html`** — Main landing page. Split-column layout (copy + email form on left, iOS mockup on right). Handles email capture via [Formspree](https://formspree.io/f/xeerkroz) and UTM parameter tracking.
- **`airlock-mockup.html`** — App mockup rendered inside an iframe. Uses React 18.3.1 + Babel 7.29.0 via CDN. Displays the Airlock app home screen (focus score, session tracking, platform list).
- **`ios-frame.jsx`** — Standalone `IOSDevice` React component rendering iPhone chrome (Dynamic Island, bezel, home indicator). Scales a 390×844 viewport to 640px height.

### Design Tokens

| Token | Value |
|---|---|
| Primary accent | `#A8243C` |
| Background | `#FDFDFD` |
| Text primary | `#1A1A1A` |
| Text secondary | `#4A4A4A` |
| Border | `#E0E0E0` |
| Font | Inter (Google Fonts, weights 400–800) |

### External Dependencies (CDN only)

- React 18.3.1 + ReactDOM (unpkg)
- Babel Standalone 7.29.0 (for in-browser JSX transpilation in `airlock-mockup.html`)
- Google Fonts — Inter

### Form Integration

Email submissions POST to Formspree endpoint `https://formspree.io/f/xeerkroz`. The form handler in `index.html` intercepts the submit event, sends a `fetch` POST with JSON, and shows inline success/error feedback without a page reload.
