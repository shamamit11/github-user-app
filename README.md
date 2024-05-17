# GitHub User App (React + TypeScript + Vite)

This is a web application built with React that allows users to view GitHub users and delete them locally.

## Installation

To install and run the app locally, follow these steps:

1. Clone the repository to your local machine:

```bash
git clone https://github.com/shamamit11/github-user-app.git
```

2. Navigate to the project directory:

```bash
cd github-user-app
```

3. Install dependencies using npm or yarn:

```bash
npm install
```

or

```bash
yarn install
```

4. Copy '.env.example' and create '.env.local.file'

```bash
cp .env.example .env.local
```

## Usuage

To run the app locally, use the following command:

```bash
npm run dev
```

or

```bash
yarn dev
```

The app will be available at http://localhost:3001 by default.

## Build

To build the app for production, use the following command:

```bash
npm run build
```

or

```bash
yarn build
```

## Preview

To preview the app, use the following command, once you build the app:

```bash
npm run preview
```

or

```bash
yarn preview
```

## Testing

To run tests, use the following command:

```bash
npm run test
```

or

```bash
yarn test
```

## Testing UI

To run tests and visualize in UI, use the following command:

```bash
npm run test:ui
```

or

```bash
yarn test:ui
```

This will execute all unit tests using Vitest.

## E2E Testing

To run end-to-end (E2E) tests using Cypress, use the following command:

```bash
npm run cypress:open
```

or

```bash
yarn cypress:open
```

This will open the Cypress Test Runner, allowing you to run and view E2E tests interactively.

## License

This project is licensed under the MIT License.

In this version, I've clarified that the app uses port 3001 by default, and I've rephrased the instruction for starting the development server to make it clearer. Let me know if you need further adjustments!
