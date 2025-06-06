# LinkLitez URL Shortener WebApp

![Alt text](https://github.com/suyash-rgb/URL-Shortener-WebApp/blob/5a471130241e4ee23ca35f78318078024399db9d/images/background.png)

## Project Overview
LinkLitez is a powerful, feature-rich URL shortening platform designed for efficiency, customization, and scalability. It enables users to create, manage, and track shortened links while ensuring secure and seamless redirection.
![Alt text](relative/path/to/image.png)

## Features
- **Effortless Short URL Generation:** Create distinct, user-friendly shortened links in just a few clicks.
- **Detailed Analytics & Click Tracking:** Monitor how many times shortened URLs are accessed with interactive data visualizations.
- **Enhanced Security:** Leverage advanced security measures to keep your redirection data safe.
- **Fast and Reliable Redirection:** Enjoy high performance and minimal downtime for a seamless user experience.
- **User Authentication:** Secure login and registration via JSON Web Tokens (JWT) that ensure secure access.

## Technologies Used
- **Frontend:**  
  - **React** – UI development  
  - **Vite** – Fast build tool and development server  
  - **Tailwind CSS** – Utility-first CSS framework for styling  
  - **Axios, React Query** – For API calls and data management  
  - **React Router DOM** – Client-side routing  
  - **Additionally:** Chart.js (via react-chartjs-2) for data visualization and other utility libraries.

- **Backend:**  
  - **Java & Spring Boot** – Robust backend framework for building REST APIs  
  - **JWT** – JSON Web Tokens for authentication and authorization.  
  - **MySQL/PostgreSQL** – Relational database for storing links and analytics  

### Frontend Dependencies
- `@emotion/react@11.14.0`
- `@emotion/styled@11.14.0`
- `@eslint/js@9.17.0`
- `@mui/material@6.3.0`
- `@types/react-dom@18.3.5`
- `@types/react@18.3.18`
- `@vitejs/plugin-react@4.3.4`
- `autoprefixer@10.4.20`
- `axios@1.7.9`
- `chart.js@4.4.7`
- `dayjs@1.11.13`
- `eslint-plugin-react-hooks@5.1.0`
- `eslint-plugin-react-refresh@0.4.16`
- `eslint-plugin-react@7.37.3`
- `eslint@9.17.0`
- `globals@15.14.0`
- `motion@11.15.0`
- `postcss@8.4.49`
- `react-chartjs-2@5.2.0`
- `react-copy-to-clipboard@5.1.0`
- `react-datepicker@8.4.0`
- `react-dom@18.3.1`
- `react-hook-form@7.54.2`
- `react-hot-toast@2.4.1`
- `react-icons@5.5.0`
- `react-loader-spinner@6.1.6`
- `react-query@3.39.3`
- `react-router-dom@7.1.1`
- `react@18.3.1`
- `tailwindcss@3.4.17`
- `vite@6.0.6`

### Backend Dependencies
- **Java 11 (or higher)**
- **Spring Boot** (including Spring Boot Starter Web, Starter Security, etc.)
- **JWT Libraries** – For token generation and validation
- **PostgreSQL JDBC Driver** (for production & deployment)
- Additional libraries depending on project requirements (e.g., for logging and database connectivity)

## Getting Started

### Prerequisites
- **Backend:**  
  - Java JDK 11 or newer  
  - Maven or Gradle  
  - MySQL/PostgreSQL database

- **Frontend:**  
  - Node.js (v14 or above) and npm or yarn

### Setup Instructions

#### Backend
1. **Clone the Repository:**
   ```bash
   git clone https://github.com/yourusername/linklitez.git
   cd linklitez/backend
