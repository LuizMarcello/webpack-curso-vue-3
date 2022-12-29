import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000',
  headers: {
    "Content-type": 'application/json'
  }
})

/* Export default: Para usar no componente */
export default axiosInstance;