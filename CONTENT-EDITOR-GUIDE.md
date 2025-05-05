# Content Editor Guide

## Good Friend Mortgage Website

This guide is designed for content editors who need to update text, images, or other content on the Good Friend Mortgage website without requiring technical development knowledge.

## Overview

The Good Friend Mortgage website is built using React, a modern web development framework. Content is stored directly in the code files rather than in a content management system (CMS), so updates require editing specific files in the codebase.

## Understanding the Website Structure

The website consists of the following main pages:

1. **Home** - Main landing page with hero section, value proposition, services, process steps, and testimonials
2. **About** - Information about the company, team, and mission
3. **Services** - Detailed information about mortgage services offered
4. **Calculators** - Interactive mortgage calculator tool
5. **Contact** - Contact form and company contact information

## Locating Content Files

Content is primarily stored in the following locations:

### Page Content

Page content is located in the `client/src/pages/` directory:

- `HomePage.tsx` - Content for the home page
- `AboutPage.tsx` - Content for the about page
- `ServicesPage.tsx` - Content for the services page
- `CalculatorsPage.tsx` - Content for the calculators page
- `ContactPage.tsx` - Content for the contact page

### Component-Specific Content

Some content is in component files located in `client/src/components/` and organized by page or function:

- `components/home/` - Components used on the home page
- `components/layout/` - Header, footer, and navigation components
- `components/contact/` - Contact form and contact info components

## How to Edit Content

### Text Content

To edit text content, locate the appropriate file and look for the text you want to change. Text content is typically found inside components as JSX elements.

Example of text content in a component:

```jsx
<h1 className="text-4xl font-bold">Welcome to Good Friend Mortgage</h1>
<p className="text-lg mt-4">
  We're dedicated to helping you find the perfect mortgage solution for your dream home.
</p>
```

To edit this text, simply change the content between the opening and closing tags.

### Testimonials

Testimonials are typically stored as arrays or objects in the component file. Look for variables named like `testimonials` or `testimonialData`.

Example:

```jsx
const testimonials = [
  {
    quote: "Working with Good Friend Mortgage was a wonderful experience. They made the process easy and stress-free.",
    name: "Jane Smith",
    location: "Denver, CO",
    initials: "JS"
  },
  // More testimonials...
];
```

To add, edit, or remove testimonials, modify this array.

### Services

Services information is typically stored in an array or object structure similar to testimonials. Look for variables named like `services` or `serviceData`.

### Images

Images are typically imported at the top of component files:

```jsx
import heroImage from "@assets/hero-image.jpg";
```

To change an image, you'll need to:

1. Add the new image to the appropriate assets directory
2. Update the import statement to point to the new image

## Common Content Elements to Update

### Company Information

Look for the following in various files:

- Business address
- Phone numbers
- Email addresses
- Social media links
- Business hours

These are typically found in the `Footer.tsx` and `ContactInfo.tsx` components.

### Navigation Links

Navigation links are usually defined in `Header.tsx` or a similar navigation component. Look for an array of links:

```jsx
const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  // More links...
];
```

### Service Descriptions

Service descriptions are generally found in:

- `components/home/Services.tsx` - For overview of services on the home page
- `pages/ServicesPage.tsx` - For detailed service descriptions

### Process Steps

The mortgage process steps are typically defined in `components/home/Process.tsx` or a similar component. Look for an array of steps with titles and descriptions.

## Best Practices for Content Updates

1. **Make Backups**: Always create a backup of the file before making changes
2. **Preserve Formatting**: Maintain the existing formatting, including proper indentation
3. **Don't Change Code**: Only modify content text, not the surrounding code structure
4. **Respect Text Length**: Try to keep the new content similar in length to the original
5. **Test Changes**: After changes are deployed, verify them on the live site

## Common Mistakes to Avoid

1. **Deleting Code**: Be careful not to remove any JSX tags or code structures
2. **Breaking Quotes**: Ensure quotes (`"`) are properly opened and closed
3. **HTML in Text**: If you need HTML formatting in your text, use proper JSX syntax
4. **Removing Variables**: Don't delete or rename variables that might be used elsewhere

## Working with Developers

If you need to make complex changes beyond simple text updates, consider:

1. **Documenting Changes**: Clearly document what changes you need
2. **Providing Complete Content**: Give the full text for any new sections
3. **Using Collaborative Tools**: Use tools like Google Docs to prepare content before implementation

## Testing Your Changes

After content changes are implemented and deployed:

1. Visit the relevant pages on the website
2. Verify that your changes appear correctly
3. Check on multiple devices (desktop, tablet, mobile)
4. Test any links or interactive elements you've modified

---

If you have questions or encounter issues when updating content, please contact the development team for assistance.
