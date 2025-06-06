# LinkLitez URL Shortener WebApp

![Alt text](https://github.com/suyash-rgb/URL-Shortener-WebApp/blob/5a471130241e4ee23ca35f78318078024399db9d/images/background.png)

## Project Overview
LinkLitez is a powerful, feature-rich URL shortening platform designed for efficiency, customization, and scalability. It enables users to create, manage, and track shortened links while ensuring secure and seamless redirection. <br> <br>
![Alt text](https://github.com/suyash-rgb/URL-Shortener-WebApp/blob/74a8a462b17afe97f053b879cedc9859a94e1b53/images/ezgif-3fa0ab635f78b4.gif)

## Features
- **Effortless Short URL Generation:** Create distinct, user-friendly shortened links in just a few clicks.
- **Detailed Analytics & Click Tracking:** Monitor how many times shortened URLs are accessed with interactive data visualizations.
- **Enhanced Security:** Leverage advanced security measures to keep your redirection data safe.
- **Fast and Reliable Redirection:** Enjoy high performance and minimal downtime for a seamless user experience.
- **User Authentication:** Secure login and registration via JSON Web Tokens (JWT) that ensure secure access.

## 🔗 How Does a URL Shortener Work?

A URL shortener is a tool that converts long URLs into shorter, more manageable links while ensuring they remain functional. Here’s how it works:

### **1️⃣ User Input**
- The user provides a long URL that needs to be shortened.
- The system generates a **unique identifier** for the URL.

### **2️⃣ Storing the URL**
- The shortener stores the original URL along with its **shortened alias** in a database.
- The unique identifier gets linked to the long URL, enabling retrieval when needed.

### **3️⃣ Redirecting Requests**
- When a user clicks the short URL, the system looks up the identifier in the database.
- It fetches the corresponding **original URL** and redirects the user instantly.

### **4️⃣ Tracking and Analytics (Optional)**
- Many URL shorteners track clicks, geographical data, and referrers to provide insights.
- Advanced systems offer custom-branded links and expiration settings for security.

---

## 📌 Why Are URL Shorteners Essential in IT and Other Industries?

URL shorteners are more than just convenience tools—they play a **critical role across various industries** by streamlining operations and enhancing accessibility. Here’s why they are widely used:

### **📊 IT & Software Development**
- **API Documentation & DevOps:** Helps shorten complex API endpoints for easier sharing in documentation.
- **Cloud & SaaS Platforms:** Enables easy access to dynamic resources without exposing direct long URLs.
- **Data Analytics & Logging:** Short URLs improve tracking of user interactions, helping in **analytics-driven decisions**.

### **📈 Marketing & Digital Advertising**
- **Social Media & Branding:** Platforms like Twitter have character limits—short URLs make posts more **concise & visually appealing**.
- **Ad Campaign Tracking:** Businesses use custom short links to monitor campaign performance and **optimize conversion rates**.
- **Email Marketing & SMS Campaigns:** Reducing link length improves readability and **prevents link breaking** in formatted messages.

### **🚀 E-Commerce & Retail**
- **Product Sharing:** Online stores shorten product links for **quick & efficient sharing** on social media and ads.
- **Affiliate Marketing:** Short URLs enhance **user experience**, making referral links more **professional & clickable**.
- **Promotions & Coupons:** Companies use shortened links for **discount campaigns**, boosting engagement.

### **⚖️ Legal & Finance**
- **Document Sharing:** Banks, legal firms, and financial services **simplify secure document access**.
- **Regulatory Compliance:** Some institutions generate **time-limited** short links for sensitive resources.
- **Secure Redirection:** URL masking prevents exposure of internal tracking and client-sensitive URLs.

### **🚑 Healthcare & Education**
- **Patient Resources & Telemedicine:** Short links ease navigation for online medical portals and appointment bookings.
- **E-Learning & Research:** Universities and educators share **learning materials** via compact links to improve accessibility.

URL shorteners have evolved into **powerful tools** that drive efficiency, security, and **better user engagement** across industries.


## Technologies Used
- **Frontend:**  
  - **React** – UI development  
  - **Vite** – Fast build tool and development server  
  - **Tailwind CSS** – Utility-first CSS framework for styling  
  - **Axios, React Query** – For API calls and data management  
  - **React Router DOM** – Client-side routing
  - **React Hook Form** – Efficient form handling with validation
  - **React Hot Toast** – Simple and customizable toast notifications
  - **@mui/material** – Prebuilt UI components for a polished look
  - **@emotion/react & @emotion/styled** – Styled components and flexible CSS-in-JS
  - **Additionally:** Chart.js (via react-chartjs-2) for data visualization and other utility libraries.

- **Backend:**  
  - **Java & Spring Boot** – Robust backend framework for building REST APIs  
  - **JWT** – JSON Web Tokens for authentication and authorization.  
  - **MySQL/PostgreSQL** – Relational database for storing links and analytics

## 🖼️Interface Showcase
Landing Page <br>
![Langing Page1](https://github.com/suyash-rgb/URL-Shortener-WebApp/blob/4e0544589b6c9cb5691e01c0e91f5ed67fd8aa78/images/ss/landingpage1.png) <br><br>
![Langing Page2](https://github.com/suyash-rgb/URL-Shortener-WebApp/blob/4e0544589b6c9cb5691e01c0e91f5ed67fd8aa78/images/ss/landingpage2.png) <br><br>
About Page <br>
![About Page](https://github.com/suyash-rgb/URL-Shortener-WebApp/blob/4e0544589b6c9cb5691e01c0e91f5ed67fd8aa78/images/ss/aboutpage.png) <br><br>
Login Page <br>
![Login Page](https://github.com/suyash-rgb/URL-Shortener-WebApp/blob/454428fdfc73548c33ab316ba7f9c35ee67ba2c9/images/ss/loginpage.png) <br><br>
Register Page <br>
![Register Page](https://github.com/suyash-rgb/URL-Shortener-WebApp/blob/454428fdfc73548c33ab316ba7f9c35ee67ba2c9/images/ss/registerpage.png) <br><br>
Dasboard Layout <br>
![Dasboard Layout1](https://github.com/suyash-rgb/URL-Shortener-WebApp/blob/cdd6d97b4fad2375afb7bce82ba45919c24c5e58/images/ss/dashboard1.png) <br><br>
Manage Links Section in Dashboard Layout <br>
![Dasboard Layout2](https://github.com/suyash-rgb/URL-Shortener-WebApp/blob/cdd6d97b4fad2375afb7bce82ba45919c24c5e58/images/ss/dashboard2.png) <br><br>
URL Specific Analytics <br>
![Alt text](https://github.com/suyash-rgb/URL-Shortener-WebApp/blob/5b07df42b5108f61896f26c8e770f948fd527055/images/ss/managelinks1.png) <br><br>
![Alt text](https://github.com/suyash-rgb/URL-Shortener-WebApp/blob/5b07df42b5108f61896f26c8e770f948fd527055/images/ss/managelinks2.png) <br><br>


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

I was usign React 18, if you're using React 19 you might wanna use React Router instead of React-Router-DOM among other dependency changes.

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
   ```sh
   git clone https://github.com/suyash-rgb/URL-Shortener-WebApp.git
   cd url-shortner-sb

2. **Install Dependencies**
   Run the following command to install required dependencies:
   ```sh
   npm install
   ```
   or, if using yarn:
   ```sh
   yarn install
   ```

3. **Set Up Environment Variables**
   Create a `.env` file in the root directory and configure the required variables:

   ```sh
   DATABASE_URL=your_database_connection_string
   PORT=your_preferred_port
   JWT_SECRET=your_secret_key
   ```

Make sure to replace `your_database_connection_string` with your actual database credentials.

## Usage
Once the application is running, you can access it via your web browser at `http://localhost:your_preferred_port`. 

### Creating a Shortened URL
1. Enter the URL you want to shorten in the input field.
2. Click the "Shorten" button.
3. Copy the generated short URL.

### Viewing Analytics
Navigate to the analytics section to view the click statistics for your shortened URLs.

## Contributing
We welcome contributions! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.


## Contact
For any inquiries, please reach out to [Suyash Baoney](mailto:suyashbaoney58@gmail.com).

