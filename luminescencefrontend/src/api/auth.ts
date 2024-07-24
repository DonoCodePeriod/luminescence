import axios from 'axios';

export const login = async (email: string, password: string) => {
  return axios.post('/api/login', { email, password });
};

export const register = async (name: string, email: string, password: string) => {
  return axios.post('/api/register', { name, email, password });
};

export const getProfile = async () => {
  return axios.get('/api/profile');
};
