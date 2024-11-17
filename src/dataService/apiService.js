// apiService.js
import axios from 'axios';

// Base configuration for Axios
const API_BASE_URL = 'https://api.example.com'; // Update with your API base URL
const defaultHeaders = {
  'Content-Type': 'application/json',
};

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: defaultHeaders,
  timeout: 10000, // Optional: Timeout in milliseconds
});

// Request interceptor (e.g., adding authorization token)
// api.interceptors.request.use(
//   (config) => {
//     // Add common headers like Authorization token if needed
//     const token = localStorage.getItem('authToken');
//     if (token) {
//       config.headers['Authorization'] = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// Response interceptor (handling errors globally)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle error responses
    if (error.response) {
      const status = error.response.status;
      if (status === 401) {
        console.error('Unauthorized: Please log in.');
      } else if (status === 403) {
        console.error('Forbidden: You do not have permission.');
      } else if (status === 404) {
        console.error('Not Found: The resource does not exist.');
      } else {
        console.error(`Error: ${error.response.data.message || 'An error occurred'}`);
      }
    } else {
      console.error('Network Error:', error.message);
    }
    return Promise.reject(error);
  }
);

const apiService = {
  // GET request
  get(endpoint, params = {}, headers = {}) {
    return api.get(endpoint, {
      params,
      headers: {
        ...defaultHeaders,
        ...headers,
      },
    });
  },

  // POST request
  post(endpoint, data = {}, headers = {}) {
    return api.post(endpoint, data, {
      headers: {
        ...defaultHeaders,
        ...headers,
      },
    });
  },

  // DELETE request
  delete(endpoint, headers = {}) {
    return api.delete(endpoint, {
      headers: {
        ...defaultHeaders,
        ...headers,
      },
    });
  },
};

export default apiService;
