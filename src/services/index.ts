// api/index.ts
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://hackathon-xi-plum.vercel.app/api',  // 또는 실제 API 서버 URL
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    }
});

export default api;