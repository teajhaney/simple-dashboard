# Stakeme: Crypto Staking Dashboard

## Overview
This project presents a sleek, modern, and highly responsive crypto staking dashboard built with React and TypeScript. It offers users a comprehensive overview of their staking activities, top assets, and liquid staking portfolios, leveraging a dynamic UI with Shadcn/UI and Tailwind CSS for a superior user experience.

## Features
*   **User Profile & Management**: Displays user information, including a "Pro" badge for premium accounts, and quick actions like deposit.
*   **Top Staking Assets**: Showcases a curated list of popular staking assets (Ethereum, BNB Chain, Polygon) with their reward rates, trend indicators, and mini-charts for quick insights.
*   **Active Staking Overview**: Provides a detailed section for current active stakings, including current reward balance, last update time, and key metrics.
*   **Dynamic Metric Cards**: Collapsible cards for various staking metrics (momentum, general, risk, reward) offering expandable details.
*   **Interactive Mini-Charts**: Utilizes Recharts to display historical trend data for staking assets in a concise visual format.
*   **Responsive Sidebar Navigation**: A collapsible sidebar ensures seamless navigation across different dashboard sections on all device sizes.
*   **Liquid Staking Portfolio**: Integrates a dedicated card for liquid staking, prompting users to connect their wallets or enter an address.
*   **Modern UI/UX**: Crafted with Shadcn/UI components and styled with Tailwind CSS, ensuring a clean, intuitive, and performant interface.

## Getting Started

### Installation
To get this project up and running on your local machine, follow these steps:

*   **Clone the Repository**:
    ```bash
    git clone https://github.com/teajhaney/simple-dashboard.git
    cd simple-dashboard
    ```
*   **Install Dependencies**:
    ```bash
    npm install
    # or yarn install
    # or pnpm install
    ```
*   **Run the Development Server**:
    ```bash
    npm run dev
    ```

### Environment Variables
This project does not require any specific environment variables for local development as presented. All data is currently mocked.

## Usage
Once the development server is running, the application will be accessible in your web browser, typically at `http://localhost:5173/`.

The dashboard presents a clean interface with a collapsible sidebar on the left for navigation. The main content area displays:

1.  **Header**: Showing user profile, current balance (mocked), and action buttons like "Deposit" and notifications.
2.  **Top Staking Assets**: A grid of cards, each representing a staking asset with its current reward rate, a trend indicator, and a miniature line chart visualizing its performance.
3.  **Your Active Stakings**: A detailed card showing a specific active staking, its reward balance, and a grid of metric cards. Each metric card is collapsible to reveal more details.

Feel free to interact with the UI elements. The sidebar can be toggled to collapse/expand on larger screens. The tabs within the sidebar for "Staking" and "Stablecoin" are functional placeholders for future features.

## Technologies Used

| Technology | Description |
| :--------- | :---------------------------------------------------------------------- |
| <img src="https://skillicons.dev/icons?i=react" alt="React" width="20" height="20" /> [React](https://react.dev/) | A JavaScript library for building user interfaces. |
| <img src="https://skillicons.dev/icons?i=typescript" alt="TypeScript" width="20" height="20" /> [TypeScript](https://www.typescriptlang.org/) | A strongly typed superset of JavaScript that compiles to plain JavaScript. |
| <img src="https://skillicons.dev/icons?i=vite" alt="Vite" width="20" height="20" /> [Vite](https://vitejs.dev/) | A fast frontend build tool that provides a lightning-fast development experience. |
| <img src="https://skillicons.dev/icons?i=tailwindcss" alt="Tailwind CSS" width="20" height="20" /> [Tailwind CSS](https://tailwindcss.com/) | A utility-first CSS framework for rapidly building custom designs. |
| <img src="https://ui.shadcn.com/favicon.ico" alt="Shadcn/UI" width="20" height="20" /> [Shadcn/UI](https://ui.shadcn.com/) | A collection of re-usable components built using Radix UI and Tailwind CSS. |
| <img src="https://recharts.org/img/recharts.png" alt="Recharts" width="20" height="20" /> [Recharts](https://recharts.org/en-US/) | A composable charting library built on React components. |
| <img src="https://www.radix-ui.com/favicon/favicon-32x32.png" alt="Radix UI" width="20" height="20" /> [Radix UI](https://www.radix-ui.com/) | A low-level UI component library for building accessible design systems. |
| <img src="https://skillicons.dev/icons?i=eslint" alt="ESLint" width="20" height="20" /> [ESLint](https://eslint.org/) | Pluggable JavaScript linter for identifying and reporting on patterns found in ECMAScript/JavaScript code. |

## Author Info
*   **Your Name**: [Your LinkedIn](https://www.linkedin.com/in/yourprofile) | [Your Twitter](https://twitter.com/yourhandle) | [Your Portfolio](https://yourportfolio.com)

## Badges
[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Shadcn/UI](https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=shadcn-ui&logoColor=white)](https://ui.shadcn.com/)
[![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)](https://eslint.org/)

[![Readme was generated by Dokugen](https://img.shields.io/badge/Readme%20was%20generated%20by-Dokugen-brightgreen)](https://www.npmjs.com/package/dokugen)