REST API using Node.js and Express

Overview

This project is a Basic REST API built using Node.js and Express.js. It demonstrates CRUD (Create, Read, Update, Delete) operations for managing user data.

The API handles user information including:

* Name
* Email
* Age

All endpoints were tested using Postman.

Technologies Used

* Node.js
* Express.js
* JavaScript
* Postman

Features

Create User

Adds a new user to the system.

Endpoint:
POST /users

Get All Users

Retrieves all users.

Endpoint:
GET /users

Get User by ID

Retrieves a specific user using their ID.

Endpoint:
GET /users/:id

Update User

Updates an existing user’s information.

Endpoint:
PUT /users/:id

Delete User

Deletes a user from the system.

Endpoint:
DELETE /users/:id

Sample User Object

{
  "id": 1,
  "name": "Siri",
  "email": "siri@gmail.com",
  "age": 22
}

API Testing

All API endpoints were tested successfully using Postman.

Project Structure

REST_API

├── server.js

├── package.json

├── package-lock.json

└── .gitignore

Author

Marapally Siri Chandana
