# Fast Pizza

Fast Pizza is a modern pizza-ordering web application built with Next.js App Router, TypeScript, Redux Toolkit, and Tailwind CSS.

The app focuses on a smooth order journey: from choosing pizzas, to managing a cart, to placing and tracking delivery orders in real time.

## Highlights

- App Router architecture with server and client components
- Centralized state management with Redux Toolkit
- Dynamic menu and order data from a remote REST API
- Full cart flow: add, update quantity, remove, clear
- Order creation with optional priority surcharge
- Order tracking by order ID
- Address autofill using browser geolocation + reverse geocoding
- Responsive UI optimized for mobile and desktop

## Tech Stack

- Next.js 15 (App Router)
- React 18
- TypeScript
- Redux Toolkit + React Redux
- Tailwind CSS
- ESLint + Prettier

## Project Structure

```text
app/
	layout.tsx            # Root layout and metadata
	page.tsx              # Home page
	menu/page.tsx         # Menu page (server data fetch)
	cart/page.tsx         # Cart page
	order/new/page.tsx    # Create order page
	order/[orderId]/page.tsx  # Order details page

src/
	features/
		cart/               # Cart UI + cart slice
		menu/               # Menu list and items
		order/              # Order create/search/update UI
		user/               # User onboarding + user slice
	services/
		apiRestaurant.ts    # Menu/order API calls
		apiGeocoding.ts     # Reverse geocoding integration
	ui/                   # Shared layout/components
	utils/                # Helpers and formatting
```

## Getting Started

### 1. Prerequisites

- Node.js 24.x (recommended to match the project engine)
- npm

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run linting

## Core User Flow

1. Enter name on the home page.
2. Browse menu and add pizzas to cart.
3. Adjust quantities or remove items.
4. Place order with phone and address.
5. Optionally enable priority delivery (+20%).
6. Track order status via order ID.

## Data Sources

- Restaurant API: `https://react-fast-pizza-api.onrender.com/api`
- Reverse geocoding API: BigDataCloud reverse geocode endpoint

## Deployment

This project is ready for deployment on Vercel.

Typical production flow:

```bash
npm run build
npm run start
```

## Quality and Conventions

- Type-safe codebase with TypeScript
- Feature-oriented folder structure
- Redux selectors for derived state
- Consistent formatting with Prettier + Tailwind plugin

## License

This project is for educational and portfolio use. Add a dedicated license file if you plan to distribute it publicly.
