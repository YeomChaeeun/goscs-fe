// api/index.ts
import axios from 'axios';

export const API_URL = 'https://goscs-api-server.onrender.com';

const api = axios.create({
    baseURL:  `${API_URL}/api`,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    }
});

export default api;