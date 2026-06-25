# Mini Motus & Pendu JS Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a static educational JavaScript workshop project with a guided Mini Motus TP, a Pendu variant, final demos, student starter files, and GitHub publication.

**Architecture:** The project is plain HTML/CSS/JS so students can open files directly and deploy them with Netlify Drop. The final game is split into `index.html`, `style.css`, and `script.js`; student variants are self-contained HTML files with a shared stylesheet.

**Tech Stack:** HTML, CSS, vanilla JavaScript, Git, GitHub.

---

### Task 1: Final Mini Motus

**Files:**
- Create: `index.html`
- Create: `style.css`
- Create: `script.js`

- [x] Create a polished final Mini Motus game with a 6x5 grid, input, validation, replay button, victory and defeat states.
- [x] Use beginner-friendly JavaScript: arrays, random choice, conditions, loops, DOM updates, and events.

### Task 2: Student Starters

**Files:**
- Create: `student/motus.html`
- Create: `student/pendu.html`
- Create: `student/student-style.css`

- [x] Provide a Motus starter with guided comments and incomplete sections.
- [x] Provide a Pendu starter with guided comments and incomplete sections.
- [x] Keep both files directly deployable on Netlify Drop.

### Task 3: Guided Interactive TP

**Files:**
- Create: `tp-stagiaires.html`

- [x] Create a guided browser TP with selectable iterations.
- [x] Include validation for key beginner concepts.
- [x] Include a branch point explaining Motus vs Pendu.

### Task 4: Docs And Publishing

**Files:**
- Create: `README.md`

- [x] Document project structure, objectives, recommended flow, and Netlify deployment.
- [x] Run local checks by opening the static files in Chrome with Playwright.
- [x] Commit locally.
- [ ] Push to GitHub after creating the remote repository. The available connector can write to existing repositories but does not expose repository creation in this session.
