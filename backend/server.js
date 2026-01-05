import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

dotenv.config();
connectDB();

const app = express();

/* -------- CORS -------- */
app.use(
  cors({
    origin: [
      'http://localhost:3000',
      'https://primeshop-three.vercel.app',
    ],
    credentials: true,
  })
);

/* -------- Middleware -------- */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

/* -------- API Routes -------- */
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/upload', uploadRoutes);

app.get('/api/config/paypal', (req, res) =>
  res.json({ clientId: process.env.PAYPAL_CLIENT_ID })
);

/* -------- Health Check -------- */
app.get('/', (req, res) => {
  res.send('API is running...');
});

/* -------- Error Handling -------- */
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 API running on port ${PORT}`)
);
