# Quizzy Frontend

Welcome to Quizzy Frontend! This React-based frontend application complements the Quizzy backend, providing a feature-rich interface for seamless user authentication, profile management, engaging quizzes, and more. Before using the frontend, ensure that the [Quizzy backend](https://github.com/Shubhankar-12/quizzy-backend) is running to access all features.

## Screenshots

### Main Page

![Main Page](https://github.com/Shubhankar-12/quizzy-frontend/blob/main/public/screenshots/main-screen.png)

_The main page provides an overview of the Quizzy application, showcasing various features available to users._

### Login Page

![Login Page](https://github.com/Shubhankar-12/quizzy-frontend/blob/main/public/screenshots/login-screen.png)

_The login page allows users to securely log in using their credentials, ensuring a protected and personalized experience._

### Quiz Page

![Quiz Page](https://github.com/Shubhankar-12/quizzy-frontend/blob/main/public/screenshots/quiz-screen.png)

_The quiz page presents an engaging interface for users to participate in quizzes. Dynamic language routing enhances the diversity of questions._

### Profile Page

![Profile Page](https://github.com/Shubhankar-12/quizzy-frontend/blob/main/public/screenshots/profile-screen.png)

_On the profile page, users can manage and update their details, including resetting their stats for a fresh start._

## Features

### Authentication and Authorization

- **Login Page (`/login`):** Users can securely log in using their credentials.
- **Signup Page (`/signup`):** New users can register for an account.

- **Private Routes:**
  - `/dashboard`: Access the user's personalized dashboard.
  - `/profile`: View and update user details.
  - `/quiz/:language`: Engage in quizzes with dynamic language routing.

### Profile Management

- **Update User Details (`/profile`):** Users can update their profile information, such as name, email, and password.

- **Reset Stats (`/profile`):** Reset user statistics to start afresh.

### Quiz Features

- **Quiz Page (`/quiz/:language`):** Participate in quizzes with dynamic language-based questions.

### State Management

- **Redux Toolkit:** Utilizes Redux Toolkit for efficient state management.

- **State Persistence:** Authenticated state is persisted to ensure a seamless user experience across sessions.

### Toast Notifications

- **React Toastify:** Provides visually appealing toast notifications for user feedback.

## Usage

Before starting the frontend, make sure to run the [Quizzy backend](https://github.com/Shubhankar-12/quizzy-backend) to access all features.

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Start the Quizzy backend by following its README instructions.
4. Run the following command to start the frontend:

```bash
npm start
```

The frontend will be accessible at `http://localhost:3000/`.

## Routes

### Public Routes

- `/login`: Login page.
- `/signup`: Signup page.

### Private Routes

- `/dashboard`: User dashboard.
- `/profile`: User profile.
- `/quiz/:language`: Quiz page with dynamic language routing.

## Upcoming Features

### Create New Question

- **Create Question Page (`/create-question`):** Users can create new quiz questions.

### Leaderboard

- **Leaderboard Page (`/leaderboard`):** View the top performers in the quizzes.

### Google OAuth

- **Google OAuth Integration:** Enhance user authentication options by integrating Google OAuth.

## Dependencies

- React
- React Router DOM
- Redux Toolkit
- React Toastify

### Thank you for choosing Quizzy! If you have any questions or suggestions, feel free to reach out. Happy quizzing!
