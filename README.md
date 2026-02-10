📌 Project Dashboard – Frontend Assignment

### Live Demo
https://project-dashboard-frontend.netlify.app/

## Overview

This project is a simple Project Dashboard built as part of a frontend assignment.
It simulates an internal system that lists projects, supports client-side filtering, and displays project details.

The focus of this implementation is clarity, correctness, and clean structure, rather than visual design or animations.

## Tech Stack

- React.js
- Vite
- React Router
- Plain CSS (minimal inline styling)

## Setup Instructions

**Clone the repository:**

```bash
git clone <repository-url>
cd project-dashboard-frontend
```

**Install dependencies:**

```bash
npm install
```

**Start the development server:**

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

## Features Implemented

- Project list view using mock data
- Client-side filtering by:
  - Project name or client name
  - Project status
  - Combined filtering without mutating original data
- Project detail view with routing
- Graceful handling of:
  - Empty project list
  - No results after filtering
  - Long project names
  - Missing optional fields

## Extra Field

An additional field `description` was added to each project.

**Reason:**  
It represents realistic project metadata and helps demonstrate handling of optional fields in the UI.

## Assumptions

- All data is static and client-side only
- No backend or API integration is required
- Project IDs are unique and stable
- Styling is intentionally minimal

## Trade-offs

- State management is handled with React hooks instead of external libraries to avoid over-engineering
- Filtering is performed on the client for simplicity
- No pagination or advanced performance optimizations were added due to limited data size

## Notes

This project prioritizes maintainability, readability, and predictable state flow over visual polish.
