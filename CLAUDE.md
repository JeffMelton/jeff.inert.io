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

**Legacy Files (preserved for reference):**
- `main.html` - Original landing page with hero section, overview, and case studies
- `tools.html` - Original technical documentation of enterprise platform engineering tools

**Current Astro Project:**
- `portfolio-astro/` - Main Astro project directory
  - `src/pages/` - Page components (index, tools, about, case-studies)
  - `src/layouts/` - Base layout component with shared styling and navigation
  - `src/components/` - Reusable components (future expansion)
  - `public/` - Static assets and configuration files
  - `dist/` - Built output for deployment (generated)
- `wrangler.toml` - Cloudflare Workers deployment configuration

### Migration to Cloudflare Workers + Astro ✅ COMPLETED
Successfully migrated from static HTML to Astro framework deployed on Cloudflare Workers with enhanced capabilities while maintaining simplicity and performance.

#### Framework Choice: Astro
- Static-first with optional dynamic features
- Component-based architecture for maintainability
- Excellent performance with minimal JavaScript
- Built-in optimization and modern web standards

#### Enhanced Portfolio Architecture

**Phase 1: Foundation Migration ✅ COMPLETED**
- ✅ Convert to Astro project structure
- ✅ Transform HTML files into Astro components
- ✅ Preserve existing content and styling  
- ✅ Enhanced navigation & routing with SEO-optimized URLs
- ✅ Successfully deployed to Cloudflare Workers

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

**Previous State**: Pure HTML/CSS static website with embedded styling
**Current State**: Astro-based static site deployed on Cloudflare Workers ✅

The migration successfully preserved simplicity and performance characteristics while enabling component-based development and enhanced features.

### Build and Deployment Commands

```bash
# Development
cd portfolio-astro && npm run dev

# Build for production
cd portfolio-astro && npm run build

# Deploy (automated via Cloudflare Workers CI/CD)
git push origin main
```

### Deployment Configuration
- **Cloudflare Workers**: Configured via `wrangler.toml` in repository root
- **Build Command**: `cd portfolio-astro && npm install && npm run build`  
- **Assets**: Static files from `portfolio-astro/dist/` (with `.assetsignore` filtering)
- **Worker Script**: `portfolio-astro/dist/_worker.js`

### Key Architecture Decisions

- **Component-based structure**: Astro components with embedded styling for maintainability
- **Static-first approach**: Pre-rendered HTML with minimal JavaScript for optimal performance
- **Responsive design**: Mobile-first approach with CSS media queries for different screen sizes
- **Professional styling**: Clean, modern design using system fonts and CSS gradients
- **Deployment optimization**: Automated CI/CD with proper asset filtering and security

## Content Structure

### Current Pages (Astro)

**/ (index.astro)**
- Hero section with professional introduction
- "What I Do" section explaining consulting approach
- "Tools & Platform Engineering" section with tool previews
- Case studies grid with project highlights
- Approach methodology section

**/tools (tools.astro)**
- Comprehensive technical documentation of enterprise platform engineering suite
- Detailed tool descriptions with problem/solution breakdowns
- Technology stack information (Elixir, Rust, Go, Kubernetes)
- Metrics and business impact data
- Enterprise integration features

**/about (about.astro)**
- Professional background and personal context (placeholder for Phase 2)

**/case-studies (case-studies/index.astro)**
- Detailed project narratives (placeholder for Phase 2)

## Styling Patterns

- **CSS Grid**: Used for responsive card layouts (`case-studies-grid`, `metrics-grid`)
- **Flexbox**: Used for navigation and smaller component layouts
- **Component-based CSS**: Reusable classes like `.case-study-card`, `.component-card`
- **Color scheme**: Professional blue/purple gradients with consistent color variables
- **Typography**: System font stack with clear hierarchy

## Navigation

- Clean, consistent navigation across all pages via BaseLayout component
- SEO-friendly routes: `/`, `/tools`, `/about`, `/case-studies`
- Responsive navigation that stacks on mobile devices
- Active page highlighting (ready for Phase 2 enhancement)

## Development Context

### Next Steps - Phase 2 Planning
With the foundation successfully deployed, the next phase focuses on content enhancement and interactive features:

**Priority 1: Content Development**
- Write detailed case study content (3 major projects)
- Develop personal "About" page content
- Create blog/insights section structure

**Priority 2: Interactive Features**
- Markdown-based case study system
- Syntax highlighting for code examples
- Filterable/searchable content
- Contact form with Workers backend

**Priority 3: Optimization**
- Performance analytics and monitoring
- A/B testing for conversion optimization
- Advanced SEO optimization

### Content Development Notes
When working with this codebase, remember:

- **Audience**: Technical decision-makers experiencing systemic platform pain who may not know how to articulate the need for comprehensive solutions
- **Positioning**: Demonstrates deep technical capability while emphasizing business context understanding and organizational dysfunction navigation  
- **Spiky cognitive profile awareness**: Jeff has broad domain knowledge with gaps, extreme detail orientation, and strong pattern recognition - content should reflect this analytical depth
- **Market challenge**: Organizations typically try hiring more senior engineers or attacking symptoms individually rather than seeking systemic solutions

### Content Philosophy
The website serves as a demonstration of Jeff's ability to identify, analyze, and solve complex technical problems that span multiple domains - exactly the type of systemic thinking his target market needs but often doesn't know how to request.