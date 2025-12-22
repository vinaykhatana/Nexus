import axios from 'axios';

// Helper to ensure base URL ends with /api
const getBaseUrl = () => {
    let url = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
    // Remove trailing slash if present to avoid double slashes
    if (url.endsWith('/')) {
        url = url.slice(0, -1);
    }
    // Append /api if not present
    if (!url.endsWith('/api')) {
        url += '/api';
    }
    return url;
};

const api = axios.create({
    baseURL: getBaseUrl(),
    headers: {
        'Content-Type': 'application/json',
    },
});

// Debug log to check what API URL is being used
console.log('Final API Base URL:', getBaseUrl());


// Interceptor to add token to every request
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export default api;
