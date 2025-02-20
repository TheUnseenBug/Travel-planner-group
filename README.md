# React Travel Planner

This project is a React-Redux Travel Planner application that helps users plan and manage their trips. Users can add, edit, and delete trips, view trip details, and see upcoming trips in a user-friendly interface. The app integrates location search and activity management to enhance trip planning.

## Features

### 1. Home Page
Add a New Trip: Users can easily navigate to the trip form to add a new trip.
View Upcoming Trips: Displays the three most recent upcoming trips.
View All Trips: Redirects users to a page displaying all trips.

### 2. Trip Details
Detailed Trip View: Shows trip destination, date, activities, and images.
Edit Trip: Users can modify the details of the trip.
Delete Trip: Users can delete a trip after confirmation.
Map Integration: A map displays the location of the destination using OpenStreetMap.

### 3. Add & Edit Trips
Dynamic Form: A form to add or edit trip details, including:
      Destination (with autocomplete suggestions).
      Departure date.
      Activities list, with options to add or remove activities.
      Notifications: Shows success messages when trips are added or updated.

### 4. Autocomplete for Destinations
Uses Nominatim's OpenStreetMap API to provide suggestions for destinations based on user input.

### Installation

Clone the repository:
git clone <repository-url>
cd <repository-folder>

Install dependencies:
npm install

Start the development server:
npm start

The app will be available at http://localhost:3000.

## Project Structure

Home: The main page where users can add a new trip or view recent trips.

TripDetails: Displays detailed information for a selected trip, with options to edit or delete.

Forms: A reusable component for adding and editing trip details.

MapComponent: Displays a map of the trip's destination.

TripCard: A card component used to display individual trip summaries.

## State Management
This project uses Redux to manage application state. The state is structured to include:
Trips: Stores all trip details.
Notifications: Manages notification messages for user actions (e.g., trip saved or edited).


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
