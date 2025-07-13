import axios from 'axios';
import config from '../../config';

const API_URL = config.API_URL + 'auth/';

// Register user
const register = async (userData) => {
  const response = await axios.post(API_URL + 'register', userData);

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }

  return response.data;
};

// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + 'login', userData);

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }

  return response.data;
};

// Logout user
const logout = () => {
  localStorage.removeItem('user');
};

// Update membership
const updateMembership = async (membershipData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.put(API_URL + 'membership', membershipData, config);

  return response.data;
};

// Update user
const updateUser = async (userData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.put(API_URL + 'update', userData, config);

  return response.data;
};

const authService = {
  register,
  logout,
  login,
  updateMembership,
  updateUser,
};

export default authService;
