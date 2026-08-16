# ⚡ Sainath - Developer Portfolio

A modern, award-winning personal portfolio website built with **React**, **Tailwind CSS**, and **Framer Motion**.

![Portfolio Preview](/profile.jpg)

---

## ✨ Features

- 🎨 **Awwwards-Inspired Visuals**: Deep charcoal background (`#0a0a0f`), electric blue-cyan-violet gradient accents, frosted glassmorphism cards, and ambient background parallax.
- 🎯 **Interactive Real Photo Showcase**: Floating circular portrait with glowing multi-layer gradient rings and status badges.
- 🔮 **Interactive Project Demonstrations**: Live simulator modals for both **AgroHire** (Gemini AI Machinery Matcher) and **Multi-Modal Steganography** (AES-256 Cryptographic LSB Embedding).
- 🖱️ **Custom Cursor & Parallax**: Smooth spring-animated cursor that expands on clickable elements + interactive mouse-following mesh gradient.
- 🌓 **Dark & Light Mode**: Seamless theme switching with persistent local storage.
- 🎓 **Education & Experience Timeline**: UVCE Bengaluru (CGPA 8.72), Class XII (95.33%), and Class X (88.16%).
- 🛠️ **Categorized Skills Matrix**: Filterable and searchable capability cards with proficiency tags.
- 📜 **Verified Credentials**: IBM AI Fundamentals, AWS & Technical Skills, HTML/CSS DevTown, and Soft Skills.
- 📬 **Interactive Contact Form**: Client-side validation, confetti celebration on dispatch, and one-click copy-to-clipboard for Email & Phone.
- 🕒 **Live Bengaluru Time Clock**: Real-time IST clock in the footer.

---

## 🚀 Quick Start (Running Locally)

1. **Install dependencies** (if not already installed):
   ```bash
   npm install
   ```

2. **Start the local Vite development server**:
   ```bash
   npm run dev
   ```

3. Open your browser at `http://localhost:5173`

---

## 🛠️ Easy Customization Guide

All personal information, social links, project descriptions, skills, education, and credentials are centralized in a single file:

📂 [`src/data/portfolioData.js`](file:///c:/Users/Saikumar/OneDrive/Desktop/PORTFOLIO/src/data/portfolioData.js)

### Replacing Profile Picture & Resume:
- **Profile Picture**: Place your photo at `public/profile.jpg` (or update `personalInfo.avatar` in `portfolioData.js`).
- **Resume PDF**: Place your resume PDF at `public/resume.pdf` and update `personalInfo.resumeUrl = '/resume.pdf'` in `portfolioData.js`.

---

## 📦 Tech Stack

- **Framework**: React 19 + Vite
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React + SVG Icons
- **Effects**: Canvas Confetti
