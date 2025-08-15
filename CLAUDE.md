# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static website for Jeff Melton's DevOps & Platform Engineering consulting portfolio. Jeff is a 49-year-old autodidactic software engineer transitioning from employment to consulting, with a background as a master electrician and 12+ years in tech. He has AuDHD and a spiky cognitive profile with broad domain knowledge, extreme attention to detail, and strong pattern recognition across technical and organizational systems.

### Professional Background
- **Current role**: Platform engineering (managing 6000+ Kubernetes clusters)
- **Specialty**: Finding broken/neglected systems and building solutions around organizational dysfunction
- **Experience**: Led 3-year organizational transformation after major strategic technology failure
- **Target market**: Complex, multi-domain technical problems requiring business context understanding

### Consulting Positioning
Jeff specializes in working across the full problem-solving lifecycle: problem identification → solution design → technical implementation. He focuses on enterprise constraints, systems integration, and workflow optimization for organizations experiencing pain from technical debt, failed integrations, and platform complexity.

### Website Structure
The site consists of HTML files showcasing professional experience, case studies, and enterprise platform engineering tools, designed to demonstrate capability in solving systemic technical problems that organizations often don't know how to articulate.

## Repository Structure

- `main.html` - Primary landing page with hero section, overview, and case studies
- `tools.html` - Detailed technical documentation of enterprise platform engineering tools and their implementation

### Migration to Cloudflare Workers + Astro
The project is transitioning from static HTML to Astro framework on Cloudflare Workers for enhanced capabilities while maintaining simplicity and performance.

#### Framework Choice: Astro
- Static-first with optional dynamic features
- Component-based architecture for maintainability
- Excellent performance with minimal JavaScript
- Built-in optimization and modern web standards

#### Enhanced Portfolio Architecture

**Phase 1: Foundation Migration**
- Convert to Astro project structure
- Transform HTML files into Astro components
- Preserve existing content and styling
- Enhanced navigation & routing with SEO-optimized URLs

**Phase 2: Content Enhancement**
- Dynamic case studies (Markdown-based, filterable/searchable)
- Interactive tools showcase with code syntax highlighting
- Rich media support (diagrams, code samples)
- Technology stack visualizations

**Phase 3: Professional Features**
- Contact form with Cloudflare Workers backend
- Calendar integration for consultation booking
- Blog/insights section for thought leadership
- Analytics and lead generation capabilities

#### Technical Advantages
- Static generation with global CDN delivery (sub-second load times)
- Lighthouse scores of 95+ across all metrics
- Serverless architecture with automatic scaling
- Component reusability and TypeScript support

## Development Approach

**Current State**: Pure HTML/CSS static website with embedded styling
**Target State**: Astro-based static site generated for Cloudflare Workers

The migration preserves the simplicity and performance characteristics while enabling component-based development and enhanced features.

### Key Architecture Decisions

- **Self-contained files**: Each HTML file includes all necessary CSS styling internally
- **No external dependencies**: No JavaScript frameworks, CSS libraries, or build tools
- **Responsive design**: Mobile-first approach with CSS media queries for different screen sizes
- **Professional styling**: Clean, modern design using system fonts and CSS gradients

## Content Structure

### main.html
- Hero section with professional introduction
- "What I Do" section explaining consulting approach
- "Tools & Platform Engineering" section with tool previews
- Case studies grid with project highlights
- Approach methodology section

### tools.html
- Comprehensive technical documentation of enterprise platform engineering suite
- Detailed tool descriptions with problem/solution breakdowns
- Technology stack information (Elixir, Rust, Go, Kubernetes)
- Metrics and business impact data
- Enterprise integration features

## Styling Patterns

- **CSS Grid**: Used for responsive card layouts (`case-studies-grid`, `metrics-grid`)
- **Flexbox**: Used for navigation and smaller component layouts
- **Component-based CSS**: Reusable classes like `.case-study-card`, `.component-card`
- **Color scheme**: Professional blue/purple gradients with consistent color variables
- **Typography**: System font stack with clear hierarchy

## Navigation

- Simple anchor-based navigation within pages
- Cross-page navigation between main.html and tools.html
- Responsive navigation that stacks on mobile devices

## Development Context

### Technical Approach
This repository intentionally has no build tools, package managers, or deployment scripts. Files are served directly as static HTML/CSS, optimized for simplicity and direct deployment to Cloudflare Pages.

### Content Development Notes
When working with this codebase, remember:

- **Audience**: Technical decision-makers experiencing systemic platform pain who may not know how to articulate the need for comprehensive solutions
- **Positioning**: Demonstrates deep technical capability while emphasizing business context understanding and organizational dysfunction navigation  
- **Spiky cognitive profile awareness**: Jeff has broad domain knowledge with gaps, extreme detail orientation, and strong pattern recognition - content should reflect this analytical depth
- **Market challenge**: Organizations typically try hiring more senior engineers or attacking symptoms individually rather than seeking systemic solutions

### Content Philosophy
The website serves as a demonstration of Jeff's ability to identify, analyze, and solve complex technical problems that span multiple domains - exactly the type of systemic thinking his target market needs but often doesn't know how to request.