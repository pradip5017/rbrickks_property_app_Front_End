# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


📖 Project Description

**RBrickks Property Listing App** is a full-stack web application that allows users to browse, post, and manage rental properties. It is designed using modern technologies like **ReactJS** for the frontend and **Spring Boot** for the backend, with **MySQL** as the database and **JWT (JSON Web Tokens)** for secure user authentication.

The application supports user registration and login, viewing property listings, filtering by city/type/rent, and adding or deleting properties for authenticated users. The frontend communicates with the backend using RESTful APIs built with Spring Boot, and handles authentication tokens for protected routes.

---

## 🛠 Tech Stack

| Layer        | Technologies                            |
|--------------|------------------------------------------|
| Frontend     | ReactJS, Axios, Tailwind CSS, Vite       |
| Backend      | Spring Boot, Spring Security, JWT        |
| Database     | MySQL                                    |
| Tools        | Postman, VSCode, IntelliJ, GitHub        |

---

## 🚀 Features

- 🔐 User login and registration (JWT-based)
- 🏘️ Property listing with filters (city, type, rent)
- ✍️ Post new property (protected)
- 🗑️ Delete property (only by owner)
- 📱 Responsive frontend UI
- 🔄 Real-time data fetching from backend
- 🌐 RESTful API structure
