# React & TailwindCSS Portfolio 

@0xJonaseb11

A simple portfolio starter theme built with React and Tailwind CSS. 

## Features

-   [React v18](https://reactjs.org) with [React Router v6](https://reactrouter.com)
-   [Tailwind CSS v3](https://tailwindcss.com)
-   Context API For State Management
-   Custom Hooks
-   Unit Testing
-   Framer Motion transitions & animations
-   Reusable components
-   Dark mode
-   Projects filter by category
-   Projects filter by search
-   Smooth scroll
-   Counter
-   Dynamic forms
-   Back to top button
-   Download file button
-   Simple and responsive design

## Environment configuration

Create a `.env` file in `client/` with the following keys so live crypto pricing works without hitting CoinGecko's new browser CORS restrictions:

```
REACT_APP_COINGECKO_API_KEY=your_pro_api_key   # optional but preferred
REACT_APP_COINGECKO_DEMO_KEY=your_demo_api_key # fallback if you only have a demo key
```

The app automatically falls back to CryptoCompare when both keys are missing or CoinGecko rate limits the request, so data is still available during development.

------------

@0xJonaseb11
