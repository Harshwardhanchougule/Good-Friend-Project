# Deployment Guide

## Good Friend Mortgage Website

This document provides detailed instructions for deploying the Good Friend Mortgage website in different environments.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Local Deployment](#local-deployment)
3. [Replit Deployment](#replit-deployment)
4. [Traditional Hosting Deployment](#traditional-hosting-deployment)
5. [Docker Deployment](#docker-deployment)
6. [Post-Deployment Verification](#post-deployment-verification)
7. [Troubleshooting](#troubleshooting)

## Prerequisites

Before deploying the application, ensure you have the following:

- Access to the project codebase
- Node.js 20.x or higher and npm 10.x or higher
- Required environment variables (if any)
- Access to the target deployment platform

## Local Deployment

### For Development

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd good-friend-mortgage-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. The application will be available at `http://localhost:5000`

### For Production Testing

1. Build the application:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm start
   ```

3. The application will be available at `http://localhost:5000`

## Replit Deployment

### One-click Deployment

1. Ensure you're logged into your Replit account
2. Navigate to the project in Replit
3. Click the "Deploy" button in the Replit interface
4. Follow the on-screen instructions to complete the deployment
5. Once deployed, your application will be accessible at a `.replit.app` domain

### Manual Replit Deployment

1. Fork the project on Replit
2. Open the forked project
3. Configure the Run button to use the start command: `npm start`
4. Click the Run button to start the application
5. Use the "Deployment" tab to set up a custom domain if needed

### Environment Variables on Replit

If your application requires environment variables:

1. In the Replit interface, navigate to the "Secrets" tab
2. Add each environment variable as a secret
3. Restart your application for the changes to take effect

## Traditional Hosting Deployment

### VPS or Dedicated Server

1. Build the application locally:
   ```bash
   npm run build
   ```

2. Transfer the following files to your server:
   - `dist/` directory (contains the frontend build)
   - `dist-server/` directory (contains the compiled backend)
   - `package.json` and `package-lock.json`
   - `.env` file (if needed, with production values)

3. On the server, install production dependencies:
   ```bash
   npm ci --production
   ```

4. Start the application:
   ```bash
   npm start
   ```

5. Set up a process manager like PM2 to keep the application running:
   ```bash
   npm install -g pm2
   pm2 start npm --name "good-friend-mortgage" -- start
   pm2 save
   pm2 startup
   ```

### Nginx Configuration

If you're using Nginx as a reverse proxy:

1. Install Nginx:
   ```bash
   sudo apt update
   sudo apt install nginx
   ```

2. Create a new Nginx configuration file:
   ```bash
   sudo nano /etc/nginx/sites-available/good-friend-mortgage
   ```

3. Add the following configuration:
   ```nginx
   server {
       listen 80;
       server_name your-domain.com www.your-domain.com;

       location / {
           proxy_pass http://localhost:5000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

4. Create a symbolic link to enable the site:
   ```bash
   sudo ln -s /etc/nginx/sites-available/good-friend-mortgage /etc/nginx/sites-enabled/
   ```

5. Test the Nginx configuration:
   ```bash
   sudo nginx -t
   ```

6. If the test is successful, restart Nginx:
   ```bash
   sudo systemctl restart nginx
   ```

7. Set up SSL with Let's Encrypt:
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d your-domain.com -d www.your-domain.com
   ```

## Docker Deployment

### Creating a Docker Image

1. Create a `Dockerfile` in the project root:

```dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci --production

COPY dist ./dist
COPY dist-server ./dist-server

EXPOSE 5000

CMD ["npm", "start"]
```

2. Build the Docker image:
   ```bash
   docker build -t good-friend-mortgage .
   ```

3. Run the Docker container:
   ```bash
   docker run -p 5000:5000 -d good-friend-mortgage
   ```

### Docker Compose

For more complex deployments, create a `docker-compose.yml` file:

```yaml
version: '3'

services:
  web:
    build: .
    ports:
      - "5000:5000"
    environment:
      - NODE_ENV=production
    restart: always
```

Then run:

```bash
docker-compose up -d
```

## CI/CD Deployment

### GitHub Actions Example

Create a file at `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      # Add deployment steps for your specific platform
      # e.g., deploy to a cloud provider or server via SSH
```

## Post-Deployment Verification

After deploying, verify that:

1. The website loads properly and all pages are accessible
2. Interactive elements (buttons, forms) work correctly
3. The responsive design functions on different screen sizes
4. API endpoints are working properly
5. No console errors are present

### Automated Testing

For automated verification, you can use tools like:

- **Lighthouse**: For performance, accessibility, and SEO testing
- **Cypress**: For end-to-end testing
- **Postman**: For API testing

## Deployment Configurations

### Environment Variables

Depending on the environment, you may need different environment variables. Here's a template for environment variables that might be needed:

```
NODE_ENV=production
PORT=5000
API_URL=https://api.example.com
```

### Security Considerations

1. **HTTPS**: Always use HTTPS in production
2. **Content Security Policy**: Implement appropriate CSP headers
3. **Rate Limiting**: Implement rate limiting on API endpoints
4. **Environment Variables**: Never commit sensitive environment variables to the repository

## Troubleshooting

### Common Deployment Issues

1. **Application Won't Start**
   - Check if all dependencies are installed
   - Verify that the build process completed successfully
   - Check for errors in the application logs

2. **API Endpoints Not Working**
   - Verify the server is running properly
   - Check CORS configuration
   - Ensure environment variables are set correctly

3. **Styling Issues**
   - Check if CSS files are being served properly
   - Verify that the build process for CSS completed successfully

4. **Performance Issues**
   - Check for memory leaks
   - Optimize database queries if applicable
   - Consider implementing caching

### Viewing Logs

**On Replit**:
- View logs in the console pane

**On a VPS with PM2**:
```bash
pm2 logs good-friend-mortgage
```

**With Docker**:
```bash
docker logs <container-id>
```

## Maintenance

### Updates and Patches

1. Pull the latest code from the repository
2. Install dependencies and build the application
3. Deploy the new build following the appropriate steps above

### Backups

Regularly backup any data stored by the application, especially if you're using a database.

### Monitoring

Set up monitoring for your application to track performance and availability.

---

This deployment guide covers the basics of deploying the Good Friend Mortgage website. The specific steps may vary depending on your infrastructure and requirements.
