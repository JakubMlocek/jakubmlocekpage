# jakubmlocekpage

Personal portfolio & CV for Jakub Mlocek, Cybersecurity Engineer.

Static site (plain HTML/CSS/JS, no build step), hosted on GitHub Pages.

## Structure

- `index.html`: page markup (Hero, Projects, Experience, Education, Contact)
- `css/style.css`: styling (dark theme, animations, responsive layout)
- `js/main.js`: rendering and interactivity. You shouldn't need to touch this for everyday edits.
- `data/`: **the content you actually edit** — see below
- `assets/`: put `profile.jpg` (your photo) and `cv.pdf` (your CV) here

## Updating content

All page content (Education, Experience, Projects, Certifications) lives in plain JSON files under `data/`, separate from the code:

- `data/education.json`
- `data/experience.json`
- `data/projects.json`
- `data/certifications.json`

Open the relevant file, edit it, save, and push. The page loads and renders these automatically; no HTML or JavaScript editing required.

### JSON basics (if you're not used to it)

- Every string, and every key, must be wrapped in **double quotes** `"like this"`, not single quotes.
- Items in a list are separated by commas, but the **last item must not have a trailing comma**.
- If you save a file and the section on the live/local page goes blank with a red error message, that means a JSON syntax mistake, almost always a missing quote, a missing comma, or an extra trailing comma. Compare brackets/braces carefully, or paste the file into [jsonlint.com](https://jsonlint.com) to find the exact spot.

### Adding an Education or Experience entry

Minimal entry (just a summary, nothing to expand):

```json
{
  "date": "Jan 2020 – Dec 2020",
  "title": "Job or Degree Title",
  "org": "Company or University Name",
  "desc": "One or two sentence summary shown right away.",
  "tags": ["Tag1", "Tag2"]
}
```

To make it expandable with a "Show ..." button, add a `"detail"` object. Three flavors of detail body are supported, pick ONE:

**A flat bullet list** (`items`) — used in the EITCA education entry:

```json
"detail": {
  "label": "job details",
  "items": [
    "First bullet point.",
    "Second bullet point."
  ],
  "note": "Optional small italic footnote shown after the list."
}
```

**Grouped bullets with sub-headings** (`groups`) — used in the RBC Bearings experience entry:

```json
"detail": {
  "label": "job details",
  "groups": [
    { "label": "Category One", "items": ["Bullet.", "Another bullet."] },
    { "label": "Category Two", "items": ["Bullet."] }
  ]
}
```

`label`, `intro`, and `note` are all optional text fields you can add to either style.

### Adding a Project

```json
{
  "title": "Project Name",
  "desc": "Short summary shown on the card by default.",
  "tags": ["Tag1", "Tag2"]
}
```

To make the whole card clickable and reveal a longer technical write-up, add a `"detail"` object with `"paragraphs"` (an array of prose paragraphs, rendered one per `<p>`):

```json
"detail": {
  "label": "technical breakdown",
  "paragraphs": [
    "First paragraph of the write-up.",
    "Second paragraph. You can use <strong>bold</strong> and <code>inline code</code> here."
  ]
}
```

Add `"repo": "https://..."` and/or `"link": "https://..."` to a project to show "Code" / "Live" links on the card.

Any key starting with `_` (e.g. `"_note"`) is ignored by the renderer — use it for editor-only reminders, since JSON doesn't support comments.

### Adding a Certification

```json
{
  "name": "Certification Name",
  "issuer": "Issuing Organization",
  "meta": "Issued Jan 2026 · Expires Jan 2027 · ID XXXXXX"
}
```

### Adding your photo

Drop `profile.jpg` into `assets/`. The `<img>` tag in `index.html` (inside `.photo-frame`) already points at it, so no HTML edit is needed.

## Local preview

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000

Note: the content is loaded via `fetch()` from the `data/` folder, so a local preview **must** go through a server like the one above. Double-clicking `index.html` to open it directly (`file://...`) will not load the content, since browsers block that kind of local file loading for security reasons.
