# Data Mining Blog

![header](/public/readme_header.png)

A modern, high-performance blog dedicated to Data Mining, Machine Learning, and Deep Learning, built with **Next.js**

## Project Overview

The **Data Mining Blog** serves as a digital knowledge base for students interested in data science. It transforms Markdown content into, static web pages, offering a seamless reading experience.

The core problem it solves is providing a clean, distraction-free environment to consume complex technical content, with a focus on ease of maintenance for the author (simply pushing Markdown files).

## Features

- **Static Site Generation (SSG)**: Blazing fast performance and SEO benefits using Next.js App Router.
- **Markdown-Based Content**: Articles are written in standard Markdown with frontmatter for easy management.
- **Modern UI/UX**:
  - Glassmorphism design elements.
  - Fully responsive layout for mobile, tablet, and desktop.
  - Smooth animations powered by `framer-motion` and `tw-animate-css`.
- **Analytics**: Integrated Vercel Analytics and Speed Insights.

## Architecture & Data Flow

This project follows a **static content architecture**:

1.  **Content Layer**: Articles are stored as `.md` files in the `/articles` directory. Each file contains YAML frontmatter (title, date, tags, etc.) and the article body.
2.  **Data Fetching**:
    - `lib/articles.ts` reads the file system using Node.js `fs` module.
    - `gray-matter` parses metadata and content.
    - `remark` converts Markdown to HTML.
3.  **Presentation Layer**:
    - The **Home Page** (`app/page.tsx`) fetches all sorted articles and displays them using `GlassBlogCard` components.
    - **Article Pages** (`app/[article]/page.tsx`) generate static routes for each post, rendering the content using the `ArticleContent` component.

## Tech Stack
- **Framework**: Next.js 16
- **Content Processing**:
  - `gray-matter` (Frontmatter parsing)
  - `remark` & `remark-html` (Markdown to HTML)
- **UI Components**: Radix UI primitives, Framer Motion
- **Package Manager**: Bun

## Folder Structure

```
├── app/                  # Next.js App Router pages
│   ├── [article]/        # Dynamic route for individual blog posts
│   ├── layout.tsx        # Root layout (Navbar, ThemeProvider, Analytics)
│   ├── page.tsx          # Home page listing all articles
│   └── globals.css       # Global styles and Tailwind configuration
├── articles/             # Markdown content files (Source of Truth)
├── components/           # Reusable React components
│   ├── ui/               # Primitive UI components (buttons, cards, etc.)
│   ├── glass-blog-card   # Blog post preview card
│   └── navbar.tsx        # Responsive navigation bar
├── lib/                  # Utility functions
│   ├── articles.ts       # Logic to read/parse Markdown files
│   └── utils.ts          # Helper functions (class merging, etc.)
├── public/               # Static assets (images, fonts, favicon)
└── types/                # TypeScript type definitions
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended) or [Bun](https://bun.sh/)
- Git

### Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/yourusername/datamining-blog.git
    cd datamining-blog
    ```

2.  Install dependencies:
    ```bash
    bun install
    # or
    npm install
    ```

