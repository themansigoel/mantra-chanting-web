# Mantra Chanting: Japa Mala 📿 — Chant Counter & Meditation App

Welcome to the official repository for the **Mantra Chanting: Japa Mala** landing page website. 

**Mantra Chanting: Japa Mala** is a native, premium iOS and watchOS application designed to replicate the experience of physical prayer beads (Japa Mala) with tactile bead-slide haptic feedback, acoustic microphone counting, and focus geometries.

[**Download on the App Store**](https://apps.apple.com/us/app/mantra-chanting-japa-mala/id6791468380)

---

## 🌟 Features of the App

* **Tactile Japa Mala**: Replicates wooden bead sliding using custom device haptic feedback.
* **Microphone Acoustic Counting**: Hands-free counting utilizing sound peaks or custom voice trigger detection.
* **Standalone Apple Watch App**: Meditate phone-free with accelerometer shake triggers and watch-optimized haptic feedback.
* **Liquid Zen Geometries**: Immersive focus visuals including Mandala & Sunflower breathing guidance.
* **100% Privacy Focused**: Zero third-party telemetry, ads, or data collection. All progress logs are saved locally or in your private iCloud.

---

## 🌐 Landing Page Website

This repository hosts the multi-locale landing page for the application:
* **English (Default)**: Located at [index.html](index.html)
* **Hindi (हिंदी)**: Located in the [/hi/](hi/index.html) directory
* **Japanese (日本語)**: Located in the [/ja/](ja/index.html) directory

### Features:
* Fully responsive, premium design matching the app's aesthetic.
* SEO-optimized with canonical URLs, alternate hreflang meta tags, and structured JSON-LD data for software applications and FAQs.
* Built with pure HTML5 and Vanilla CSS.

---

## 🛠️ Local Development & Deployment

The website is a static webpage. To run it locally:

1. Clone this repository:
   ```bash
   git clone git@github.com-themansigoel:themansigoel/mantra-chanting-web.git
   ```
2. Open `index.html` in any modern web browser or serve it using a lightweight static server:
   ```bash
   # Using Python
   python3 -m http.server 8000
   
   # Using Node.js/npx
   npx serve .
   ```
3. Open `http://localhost:8000` (or the port specified by your server).

### Deployment
This site is designed to be hosted via **GitHub Pages**. Pushing updates to the `main` branch will trigger automatic deployment.
