# Adogtion 

<img width="1440" alt="Screenshot 2024-07-15 at 2 29 19 AM" src="https://github.com/user-attachments/assets/e6e5b67a-d09d-426f-94d9-fbd9a69f1a4f">


[Adogtion](https://adogtion.onrender.com/) is a web service designed to connect potential dog adopters with dogs in need of homes. The platform allows users to browse available dogs, post dogs for adoption, and manage the adoption process through an admin panel.

## Features
- **User Registration and Authentication**: Secure user registration and login functionality.
- **Browse Dogs**: Users can browse available dogs based on various filters such as location, age, and breed.
- **Post Dogs for Adoption**: Users can post dogs they want to put up for adoption.
- **Admin Panel**: Admins can approve or reject dog posts, and manage the overall platform.

## Tech Stack: MERN Stack
- MongoDB: Stores data on dogs, users, and adoption statuses.
- Express.js: Handles routing and server-side logic.
- React: Builds dynamic user interfaces for browsing and managing dogs.
- Node.js: Runs the server and manages backend operations.

## Set Up
1. Clone the repository:
   
  `git clone https://github.com/KhanhHa26/Adogtion.git
  cd Adogtion`

2. Install dependencies:

  `npm install --legacy-peer-deps
  cd client
  npm install --legacy-peer-deps
  cd ..`
  
3. Create a .env file in the root directory and add your environment variables:

  `MONGO_URL=your_mongodb_connection_string
  PORT=5050
  NODE_ENV=development
  JWT_SECRET=your_jwt_secret
  JWT_EXPIRESIN=1d`
  
4. Run the development server:

  `npm run setup-production-app`


## Online Access
The application is available online at the following link: [Adogtion](https://adogtion.onrender.com/)

![Logo](https://adogtion.onrender.com/logo.png)

