 mil13
# Ecommerce-Follow-Along
In miestone 9:
we created a file called productform.js in which we created a for sellers
In milestone 10:
we created a backend part for  productform.js
In milestone11:
=======
# Ecommerce-Follow-

Login page is done with react and tailwind csss
Milestone 2

The frontend directory will house your React application while the backend directory contains the Node.js server and APIs. This helps in better management and avoids confusion.

To start a React application, you usually depend on create-react-app or other scaffolding tools.

Open your terminal and go to the frontend directory.
Run this:
lua
Copy
npx create-react-app .
That will create all of the boilerplate to complete your React application.
After this setup, you can begin to develop your e-commerce UI components such as product listings, shopping cart, and so on.

Node.js Backend Setup
Initialize your Node.js server with Express or any other preferred framework you want in the backend folder.

5. Login Page Development
The login page will be one of the first user interfaces to be developed in an e-commerce application, so spend efforts putting in a clean and responsive design using Tailwind CSS and React.
Components that may need to be built:
Username and Password fields
Login button
Error messages/validation (for example: wrong username/password)
Ecommerce-Follow-Along
Project Description
A full-fledged e-commerce application built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). This project focuses on scalable backend services, secure user authentication, and modern frontend development.

🚀 Milestone 1: Project Overview
Introduction to the MERN stack and its benefits.
Overview of MongoDB for data modeling.
Importance of authentication for user security.
Live demonstration of the complete e-commerce application.
Explanation of backend-to-frontend communication.
Setting up the development environment.
Creating a basic Node.js server using Express.
Understanding REST API functionality.
Introduction to project folder structure.
Overview of upcoming milestones.
🚀 Milestone 2: Project Setup and Login Page
Organized frontend and backend directories.
Initialized a React application for UI development.
Set up a simple Node.js server.
Integrated Tailwind CSS for modern styling.
Designed and developed a responsive login page.
Implemented basic form handling in React.
Established GitHub repository with structured updates.
Defined MongoDB schema for authentication.
Explained project goals and expected features.
Live demonstration of UI and backend integration.
🚀 Milestone 3: Backend Setup
Defined backend folder structure for scalability.
Configured a Node.js server using Express.
Established a database connection with MongoDB.
Added error-handling middleware for debugging.
Implemented a basic API endpoint to test responses.
Used environment variables for sensitive data.
Installed necessary dependencies for backend development.
Validated database connectivity with error messages.
Introduced API testing tools like Postman.
Organized backend components into separate modules.
🚀 Milestone 4: Creating User Model and Controller
Designed a user schema with essential fields.
Created a User Controller to manage user operations.
Added authentication-related fields in the database.
Implemented a method to create and fetch users.
Integrated Multer for profile picture uploads.
Defined API routes for user-related actions.
Established a folder structure for backend models.
Validated user input before database insertion.
Stored uploaded files in a designated directory.
Enhanced backend organization for maintainability.
🚀 Milestone 5: Building the Sign-Up Page
Designed a clean and responsive sign-up page.
Included fields for user registration.
Implemented email and password validation.
Added error messages for invalid inputs.
Ensured mobile responsiveness.
Used Tailwind CSS for styling.
Enhanced UI consistency across components.
Connected frontend form with backend API.
Handled form submission and input validation.
Debugged validation logic for various edge cases.
🚀 Milestone 6: Backend Endpoint for Secure Signup
Created a secure signup API endpoint.
Encrypted user passwords using hashing techniques.
Stored only hashed passwords in the database.
Implemented input validation for secure registration.
Ensured data integrity during user signup.
Used middleware for error handling.
Optimized database queries for efficiency.
Prevented duplicate user entries in the database.
Protected sensitive user data with authentication.
Followed industry standards for password security.
🚀 Milestone 7: Backend Endpoint for User Login
Created an API for user login authentication.
Validated user credentials during login.
Retrieved user data securely from the database.
Used hashing techniques to verify passwords.
Returned appropriate responses for authentication failures.
Implemented error handling for login failures.
Protected endpoints against unauthorized access.
Enhanced security by avoiding plain-text passwords.
Provided feedback messages for incorrect credentials.
Ensured compliance with security best practices.
🚀 Milestone 8: Creating a Card Component & Homepage
Designed a reusable card component for products.

Displayed products dynamically using mapping.

Styled the homepage with a modern UI.

Ensured consistency across product displays.

Integrated product information into the frontend.

Optimized layout for better user experience.

Maintained a structured and scalable design.

Enhanced responsiveness for multiple devices.

Prepared for future product filtering and sorting.

Established a foundation for an interactive storefront.

Milestone-9
Created a React form component to take user input for product details.

Added input fields for product name, description, price, category, and stock quantity.

Implemented file input to support multiple image uploads.

Managed form state using React hooks.

Connected the form with the backend API to store data in the database.

Ensured form validation to prevent invalid submissions.

Pushed the code to GitHub and updated the README file.

Milestone-10
Developed an Express router to handle product-related API requests.

Configured Multer to manage product image uploads and store file paths.

Created a Mongoose schema to define product structure and enforce validations.

Implemented email validation to ensure only valid sellers can add products.

Integrated image uploads by storing file paths instead of actual images.

Connected the product API with the database to store product details.

Added error handling to prevent invalid product submissions.

Mounted the /product route in index.js after authentication setup.

Milestone-11 & 12
Connected the product form frontend to MongoDB.
Updated products.js to use the GET router for fetching data from MongoDB.
Passed retrieved data to home.jsx to display existing products.
Planned to implement Nodemailer in Milestone 12 but skipped it based on mentor's advice.
Modified the POST router to make the form functional, enabling new product uploads to the database.
main

Milestone 13 and 14





Milestone 15:
created Navbar in frontend
