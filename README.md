# GameHub

GameHub is a responsive game discovery and personal library web application. Browse a catalog of games, view details, and use an account to maintain a personal library and track played games.

## Features

- Browse the game catalog and view game information, ratings, prices, and store links.
- Register and sign in with email/password or Google.
- Reset a password and update profile information.
- Access protected game detail and profile update pages.
- Add games to a personal library and mark them as played. Library data is stored in the browser's local storage per account.
- Responsive interface with animated UI elements and toast notifications.

## Built with

- React and Vite
- React Router
- Firebase Authentication
- Tailwind CSS and DaisyUI
- Framer Motion
- React Hot Toast
- React Icons

## Getting started

### Requirements

- Node.js and npm
- A Firebase project with Authentication configured

### Installation

1. Clone the repository and enter the project directory:

   ```bash
   git clone https://github.com/KhanIsrakAhmed/GameHub.git
   cd GameHub
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the project root and set the Firebase web app configuration:

   ```dotenv
   VITE_apiKey=your_firebase_api_key
   VITE_authDomain=your_project_id.firebaseapp.com
   VITE_projectId=your_project_id
   VITE_storageBucket=your_project_id.appspot.com
   VITE_messagingSenderId=your_messaging_sender_id
   VITE_appId=your_firebase_app_id
   ```

   Enable Email/Password and Google sign-in providers in Firebase Authentication.

4. Start the app:

   ```bash
   npm start
   ```

   The command prints the author name and email, then starts the Vite server on [http://localhost:3000](http://localhost:3000). For Vite's default development port, use `npm run dev` instead.

## Available scripts

| Command           | Description                                         |
| ----------------- | --------------------------------------------------- |
| `npm start`       | Print author details and start the app on port 3000 |
| `npm run dev`     | Start the Vite development server                   |
| `npm run build`   | Create a production build in `dist/`                |
| `npm run preview` | Preview the production build locally                |
| `npm run lint`    | Run ESLint                                          |

## Routes

| Path               | Description                       |
| ------------------ | --------------------------------- |
| `/`                | Home                              |
| `/games`           | Game catalog                      |
| `/gameDetails/:id` | Game details (sign-in required)   |
| `/about`           | About GameHub                     |
| `/blogs`           | Blog                              |
| `/login`           | Sign in                           |
| `/register`        | Create an account                 |
| `/forgetPassword`  | Password reset                    |
| `/profile`         | User profile                      |
| `/updateProfile`   | Update profile (sign-in required) |

Game catalog data is served from `public/games.json`.

## Author

**Khan Israk Ahmed**  
Email: [israk.ahmed275@gmail.com](mailto:israk.ahmed275@gmail.com)  
GitHub: [KhanIsrakAhmed](https://github.com/KhanIsrakAhmed)  
Portfolio: [israk-portfolio.vercel.app](https://israk-portfolio.vercel.app/)
