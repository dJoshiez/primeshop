export const BASE_URL =
    process.env.NODE_ENV === 'production'
        ? 'https://primeshop-e69f.onrender.com/'
        : 'http://localhost:5000';

// API endpoints
export const PRODUCTS_URL = `${BASE_URL}/api/products`;
export const USERS_URL = `${BASE_URL}/api/users`;
export const ORDERS_URL = `${BASE_URL}/api/orders`;
export const PAYPAL_URL = `${BASE_URL}/api/config/paypal`;
