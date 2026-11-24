# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Primary Users:** Technical recruiters, engineering managers, startup founders, and hiring leads evaluating candidates for full-time Software Engineering roles or freelance/contract engagements.
- **Situation & Job:** Scanning the portfolio quickly (often under 2–3 minutes) to verify real-world engineering depth, inspect deployed production applications and source repositories, review automated test coverage and system metrics, check credentials/certifications, and initiate contact or download a resume.

## Product Purpose

- **What it does:** A single-page interactive engineering portfolio for Ahsan Yasir Sharar showcasing production projects, quantified architecture and QA metrics, professional work experience, academic background, certifications, and direct contact pathways.
- **Why it exists:** To convert technical visitors and recruiters into interview invitations and engineering contract inquiries by demonstrating verifiable proof of work rather than generic skill claims.
- **Success:** Visitors quickly grasp Ahsan's core engineering strengths, explore live demos/repositories/videos, review or print his resume, and reach out via direct email, LinkedIn, or the integrated contact form.

## Positioning

Ahsan Yasir Sharar is positioned at the intersection of **Python/Django full-stack & backend engineering**, **AI/RAG & agentic workflows**, **network automation**, and **QA/RPA & test automation** (Playwright, Vitest, Selenium, n8n, pytest-django, UiPath). Unlike portfolios that list frameworks without verification, every flagship build pairs production backend/AI architecture with quantified system metrics (e.g., query reduction from 1,002 to 3, row-level concurrency locks, 145+ automated E2E/unit test suites, multi-agent queues, and enterprise RPA/OCR pipelines).

## Operating Context

- **Evaluation Workflow:** Visitors land on the Hero summary, scan quick highlights in About, review Experience and Education timelines, filter or inspect Featured Projects (opening multi-image lightboxes, live Railway/Render demos, YouTube walkthroughs, GitHub repos, or Kaggle writeups), check the Skills Matrix and Certificate gallery, open/print the interactive Resume Modal or Google Drive resume, and send a message via the Contact Form.
- **Deployment & Runtime Environment:** Static single-page web application built with React 19, TypeScript, Vite 6, Tailwind CSS v4, and Motion (`motion/react`), hosted on GitHub Pages at `https://ays19.github.io/Sharar-s-portfolio/` with base path `/Sharar-s-portfolio/`.

## Capabilities and Constraints

- **Confirmed Capabilities:**
  - Responsive section navigation with mobile drawer (`About`, `Experience`, `Education`, `Projects`, `Skills`, `Certificates`, `Contact`).
  - Category-filtered project showcase (`All`, `Backend`, `AI & Agents`, `Full-stack`) with featured project prioritization (`HELPDESK` Kaggle Capstone badge) and keyboard-accessible image gallery lightbox.
  - Certificate showcase with expandable view, image preview modal, and external credential links.
  - Interactive `ResumeModal` with dedicated `@media print` stylesheet for clean PDF/print export alongside an external Google Drive resume link.
  - Client-side contact form powered by FormSubmit AJAX (`https://formsubmit.co/ajax/sahsanyasir@gmail.com`) with honeypot spam protection and submission status feedback.
- **Technical Constraints:**
  - Runs as a purely client-side static bundle on GitHub Pages (`/Sharar-s-portfolio/` base URL); no custom backend server is hosted with the portfolio itself.
  - External links point to live deployments on Railway and Render, source code on GitHub (`github.com/ays19`), video demos on YouTube, and capstone writeups on Kaggle.

## Brand Commitments

- **Identity:** Ahsan Yasir Sharar (`ahsan.yasir()`, monogram `AY`), based in Dhaka, Bangladesh (open to remote and on-site full-time roles and contracts).
- **Voice:** Direct, technical, evidence-led, and pragmatic—leading with concrete architecture decisions, test counts, latency/query improvements, and real tools.
- **Contact & Social Anchors:**
  - Email: `sahsanyasir@gmail.com`
  - Phone: `+880 1729 524544`
  - GitHub: `https://github.com/ays19`
  - LinkedIn: `https://www.linkedin.com/in/yasirsharar/`

## Evidence on Hand

- **Profile Asset:** `src/assets/images/pic.webp`
- **Flagship Projects (`src/data.ts` & `public/Project/`):**
  - `HELPDESK — AI Helpdesk & Ticketing System` (`public/Project/Helpdesk/`, 9 images, live Railway demo, YouTube video, GitHub repo, Google × Kaggle 2026 AI Agents Intensive Capstone writeup, 145 automated tests).
  - `SaaS-Django — Stripe Subscription Platform` (`public/Project/SaaS_Django/`, 9 images, live Render demo, YouTube video, GitHub repo, 9 decoupled Django apps, Neon Postgres branching CI/CD).
  - `Storefront — Production-Grade E-Commerce REST API` (`public/Project/Storefront_ss/`, 20 images, live Railway demo, YouTube video, GitHub repo, ORM optimization from 1,002 queries to 3, 92% test coverage).
  - `Fitness Tracker Portal` (`public/Project/Fitness/`, 3 images, GitHub repo, React/Node/Express/PostgreSQL/Recharts).
- **Work Experience (`src/data.ts`):**
  - `DataFort Limited` — Automation Intern (`Oct 2026 – Present`, Dhaka, Bangladesh): 200+ Selenium E2E tests across Robo2mation, POM framework with Allure 2 & openpyxl, Tkinter/PyInstaller GUI test runner, ChallanAI financial OCR & RAG app (n8n + Gemini 2.5 Pro), and n8n/Pinecone/UiPath Studio & Orchestrator RPA bots.
  - `SWOT System Limited` — Junior Software Developer (`Feb 2025 – Feb 2026`, Part-time, Dhaka, Bangladesh): 4-member engineering team feature delivery, manual testing and defect analysis, and technical documentation/training materials for Cisco DevNet, CyberOps, and Java EE7.
- **Education (`src/data.ts`):**
  - `United International University` — B.Sc. in Computer Science and Engineering (`2020 – 2024`, CGPA 3.38/4.00, 1st Runner-up at UIU Project Show 2022, multiple academic scholarships, IoT/CNN plant disease detection thesis with 92% validation accuracy on AWS + Raspberry Pi).
- **Certifications (`public/Certificates/`):** 15 certificate images (`1.png` through `15.png`/`.jpg`) covering Google & Kaggle AI Agents, AWS AI Practitioner Challenge, UiPath Academy (Automation Developer Associate & Business Analysis), Cisco DevNet Associate, CodersTrust Python & Django, UIU Project Show, Microsoft & LinkedIn, and more.
- **Guardrail on Missing Evidence:** Do not fabricate client testimonials, unverified employment dates, synthetic benchmark numbers, or unconfirmed certifications. Preserve existing repository dates and claims unless explicitly updated by the user.

## Product Principles

1. **Proof Over Claims:** Pair every technical capability with verifiable artifacts—live deployments, source repositories, walkthrough videos, test counts, or concrete performance metrics.
2. **Recruiter-First Scanability:** Keep high-signal facts (role focus, tech stack, key achievements, resume access, and contact links) immediately legible for time-constrained reviewers.
3. **Full-Lifecycle Engineering Credibility:** Present backend architecture, AI/agentic integration, network automation, and automated QA/RPA verification as one cohesive engineering discipline.
4. **Honest Static Delivery:** Maintain fast, zero-backend reliability on GitHub Pages while linking cleanly to external live services and interactive modals.
