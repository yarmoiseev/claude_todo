# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **learning-focused to-do list web application** designed to be snappy, simple, elegant, and minimalist with responsive, mobile-first design.

### Core Features
- Add, edit, and delete tasks
- Assign priority levels (3 levels)
- Drag-and-drop task reordering
- Local storage using IndexedDB

### Learning Objectives
This is a Claude Code guided study project to help developers learn modern web technologies and acquire new skills through hands-on practice.

## Technology Stack

**Required Technologies:**
- **TypeScript** (strict - NO vanilla JS allowed)
- **HTML Components** for UI structure
- **Tailwind CSS** for styling
- **IndexedDB** for local data storage
- **ESLint & Prettier** for code quality
- **Vite** as bundler and dev server

**Design Requirements:**
- Mobile-first, responsive design
- Minimalist and elegant UI/UX
- Fast and snappy performance

## Common Commands

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
npm run type-check   # TypeScript type checking (tsc --noEmit)
```

## Architecture Guidelines

### Project Structure
- Component-based architecture using HTML components
- TypeScript-first development (no .js files)
- Tailwind utility-first styling approach
- IndexedDB for persistent local storage

### Development Patterns
- Mobile-first responsive design principles
- Semantic HTML with proper accessibility
- TypeScript strict mode for type safety
- Modern ES modules and async/await patterns

### Data Management
- IndexedDB for task persistence
- Simple state management (no external state library needed)
- Local-first approach with offline functionality

## Development Notes

- **TypeScript Only**: Strictly use TypeScript - no vanilla JavaScript files
- **Learning Focus**: Prioritize understanding over speed - take time to explore each technology
- **Code Quality**: Use ESLint and Prettier consistently for clean, maintainable code
- **Responsive Design**: Always implement mobile-first, then enhance for larger screens
- **Performance**: Keep the app snappy with efficient DOM updates and minimal bundle size