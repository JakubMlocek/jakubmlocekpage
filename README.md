# jakubmlocekpage

Personal portfolio & CV for Jakub Mlocek, Cybersecurity Engineer.

Static site (plain HTML/CSS/JS, no build step), hosted on GitHub Pages.

## Structure

- `index.html`: page markup (Hero, Education, Experience, Projects, Contact)
- `css/style.css`: styling (dark theme, animations, responsive layout)
- `js/main.js`: content data (edit `EDUCATION`, `EXPERIENCE`, `PROJECTS` arrays here to update the site) plus interactivity
- `assets/`: put `profile.jpg` (your photo) and `cv.pdf` (your CV) here

## Updating content

Open `js/main.js` and edit the `EDUCATION`, `EXPERIENCE`, and `PROJECTS` arrays at the top of the file. The page renders them automatically; no HTML editing required.

To add your photo, drop `profile.jpg` into `assets/` and swap the placeholder `<div class="photo-placeholder">` block in `index.html` (inside `.photo-frame`) for:

```html
<img src="assets/profile.jpg" alt="Jakub Mlocek">
```

## Local preview

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000
