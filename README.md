# Password Strength Checker

A clean, interactive web app that evaluates password strength in real time using rule-based checks. The project provides immediate visual feedback through a strength meter, live requirement checklist, and show/hide password controls, making it a practical cybersecurity-focused frontend portfolio piece.

> **Live Demo:** [https://password-strength-checker-ln6u.onrender.com](https://password-strength-checker-ln6u.onrender.com)
> **GitHub Repository:** [https://github.com/jwkh26vy8c-source/password-strength-checker-](https://github.com/jwkh26vy8c-source/password-strength-checker-)

---

## Project Overview

This Password Strength Checker was built to demonstrate core password hygiene concepts through a simple, user-friendly interface. As a user types, the app evaluates whether the password meets several security criteria and translates those results into a clear strength rating.

The project is especially useful as a cybersecurity portfolio item because it connects secure authentication concepts with practical JavaScript UI behavior and responsive web design.

---

## Key Features

* Real-time password strength analysis
* Five validation checks:

  * 12 or more characters
  * Uppercase letter
  * Lowercase letter
  * Number
  * Special character
* Strength labels ranging from **Very Weak** to **Very Strong**
* Dynamic visual strength meter
* Live checklist with pass/fail indicators
* Show/Hide password toggle
* Lightweight, responsive frontend design
* Hosted live demo on Render

---

## Tech Stack

* **HTML**
* **CSS**
* **JavaScript**
* **Vite-style project structure**
* **Render** for deployment

---

## How It Works

The checker evaluates the current password against five rules. Each rule that passes increases the password score by one point. The score then determines both the displayed strength label and the width of the strength meter.

### Strength Mapping

| Score | Strength    |
| ----: | ----------- |
|   0–1 | Very Weak   |
|     2 | Weak        |
|     3 | Fair        |
|     4 | Strong      |
|     5 | Very Strong |

---

## Project Structure

```text
password-strength-checker-/
├── index.html
├── package.json
├── package-lock.json
├── src/
│   ├── main.js
│   └── style.css
└── README.md
```

---

## Local Setup

### 1. Clone the Repository

```bash
git clone https://github.com/jwkh26vy8c-source/password-strength-checker-.git
cd password-strength-checker-
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm run dev
```

Open the local development URL shown in your terminal.

---

## Security Concepts Demonstrated

This project demonstrates practical understanding of:

* Password complexity requirements
* Client-side validation logic
* Strength scoring based on multiple password characteristics
* User-focused security feedback
* Authentication security awareness
* Frontend interactivity with JavaScript event handling

---

## Resume-Friendly Project Summary

> Built and deployed an interactive password strength checker using HTML, CSS, and JavaScript that evaluates passwords in real time against five security criteria, updates a visual strength meter and checklist dynamically, and provides a responsive user-friendly interface hosted on Render.

---

## Future Improvements

Possible enhancements include:

* Common-password blacklist detection
* Password breach check integration using a privacy-preserving API approach
* Entropy-based scoring
* Passphrase guidance aligned with modern password recommendations
* Accessibility refinements
* Light/dark theme toggle
* Copy-to-clipboard password suggestion feature

---

## Author

**Caleb DeBari**
Cybersecurity-focused builder creating practical portfolio projects across security awareness, blue-team tooling, and secure application design.
