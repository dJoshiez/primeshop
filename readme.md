# 🛒 ProShop – Full Stack MERN E-Commerce Application

ProShop is a full-stack e-commerce web application built using the **MERN stack**.  
This project demonstrates real-world features such as authentication, product management, payments, database seeding, and a scalable folder structure.

This project is intended for **learning, portfolio, and interview preparation** purposes.

---

## 🚀 Features

- User authentication & authorization (JWT)
- Product listing & product details
- Shopping cart & checkout flow
- Admin dashboard (users, products, orders)
- PayPal sandbox payment integration
- Product images support
- Database seeding for demo data
- RESTful API architecture

---

## 🧰 Tech Stack (Complete)

### Frontend
- React 18
- Redux Toolkit
- React Router DOM
- Axios
- Bootstrap & React Bootstrap
- React Icons

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Tokens)
- Multer (file handling – optional)

### Tooling & Bundlers
- React Scripts (Webpack internally)
- Nodemon (backend auto-restart)
- Concurrently (run frontend & backend together)
- dotenv (environment variables)

---

## 🌐 Ports Used

| Service   | Port |
|----------|------|
| Frontend | 3000 |
| Backend  | 5000 |
| MongoDB  | 27017 |

---


---

## 🖼️ Product Images – How They Work

- Images are stored in:
- MongoDB stores only the image path:
- React automatically serves files from `public/`
- No backend upload folder is required unless you implement admin uploads

---

## 🌱 Database & Seeder

The project includes a **seeder script** to quickly populate MongoDB with demo data.

### Import Data
npm run data:import

### Destroy Data
npm run data:destroy


Seeder files are located in: backend/data/


This is used for:
- Demo products
- Demo users
- Faster development/testing

---

## 💳 Payments (PayPal Sandbox)

This project uses **PayPal Sandbox**, not real payments.

Important points:
- No real money involved
- Uses fake sandbox accounts
- Safe for learning and testing
- Can be disabled if not needed

PayPal is integrated via:
- PayPal JavaScript SDK
- Backend PayPal API calls

---

## 🔐 Environment Variables

Create a `.env` file inside the **backend** folder:

PORT=5000

MONGO_URI=mongodb://127.0.0.1:27017/proshop

JWT_SECRET=your_secret_key

PAYPAL_CLIENT_ID=your_paypal_sandbox_client_id


---

Install Dependencies (frontend & backend)
npm install
cd frontend
npm install
Run

# Run frontend (:3000) & backend (:5000)
npm start

# Run backend only
npm run server