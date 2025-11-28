# Velizar Ganchev -- Developer Portfolio

A modern, production-grade Angular single‑page application showcasing my
skills, projects, and engineering approach --- with an emphasis on clean
architecture, performance, responsiveness, and polished UX.

## Overview

This repository contains my personal portfolio site built with Angular
17. It centralizes my professional background, showcases selected
projects, presents my technical stack, and offers contact options.

The application focuses on high‑quality front‑end engineering:
standalone component architecture, functional routing, declarative
animations, reusable UI patterns, strong accessibility practices, and a
clean codebase designed for easy extension.

## Key Features

### Portfolio Sections

-   **Home / Intro** -- Hero layout with introduction and CTAs.\
-   **Skills & Technology** -- Overview of my key competencies.\
-   **Projects** -- Curated examples of real projects with visual
    previews and external links.\
-   **Experience / About** -- Professional background and highlights.\
-   **Contact** -- Contact form with client-side validation. Includes a
    lightweight PHP handler (`src/app/sendMail.php`) for environments
    that support it.

### Animations & UX Enhancements

-   `FadeInDirective` -- Scroll‑activated fade-in animations.\
-   `ClickStopPropagationDirective` -- Controlled event bubbling for
    complex UI interactions.

### Internationalization

-   Powered by **Transloco** (`src/app/transloco-loader.ts`,
    `transloco.config.js`).\
-   Easy expansion to new languages.

### Reusable Components & Layouts

-   Shared UI modules and layout components (`src/app/components`,
    `src/app/shared`).\
-   Consistent styling driven by SCSS and global Angular configuration.

### Responsive, Mobile‑First Design

-   Global SCSS architecture and utility classes ensure great behaviour
    across all device sizes.

### Connectivity & External Links

-   Structured links to GitHub, LinkedIn, and downloadable CV.

## Tech Stack

-   **Angular 17** (standalone APIs, functional providers, new control
    flow)
-   **TypeScript**, **HTML**, **SCSS**
-   **Angular Router** (SPA routing via functional definitions)
-   **Transloco i18n**
-   **Firebase Hosting**
-   Tooling: Angular CLI, ESLint, Jasmine/Karma

  Category        Technology / Package
  --------------- --------------------------------------------
  Framework       Angular \^17.x
  Language        TypeScript, HTML, SCSS
  Routing         Angular Router (standalone)
  i18n            @ngneat/transloco
  Animations/UX   Custom directives (fade-in, click control)
  Testing         Jasmine, Karma
  Hosting         Firebase Hosting

### Exact Versions

-   Angular packages: `^17.0.0`\
-   Transloco: `^6.0.4`\
-   Icons: `@ng-icons/core`, `@ng-icons/heroicons`

## Architecture & Code Organization

    src/app/
    ├── app.config.ts
    ├── app.routes.ts
    ├── app.component.*
    ├── home/
    ├── components/
    ├── shared/
    ├── models/
    ├── fade-in.directive.ts
    ├── click-stop-propagation.directive.ts
    ├── transloco-loader.ts
    └── sendMail.php

### Highlights

-   Clean, modular structure with clear separation of concerns.
-   Standalone components allow lightweight, scalable architecture.
-   Functional routing provides a modern, streamlined navigation setup.
-   SCSS‑based styling with a consistent design system.

## Getting Started (Local Development)

### Prerequisites

-   Node.js 18+ (LTS recommended)\

-   Angular CLI \^17.x

        npm i -g @angular/cli

### Setup

    git clone https://github.com/velizarganchev/portfolio.git
    cd portfolio
    npm install
    npm start

Open: **http://localhost:4200**\
Hot reload is enabled.

## Available Scripts

  ----------------------------------------------------------------------------
  Script   Command                                            Description
  -------- -------------------------------------------------- ----------------
  start    `ng serve`                                         Start dev server

  build    `ng build`                                         Production/dev
                                                              build

  watch    `ng build --watch --configuration development`     Auto rebuild

  test     `ng test`                                          Unit tests
  ----------------------------------------------------------------------------

## Building for Production

    ng build --configuration production

-   Outputs to `dist/portfolio/`.\
-   Enables AOT, tree‑shaking, minification, asset optimization.

## Deployment (Firebase Hosting)

Configuration files: - `.firebaserc` - `firebase.json`

### Deploy Flow

    ng build --configuration production
    firebase deploy

Authenticated via:

    firebase login
    npm i -g firebase-tools

**Note:** For contact functionality, Firebase Hosting alone cannot run
PHP. Consider migrating the handler to Firebase Functions or a
third‑party API.

## Project Highlights --- What This Portfolio Demonstrates

-   Proficiency with modern Angular (standalone architecture, new
    control flow, functional routing).
-   Clean UI engineering and reusable design patterns.
-   Well‑structured SCSS and responsive layouts.
-   Internationalization awareness through Transloco.
-   Deployment experience using Firebase Hosting.
-   Code readability, maintainability, and front‑end best practices.

## Roadmap / Future Enhancements

-   Add dark mode with auto theme detection.
-   Expanded project case studies with visual galleries.
-   Improved page‑level animations and route transitions.
-   Accessibility enhancements (WCAG improvements, ARIA roles).
-   Additional languages and content localization.
-   Migrate contact backend to Firebase Functions.

## License

© 2025 Velizar Ganchev --- All rights reserved.
