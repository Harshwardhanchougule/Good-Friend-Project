# Developer Documentation

## Good Friend Mortgage Website

This document provides detailed technical information for developers working on the Good Friend Mortgage website project.

## Getting Started

### Development Environment Setup

1. **Node.js and npm**: Ensure you have Node.js 20.x or higher and npm 10.x or higher installed.

2. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd good-friend-mortgage-website
   ```

3. **Install Dependencies**:
   ```bash
   npm install
   ```

4. **Environment Variables**:
   Create a `.env` file in the root directory if needed for any future API integrations or environment-specific configurations.

5. **Start Development Server**:
   ```bash
   npm run dev
   ```

## Architecture

### Frontend

The frontend is built with React and TypeScript, using Vite as the build tool. The application follows a component-based architecture with the following structure:

- `client/src/components`: Reusable UI components organized by function
- `client/src/pages`: Top-level page components for each route
- `client/src/hooks`: Custom React hooks
- `client/src/lib`: Utility functions and services

#### Component Structure

Components are organized into the following categories:

- **UI Components** (`components/ui/`): Base UI components from shadcn/ui library
- **Layout Components** (`components/layout/`): Header, Footer, navigation
- **Page-specific Components**: Organized by page/feature

### Backend

The backend is a simple Express.js server with the following structure:

- `server/index.ts`: Server entry point
- `server/routes.ts`: API route definitions
- `server/storage.ts`: Data storage implementation
- `server/vite.ts`: Vite integration for development

### Data Flow

1. **API Requests**: Frontend components make API requests using the `apiRequest` function from `client/src/lib/queryClient.ts`
2. **Backend Routes**: Express routes in `server/routes.ts` handle these requests
3. **Data Storage**: `server/storage.ts` provides an abstraction for data persistence

## Development Workflow

### Creating New Components

1. **Plan Component Structure**: Determine the component's purpose and how it fits into the application
2. **Create Component File**: Add a new file in the appropriate `components/` subdirectory
3. **Implement Component**: Follow the existing patterns for props, state, and styling
4. **Add to Page**: Import and use the component in the relevant page component

### Example Component

```tsx
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface MyComponentProps {
  title: string;
  onAction: () => void;
  className?: string;
}

export function MyComponent({ title, onAction, className }: MyComponentProps) {
  const [isActive, setIsActive] = useState(false);
  
  return (
    <div className={cn("p-4 rounded bg-white", className)}>
      <h2 className="text-xl font-bold">{title}</h2>
      <Button onClick={() => {
        setIsActive(!isActive);
        onAction();
      }}>
        {isActive ? "Active" : "Inactive"}
      </Button>
    </div>
  );
}
```

### Adding New Pages

1. Create a new page component in `client/src/pages/`
2. Add the route to `client/src/App.tsx`

Example:

```tsx
// In App.tsx
import { Route } from "wouter";
import { NewPage } from "./pages/NewPage";

function Router() {
  return (
    <>
      {/* Existing routes */}
      <Route path="/new-page" component={NewPage} />
    </>
  );
}
```

### Working with the API

#### Creating a New API Endpoint

1. Add the endpoint in `server/routes.ts`

```typescript
app.post('/api/new-endpoint', async (req: Request, res: Response) => {
  try {
    // Handle the request
    const data = req.body;
    
    // Process data using storage or other services
    const result = await someProcess(data);
    
    // Return a response
    return res.json(result);
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});
```

2. Call the endpoint from the frontend:

```typescript
import { apiRequest } from "@/lib/queryClient";

// In a component or hook
const handleSubmit = async (data) => {
  try {
    const response = await apiRequest('POST', '/api/new-endpoint', data);
    // Handle the response
  } catch (error) {
    // Handle the error
  }
};
```

## Styling

### Tailwind CSS

The project uses Tailwind CSS for styling. Key files:

- `tailwind.config.ts`: Configuration file with theme settings and plugin setup
- `client/src/index.css`: Global styles and CSS variables

### Adding Custom Styles

1. **Prefer Tailwind Classes**: Use Tailwind utility classes whenever possible
2. **Component-specific Styling**: Use the `cn` utility for conditional class names
3. **Global Styles**: Add global styles to `client/src/index.css`
4. **Theme Customization**: Update the theme colors in `client/src/index.css` and component definitions

## Form Handling

Forms use React Hook Form with shadcn/ui components:

```tsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Define a schema for form validation
const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
});

type FormValues = z.infer<typeof formSchema>;

export function MyForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  function onSubmit(data: FormValues) {
    // Handle form submission
    console.log(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} type="email" />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
```

## Testing

### Manual Testing Checklist

- Verify all pages render correctly on multiple screen sizes (mobile, tablet, desktop)
- Test all interactive elements (buttons, forms, inputs)
- Validate form submissions and error handling
- Check navigation between pages
- Test API endpoints

## Building and Deployment

### Build Process

The build process creates optimized bundles for both frontend and backend:

```bash
npm run build
```

This creates:
- Frontend static files in the `dist/` directory
- Compiled backend code in the `dist-server/` directory

### Deployment Process

#### Replit Deployment

1. Click the "Deploy" button in the Replit interface
2. Follow the on-screen instructions
3. Once deployed, the app will be accessible at a `.replit.app` domain

#### Production Deployment Considerations

For a production environment outside of Replit:

1. Set up a suitable production server environment with Node.js
2. Configure environment variables for production
3. Set up a CI/CD pipeline for automated deployments
4. Consider using Docker for containerization
5. Implement proper logging and monitoring

## Performance Optimization

### Frontend Optimizations

- Use React.memo for complex components that re-render frequently
- Implement code splitting with dynamic imports for larger pages
- Optimize images and other assets
- Use appropriate caching strategies with React Query

### Backend Optimizations

- Implement appropriate caching mechanisms
- Optimize database queries
- Use compression middleware

## Troubleshooting Common Issues

### React Query Issues

- Ensure query keys are consistent and properly structured
- Check that mutation invalidation is set up correctly
- Verify that error handling is properly implemented

### Styling Issues

- Check for conflicting Tailwind classes
- Ensure the Tailwind JIT compiler is working correctly
- Verify that custom CSS variables are properly defined

### API Issues

- Check for CORS configuration issues
- Verify that API routes are correctly defined
- Check for request/response format inconsistencies

## Best Practices

1. **Code Organization**: Keep components focused and single-purpose
2. **Naming Conventions**: Use clear, descriptive names for files and components
3. **TypeScript**: Use proper typing and avoid `any` types
4. **Error Handling**: Implement comprehensive error handling in all async operations
5. **Accessibility**: Ensure all components are accessible (use proper ARIA attributes, keyboard navigation)
6. **State Management**: Use local state for component-specific state, React Query for server state
7. **Code Comments**: Add comments for complex logic

## Future Enhancements

Potential areas for future development:

- User authentication and protected routes
- Integration with real mortgage calculation APIs
- Advanced form validation and multi-step forms
- Performance optimizations and code splitting
- Internationalization (i18n) support

---

This documentation is a living document and should be updated as the project evolves.
