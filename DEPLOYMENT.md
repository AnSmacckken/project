# Deployment Guide

This guide will help you deploy the FreshCart application to various platforms.

## Vercel (Recommended for Next.js)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your GitHub repository
4. Vercel will automatically detect Next.js and configure the build settings
5. Click "Deploy"

### Environment Variables (if needed)

If you need to set environment variables:
- Go to your project settings on Vercel
- Navigate to "Environment Variables"
- Add any required variables

## Netlify

1. Build command: `npm run build`
2. Publish directory: `.next`
3. Add environment variables in Netlify dashboard

## Docker

Create a `Dockerfile`:

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

Build and run:
```bash
docker build -t freshcart .
docker run -p 3000:3000 freshcart
```

## Manual Deployment

1. Build the project: `npm run build`
2. Start the production server: `npm start`
3. The app will be available on port 3000

## Build Optimization

- Ensure all images are optimized
- Use Next.js Image component for better performance
- Enable compression on your hosting provider
- Use a CDN for static assets
