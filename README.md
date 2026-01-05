# FreshCart Ecommerce App

A modern ecommerce application built with Next.js 14 and React.

## Tech Stack

- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **Bootstrap 5** - CSS framework
- **React Query** - Data fetching and caching
- **Formik & Yup** - Form handling and validation
- **Axios** - HTTP client

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
├── app/                    # Next.js App Router pages and layouts
│   ├── (auth)/            # Authentication routes
│   ├── (main)/            # Main application routes
│   └── layout.jsx         # Root layout
├── src/
│   ├── components/        # React components
│   ├── Context/          # React Context providers
│   ├── ProtectedRoutes/  # Route protection components
│   └── utils/            # Utility functions
└── public/               # Static assets
```

## Features

- User authentication (Sign in, Sign up, Password reset)
- Product browsing and search
- Shopping cart
- Wishlist
- Order management
- Category and brand filtering
- Responsive design

## API Configuration

The app uses the Ecommerce Route API. 

### Environment Variables

Create a `.env.local` file in the root directory (copy from `.env.example`):

```env
NEXT_PUBLIC_API_BASE_URL=https://ecommerce.routemisr.com/api/v1
NEXT_PUBLIC_FRONTEND_URL=http://localhost:3000
```

The app will use these environment variables if available, otherwise it will use default values. See `ENV_EXPLANATION.md` for more details.

## Migration Notes

This project was migrated from Create React App to Next.js. See `MIGRATION_NOTES.md` for details.

## License

This project is open source and available under the MIT License.

## Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.
