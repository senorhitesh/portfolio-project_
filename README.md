<div align="center">

# 🚀 Interactive Portfolio

### A motion-driven personal portfolio showcasing advanced frontend animation patterns

[![Made with GSAP](https://img.shields.io/badge/Animated%20with-GSAP-88CE02?style=flat&logo=greensock)](https://greensock.com/gsap/)
[![Smooth Scroll](https://img.shields.io/badge/Smooth%20Scroll-Locomotive-7C3AED?style=flat)](https://github.com/locomotivemtl/locomotive-scroll)
[![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

[View Live Demo](https://personal-portfolio-trial.vercel.app/) • [Report Bug](#) • [Request Feature](#)

---

</div>

## 🎯 Overview

An immersive, performance-focused portfolio experience built from the ground up with cutting-edge web animation techniques. This project showcases a blend of design and development expertise through case studies in AI/ML, Fintech, Real Estate, E-Commerce, and Web3 domains.

Features motion-first design concepts, interactive hover-based video previews, and a smooth scrolling experience that creates a premium, agency-level feel.

> **Built for developers and designers** who appreciate the craft behind seamless user experiences.

---

## ✨ Key Features

### 🖱️ Custom Cursor System
- **Fluid Motion**: Cursor follows mouse with GSAP-powered transforms for zero-lag tracking
- **Contextual States**: Dynamically scales and morphs on hover, click, and interaction zones
- **Smart Layering**: Uses `pointer-events: none` to prevent interference with clickable elements
- **Performance**: Hardware-accelerated transforms keep animations smooth across devices

### 🎥 Interactive Video Previews
- **Hover-Triggered Playback**: Videos smoothly fade in and play when hovered, pause on leave
- **Optimized Loading**: Utilizes `preload="metadata"` and `playsinline` for fast, mobile-friendly previews
- **Accessibility**: Muted by default with subtle visual feedback for seamless browsing

### 🌊 Smooth Scroll Experience
- **Locomotive Scroll Integration**: Silky-smooth scrolling with momentum and easing
- **GSAP Sync**: Perfectly synchronized with ScrollTrigger using `scrollerProxy`
- **Performance Conscious**: Transform-based scrolling avoids layout thrashing

### ✨ Polished Micro-interactions
- **Animated SVG Elements**: Asterisk decorations and arrows respond with spring-based physics
- **Infinite Scroll Marquees**: Tech stack icons and case study tags flow seamlessly
- **Hover Choreography**: Project cards reveal video previews with carefully timed transitions
- **Accessibility First**: All interactions maintain focus states and keyboard navigation

---

## 🛠️ Technology Stack

<table>
<tr>
<td align="center" width="25%">
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" width="48" height="48" alt="HTML5" />
<br><strong>HTML5</strong>
<br><sub>Semantic markup</sub>
</td>
<td align="center" width="25%">
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" width="48" height="48" alt="CSS3" />
<br><strong>CSS3</strong>
<br><sub>Modern styling</sub>
</td>
<td align="center" width="25%">
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" width="48" height="48" alt="JavaScript" />
<br><strong>Vanilla JS</strong>
<br><sub>Zero dependencies</sub>
</td>
<td align="center" width="25%">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" width="48" height="48" alt="npm" />
<br><strong>GSAP</strong>
<br><sub>Animation engine</sub>
</td>
</tr>
</table>

**Core Libraries:**
- **GSAP 3.x** – Industry-standard animation platform
- **ScrollTrigger** – Scroll-based animation orchestration
- **Locomotive Scroll** – Smooth scrolling engine

---

## 🧠 Technical Insights

### Performance Optimizations

```javascript
// ✅ Hardware-accelerated transforms
gsap.to(cursor, { x: mouseX, y: mouseY, duration: 0.5, ease: "power2.out" });

// ❌ Avoid layout-triggering properties
// gsap.to(cursor, { left: mouseX, top: mouseY });
```

**Why this matters:** Using `transform` properties triggers GPU acceleration and avoids costly layout recalculations, resulting in smoother 60fps animations.

### Locomotive + GSAP Integration

```javascript
// Sync Locomotive's virtual scroll with GSAP
ScrollTrigger.scrollerProxy("[data-scroll-container]", {
  scrollTop(value) {
    return arguments.length 
      ? locoScroll.scrollTo(value, 0, 0) 
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
  }
});
```

---

## ⚠️ Common Pitfalls & Solutions

<details>
<summary><strong>❌ Custom cursor disappearing with Locomotive Scroll</strong></summary>

**Problem:** Locomotive wraps content in a transform-based container, breaking `position: fixed` cursors.

**Solution:** Move cursor element outside the scroll container:
```html
<div class="custom-cursor"></div>
<div data-scroll-container>
  <!-- Your content -->
</div>
```
</details>

<details>
<summary><strong>❌ Laggy cursor movement</strong></summary>

**Problem:** Using `top`/`left` triggers layout on every frame.

**Solution:** Use transforms for hardware acceleration:
```javascript
gsap.to(".cursor", { x: e.clientX, y: e.clientY });
```
</details>

<details>
<summary><strong>❌ ScrollTrigger animations not firing</strong></summary>

**Problem:** ScrollTrigger defaults to `window` but Locomotive hijacks scroll.

**Solution:** Register and proxy correctly:
```javascript
gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.scrollerProxy("[data-scroll-container]", { /* config */ });
```
</details>

---

## 🎓 Key Learnings

- **Transform vs Position:** Why `translate(x, y)` outperforms `top`/`left` for animations
- **Scroll Virtualization:** How Locomotive uses transforms to create smooth scroll illusion
- **Event Delegation:** Managing hover states on dynamic content without performance hits
- **Critical Rendering Path:** Optimizing paint, layout, and composite phases
- **Accessibility Balance:** Creating delightful interactions that don't exclude keyboard/screen reader users

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/yourusername/portfolio.git

# Navigate to directory
cd portfolio

# Install dependencies (if using package manager)
npm install

# Open in browser or deploy to Vercel
open index.html
# or
vercel --prod
```

**Live Site:** [https://personal-portfolio-trial.vercel.app/](https://personal-portfolio-trial.vercel.app/)

**No build process required** – this is intentionally built with vanilla JavaScript to showcase fundamental web platform skills.

---

## 🗺️ Roadmap

- [ ] Add dark/light theme toggle with GSAP color transitions
- [ ] Expand case studies with detailed project breakdowns
- [ ] Implement blog section with MDX integration
- [ ] Add contact form with email integration
- [ ] Create interactive skill visualization with progress animations
- [ ] Optimize for mobile with reduced motion preferences
- [ ] Add page transition animations between sections

---

## 💬 Feedback & Contributions

This project is a living portfolio piece that evolves with web platform capabilities. Feedback, suggestions, and constructive criticism are highly valued.

**For recruiters:** This project demonstrates not just coding ability, but understanding of performance, UX principles, and modern animation techniques used in production applications.

**For developers:** Feel free to fork, experiment, and reach out with questions about implementation details.

📧 **Get in touch:** [senorhitesh@gmail.com](mailto:senorhitesh@gmail.com)  
💼 **Connect on LinkedIn:** [linkedin.com/in/jm-suthar-9343513a5](https://www.linkedin.com/in/jm-suthar-9343513a5)

---

## 👨‍💻 Author

**Hitesh Suthar**  
Aspiring Full-Stack Web Developer • Design & Development Enthusiast

[![Portfolio](https://img.shields.io/badge/Portfolio-000000?style=for-the-badge&logo=About.me&logoColor=white)](https://personal-portfolio-trial.vercel.app/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/jm-suthar-9343513a5)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:senorhitesh@gmail.com)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](#)

> *"Great design is invisible. Great animation makes it unforgettable."*

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

**Learning & Inspiration:** Feel free to learn from this code, but please create something original rather than copying directly.

---

<div align="center">

### ⭐ If this project helped you learn something new, consider starring it!

Made with ❤️ and lots of ☕

</div>
