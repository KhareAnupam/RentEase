# RentEase 

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
* **Frontend:** EJS (Embedded JavaScript) for templating, CSS, Bootstrap (likely)
* **Database:** MongoDB (likely, using Mongoose)
* **File Storage:** Cloudinary (inferred from `cloudConfig.js`)
* **File Uploads:** Multer (likely)
* **Authentication:** Passport.js (likely)
* **Validation:** Joi (likely, from `schema.js`)

## Project Structure

The repository is organized in a standard Model-View-Controller (MVC) pattern:
/ ├── app.js # Main application entry point ├── package.json # Project dependencies ├── .gitignore # Files to be ignored by Git ├── cloudConfig.js # Configuration for cloud services (e.g., Cloudinary) ├── middleware.js # Custom Express middleware ├── schema.js # Data validation schemas (e.g., Joi) │ ├── controllers/ # Logic for handling requests ├── init/ # Database initialization scripts ├── models/ # Database schemas (e.g., Mongoose models) ├── public/ # Static assets (CSS, JavaScript) ├── routes/ # Express route definitions ├── uploads/ # Local directory for file uploads (if used) ├── utils/ # Utility functions └── views/ # EJS templates (.ejs files)

