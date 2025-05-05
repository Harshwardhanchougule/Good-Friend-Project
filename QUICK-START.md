# Good Friend Mortgage Website - Quick Start Guide

## Overview

This is a modern, mobile-first website for Good Friend Mortgage built with React, TypeScript, and Express. It features responsive design, interactive components, and a clean user interface.

## Getting Started in 5 Minutes

### Prerequisites

- Node.js 20.x or higher
- npm 10.x or higher

### Step 1: Clone and Install

```bash
# Clone the repository
git clone <repository-url>
cd good-friend-mortgage-website

# Install dependencies
npm install
```

### Step 2: Start Development Server

```bash
npm run dev
```

The application will be available at http://localhost:5000

### Step 3: Explore Key Files

- **Main App**: `client/src/App.tsx`
- **Pages**: `client/src/pages/`
- **Components**: `client/src/components/`
- **API Routes**: `server/routes.ts`

## Key Features

- Responsive, mobile-first design
- Interactive mortgage calculator
- Contact form with validation
- Multiple page sections

## Making Changes

### Frontend

1. Edit components in `client/src/components/`
2. Modify pages in `client/src/pages/`
3. Update styles using Tailwind classes

### Backend

1. Edit API routes in `server/routes.ts`
2. Modify data storage in `server/storage.ts`

## Deployment

### Build for Production

```bash
npm run build
```

### On Replit

Click the "Deploy" button in the Replit interface and follow on-screen instructions.

### On Other Platforms

See the complete `DEPLOYMENT.md` document for detailed instructions.

## Need More Information?

Refer to these documents for detailed information:

- `README.md` - Complete project overview
- `DEVELOPER.md` - Detailed development guide
- `DEPLOYMENT.md` - Comprehensive deployment instructions

## Troubleshooting

- **Application won't start**: Check Node.js version and ensure all dependencies are installed
- **Component errors**: Check browser console for specific error messages
- **Styling issues**: Verify Tailwind classes and check for conflicts

---

For questions or support, please refer to the contact information in the main README.
