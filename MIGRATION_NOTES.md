# Next.js Migration Notes

This project has been migrated from Create React App to Next.js 14 with App Router.

## Key Changes

### 1. Project Structure
- **App Router**: All routes are now in the `app/` directory using Next.js App Router
- **Layouts**: Route groups `(main)` and `(auth)` are used for different layouts
- **Pages**: All pages are now in `app/` directory with proper routing structure

### 2. Routing Changes
- **React Router** → **Next.js App Router**
  - `react-router-dom` removed
  - Routes defined by file structure in `app/` directory
  - `Link` from `next/link` instead of `react-router-dom`
  - `useNavigate()` → `useRouter()` from `next/navigation`
  - `useParams()` from `next/navigation` instead of `react-router-dom`
  - Custom `NavLink` component created for active link styling

### 3. Component Updates
- All components marked with `'use client'` directive for client-side interactivity
- Protected routes use `useRouter().push()` for navigation
- All `Link` components updated to use `href` instead of `to` prop

### 4. Configuration
- `next.config.js` created with image domain configuration
- `package.json` updated with Next.js dependencies
- Removed `react-scripts` and `react-router-dom`

### 5. Running the Project

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### 6. Important Notes
- All components that use hooks or interactivity must have `'use client'` directive
- Image optimization: Use Next.js `Image` component for better performance (optional)
- Server-side rendering: Pages can be made server components by removing `'use client'` where appropriate
- Public assets: Keep in `public/` folder at root level

## Route Mapping

| Old Route (React Router) | New Route (Next.js) |
|-------------------------|---------------------|
| `/` | `/` (app/page.jsx) |
| `/home` | `/home` (app/(main)/home/page.jsx) |
| `/products` | `/products` (app/(main)/products/page.jsx) |
| `/products/category/:categoryName/:categoryId` | `/products/category/[categoryName]/[categoryId]` |
| `/products/brand/:brandName/:brandId` | `/products/brand/[brandName]/[brandId]` |
| `/product-details/:slug/:id` | `/product-details/[slug]/[id]` |
| `/auth/signin` | `/auth/signin` (app/(auth)/auth/signin/page.jsx) |
| `/auth/signup` | `/auth/signup` (app/(auth)/auth/signup/page.jsx) |

## Next Steps (Optional Improvements)

1. **Image Optimization**: Replace `<img>` tags with Next.js `Image` component
2. **Server Components**: Convert static components to server components where possible
3. **API Routes**: Move API calls to Next.js API routes if needed
4. **Metadata**: Use Next.js metadata API instead of react-helmet
5. **Loading States**: Use Next.js loading.js files for better UX
