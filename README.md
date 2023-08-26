# Simple Social Media Platform

<img width="960" alt="image" src="https://github.com/itsAkash12/extraspace-assignment/assets/107500115/bd714bbb-7ac4-4687-b2e7-d4d6114a65bb">

Welcome to the Simple Social Media Platform! This project consists of a backend API and a frontend UI for creating and managing user profiles, posts, and analytics.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Backend API](#backend-api)
  - [User Endpoints](#user-endpoints)
  - [Post Endpoints](#post-endpoints)
- [Frontend UI](#frontend-ui)
  - [Components](#components)
- [Getting Started](#getting-started)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Contributing](#contributing)
- [License](#license)


## Technologies Used
- Backend: [Node.js](https://nodejs.org/), [Express](https://expressjs.com/), [MongoDB](https://www.mongodb.com/)
- Frontend: [React](https://reactjs.org/), [Chakra UI](https://chakra-ui.com/)
- Other: [Axios](https://axios-http.com/), [React Router](https://reactrouter.com/)

## Backend API

The backend API is responsible for handling data manipulation and storage. It supports various endpoints for user profiles, posts, and analytics.

### User Endpoints

- **POST /users:** Create a new user.
- **GET /users/{id}:** Retrieve a user by id.
- **PUT /users/{id}:** Update a user's name or bio by id.
- **DELETE /users/{id}:** Delete a user by id.
- **GET /analytics/users:** Retrieve the total number of users.
- **GET /analytics/users/top-active:** Retrieve the top 5 most active users.

### Post Endpoints

- **POST /posts:** Create a new post.
- **GET /posts/{id}:** Retrieve a post by id.
- **PUT /posts/{id}:** Update a post's content by id.
- **DELETE /posts/{id}:** Delete a post by id.
- **POST /posts/{id}/like:** Increment the like count of a post by id.
- **POST /posts/{id}/unlike:** Decrement the like count of a post by id.
- **GET /analytics/posts:** Retrieve the total number of posts.
- **GET /analytics/posts/top-liked:** Retrieve the top 5 most liked posts.

## Frontend UI

The frontend UI is built using React and ChakraUI, providing a user-friendly interface for managing user profiles, posts, and analytics.

### Components

- **UserForm:** Create and update user profiles.
- **PostForm:** Create and update posts.
- **UserList:** List of users with options to view, edit, and delete.
- **PostList:** List of posts with options to view, edit, delete, like, and unlike.
- **UserAnalytics:** Display user analytics, including total users and top active users.
- **PostAnalytics:** Display post analytics, including total posts and top liked posts.

## Getting Started

1. Clone the repository: `git clone https://github.com/itsAkash12/eightysix-assignment`
2. Navigate to the project directory: `cd eightysix-assignment`

### Backend Setup

1. Install backend dependencies: `cd backend && npm install`
2. Configure environment variables in `.env` (PORT=8080,DB_URL='your mongodb uri')
3. Start the backend server: `nodemon index.js`

### Frontend Setup

1. Install frontend dependencies: `cd frontend && npm install`
2. Configure environment variables in `.env` ('VITE_BASE_URL=http://localhost:8080')
3. Start the frontend development server: `npm run dev`


