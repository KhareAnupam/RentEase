# RentEase 
 [![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-brightgreen)](https://rentease-05gw.onrender.com)  
 **Live Demo:** [https://your-deployment-link.com](https://your-deployment-link.com)

RentEase is a full-stack web application designed to be a marketplace for property rentals. It allows users to browse, list, and rent properties, creating a platform similar to a simplified Airbnb.

## Features

* **User Authentication:** Secure sign-up and login functionality for users.
* **Property Listings:** Users can create, read, update, and delete (CRUD) property listings.
* **Image Uploads:** Ability to upload property images, which are handled and stored using cloud services.
* **Interactive UI:** A server-side rendered frontend built with EJS for a dynamic user experience.
* **Data Validation:** Server-side validation of forms and data submissions.

## Tech Stack

This project is built with the following technologies:

* **Backend:** Node.js, Express.js
* **Frontend:** EJS (Embedded JavaScript) for templating, CSS, Bootstrap
* **Database:** MongoDB (using Mongoose)
* **File Storage:** Cloudinary (inferred from `cloudConfig.js`)
* **File Uploads:** Multer 
* **Authentication:** Passport.js 
* **Validation:** Joi (from `schema.js`)

## Project Structure

The repository is organized in a standard Model-View-Controller (MVC) pattern:
/
├── app.js              # Main application entry point
├── package.json        # Project dependencies
├── .gitignore          # Files to be ignored by Git
├── cloudConfig.js      # Configuration for cloud services (e.g., Cloudinary)
├── middleware.js       # Custom Express middleware
├── schema.js           # Data validation schemas (e.g., Joi)
│
├── controllers/        # Logic for handling requests
├── init/               # Database initialization scripts
├── models/             # Database schemas (e.g., Mongoose models)
├── public/             # Static assets (CSS, JavaScript)
├── routes/             # Express route definitions
├── uploads/            # Local directory for file uploads (if used)
├── utils/              # Utility functions
└── views/              # EJS templates (.ejs files)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You must have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your machine. You will also need access to a database (e.g., a local MongoDB instance or a free MongoDB Atlas cluster).

### Installation

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/KhareAnupam/RentEase.git](https://github.com/KhareAnupam/RentEase.git)
    cd RentEase
    ```

2.  **Install dependencies:**
    ```sh
    npm install
    ```

### Environment Variables
Create a `.env` file in the root of the project and add the necessary environment variables. Based on the project structure, you will likely need:
Example .env file
MongoDB connection string
DB_URL=mongodb://127.0.0.1:27017/rentease

Cloudinary credentials (from cloudConfig.js)
CLOUDINARY_CLOUD_NAME=<your_cloud_name> CLOUDINARY_API_KEY=<your_api_key> CLOUDINARY_API_SECRET=<your_api_secret>

A secret for session cookies
SESSION_SECRET=<your_session_secret>


### Running the Application

1.  **Initialize the database (if needed):**
    The `init/` folder might contain a script to seed the database with initial data.
    ```sh
    node init/index.js
    ```

2.  **Start the server:**
    ```sh
    node app.js
    ```
    Or, if `nodemon` is listed as a dev dependency in `package.json`:
    ```sh
    nodemon app.js
    ```

3.  **Open the application:**
    Open your browser and navigate to `http://localhost:3000` (or the port specified in your `app.js`).
