# METU MATH 120 Course Hub - Recreation Specification

This document provides a complete technical blueprint and set of prompts to recreate the "METU MATH 120 Course Hub" application from scratch.

## 1. Core Architecture & Tech Stack

**Technical Prompt:**
"Initialize a modern web application using Vite with React and TypeScript. Configure Tailwind CSS (v4) for styling and Framer Motion for high-end animations. Use `date-fns` for time-based logic and `lucide-react` for iconography. Ensure the project supports absolute imports and modern ESM syntax."

- **Framework**: React 19+
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4 (using CSS variables for design tokens)
- **Animations**: Framer Motion (Spring physics, AnimatePresence)
- **Date Utilities**: date-fns
- **Icons**: Lucide React

## 2. Global Design System (2026 Modern Glassmorphism)

**Technical Prompt:**
"Implement a sophisticated Glassmorphism design system. 
1. Create an 'Aurora' dark background with multiple radial gradients (Indigo/Space) and a 3% opacity SVG noise texture overlay.
2. Define a `.glass-panel` utility class with `backdrop-filter: blur(24px)`, a semi-transparent 1px border, and an inner ambient light leak (1px top-border gradient).
3. Implement `.glass-panel-interactive` with a 400ms `cubic-bezier(0.16, 1, 0.3, 1)` transition for hover/active states, adding a scale effect (1.01) and border-glow.
4. Customize the scrollbar to be slim and semi-transparent to match the premium OS aesthetic."

## 3. Data Layer & Semester Logic

**Technical Prompt:**
"Create a centralized data store (`courseData.ts`) containing syllabus topics, YouTube video URLs, and 'Paul's Online Math Notes' links for 14 weeks. 
Implement a custom hook `useCurrentWeek` that:
1. Hardcodes a semester start date (e.g., February 16, 2026).
2. Calculates the current week number based on the current system time.
3. Clamps the result between Week 1 and Week 14.
4. Defaults to Week 1 if the semester has not yet started."

## 4. User Interface Components

### 4.1 Header & Sticky Navigation
"Create a sticky header with a frosted glass background (`backdrop-blur-md`). 
- Include a logo section with an icon that tilts slightly (`-3deg`) on hover.
- Implement a title with a white-to-indigo gradient.
- Add a 'Panic Mode' toggle button styled as a neon red glass pill with a glowing hover effect."

### 4.2 Weekly Navigation Edges
"Implement 'Navigation Edges' that appear on the left and right sides of the viewport. 
- These components should 'peek' inward on hover using a rounded-edge glass panel.
- They must support click events to navigate between weeks.
- Use Framer Motion's `AnimatePresence` for swipe-based transitions between week cards, using spring physics and a subtle blur filter during movement."

### 4.3 Bento Grid Week Card
"Design a `WeekCard` component using an asymmetrical Bento Grid layout (12-column grid).
1. **Header Tile**: Display the week number and start date with large, bold typography.
2. **Syllabus Tile**: A vertical list of topics with custom bullet points and staggered entry animations.
3. **Notes Tile**: A grid of buttons linking to external PDFs/Notes, featuring internal glow effects on hover.
4. **Lecture Videos Tile**: A grid of YouTube video cards.
   - Automatically pre-fetch video thumbnails using the YouTube ID from the URL.
   - Implement a hover effect where the thumbnail scales and changes mix-blend modes (mix-blend-luminosity) to reveal color.
   - Overlay a custom Play button with its own glassmorphic blur."

## 5. Functional Feature: Panic Mode

**Technical Prompt:**
"Implement a 'Panic Mode' feature to help students catch up.
1. **Range Picker**: When Panic Mode is toggled, show a modal with a grid of 14 weeks. Allow the user to select a start and end week.
2. **Mega Card Generation**: Aggregate the content of all selected weeks into a single 'Mega Card'.
   - Deduplicate syllabus topics.
   - Deduplicate YouTube video links and Paul's Notes.
3. **Visual Distinction**: Style the Mega Card with red neon glowing borders and a unique header ('Panic Mega Card!') to distinguish it from a standard week card."

## 6. Interaction & Performance Requirements

**Technical Prompt:**
"Ensure the application maintains 60FPS performance by using `will-change: transform` on animated elements. Animations must use spring physics (`stiffness: 300, damping: 30`) for a 'native' feel. Support touch gestures (drag-to-swipe) for week navigation. The entire app must be fully responsive, collapsing the Bento Grid into a single column on mobile devices while maintaining padding and readability."
