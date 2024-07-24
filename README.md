# luminescence
The best dating app in the world. 

## Project Overview

### Features

- User authentication (registration and login)
- User profile management
- Compatibility matching based on user data
- Separate interfaces for mobile and web platforms

## Project Structure

luminescence/
│
├── luminescence-backend/
│ ├── src/
│ │ ├── models/
│ │ │ └── User.ts
│ │ ├── routes/
│ │ │ └── auth.ts
│ │ ├── middleware/
│ │ │ ├── authMiddleware.ts
│ │ │ ├── errorHandler.ts
│ │ │ ├── rateLimiter.ts
│ │ │ └── logger.ts
│ │ └── index.ts
│ ├── .env
│ ├── tsconfig.json
│ ├── package.json
│ ├── package-lock.json
│ └── README.md
│
├── luminescencefrontend/
│ ├── src/
│ │ ├── screens/
│ │ │ ├── LoginScreen.tsx
│ │ │ ├── RegisterScreen.tsx
│ │ │ └── ProfileScreen.tsx
│ │ ├── navigation/
│ │ │ └── AppNavigator.tsx
│ │ ├── api/
│ │ │ └── auth.ts
│ │ └── App.tsx
│ ├── tsconfig.json
│ ├── package.json
│ ├── package-lock.json
│ └── README.md
│
├── luminescence-web/
│ ├── src/
│ │ ├── components/
│ │ │ ├── Login.tsx
│ │ │ ├── Register.tsx
│ │ │ └── Profile.tsx
│ │ ├── api/
│ │ │ └── auth.ts
│ │ ├── App.tsx
│ │ └── index.tsx
│ ├── public/
│ │ └── index.html
│ ├── tsconfig.json
│ ├── package.json
│ ├── package-lock.json
│ └── README.md
└── README.md

## UI Diagram

![alt text](<output (1).png>)

### Mobile App (React Native):
- **LoginScreen.tsx**: Screen for user login.
- **RegisterScreen.tsx**: Screen for user registration.
- **ProfileScreen.tsx**: Screen displaying user profile.
- **AppNavigator.tsx**: Handles navigation between screens.

### Web App (React):
- **Login.tsx**: Component for user login.
- **Register.tsx**: Component for user registration.
- **Profile.tsx**: Component displaying user profile.

## Tech Stack

**Backend:**
- Node.js
- Express.js
- MongoDB
- TypeScript
- JWT for authentication
- bcrypt.js for password hashing
- dotenv for environment variables

**Mobile App:**
- React Native
- TypeScript
- Axios for HTTP requests
- React Navigation for navigation

**Web App:**
- React
- TypeScript
- Axios for HTTP requests
- React Router for routing

## Setup Instructions

### Backend

1. **Clone the repository and navigate to the backend directory**


2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Create a `.env` file**

   ```plaintext
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   PORT=5000
   ```

4. **Run the backend server**

   ```bash
   npx ts-node src/index.ts
   ```

### Mobile App (React Native)

1. **Navigate to the frontend directory**

   ```bash
   cd luminescence/luminescencefrontend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the React Native development server**

   ```bash
   npx react-native run-android # for Android
   npx react-native run-ios # for iOS
   ```

### Web App (React)

1. **Navigate to the web directory**

   ```bash
   cd luminescence/luminescence-web
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the React development server**

   ```bash
   npm start
   ```

## Next Steps

### Sprint 1: Finalize Core Features

1. **Backend**
   - Implement user matching algorithm
   - Add additional endpoints for user preferences and interactions

2. **Frontend (React Native)**
   - Integrate user matching functionality
   - Improve UI/UX for profile and matchmaking screens

3. **Web App (React)**
   - Integrate user matching functionality
   - Improve UI/UX for profile and matchmaking screens

### Sprint 2: Testing and Optimization

1. **Backend**
   - Write unit and integration tests
   - Optimize database queries and endpoints

2. **Frontend (React Native)**
   - Conduct user testing
   - Optimize performance and fix bugs

3. **Web App (React)**
   - Conduct user testing
   - Optimize performance and fix bugs

### Sprint 3: Deployment and Scaling

1. **Backend**
   - Deploy the backend server to a cloud service (e.g., AWS, Heroku)
   - Implement monitoring and logging

2. **Frontend (React Native)**
   - Prepare the app for production release (Google Play Store, Apple App Store)
   - Implement crash reporting and analytics

3. **Web App (React)**
   - Deploy the web app to a hosting service (e.g., Vercel, Netlify)
   - Implement monitoring and analytics

## Conclusion

By following these steps, new developers will be able to set up and contribute to the Luminescence project. This README provides a comprehensive overview of the project, its structure, setup instructions, tech stack, UI details, and the next steps for development. If you encounter any issues or have any questions, feel free to open an issue or contact the repository maintainer.
```