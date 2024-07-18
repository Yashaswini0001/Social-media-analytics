import axios from 'axios';

const API_URL = 'http://localhost:8080';

export const fetchUsers = () => axios.get(`${API_URL}/users`);
export const fetchUserById = (userId) => axios.get(`${API_URL}/users/${userId}`);
export const fetchFollowerAnalytics = () => axios.get(`${API_URL}/follower-analytics`);
export const fetchFollowerAnalyticsByUserId = (userId) => axios.get(`${API_URL}/follower-analytics/${userId}`);
export const fetchPostAnalytics = () => axios.get(`${API_URL}/post-analytics`);
export const fetchPostAnalyticsByUserId = (userId) => axios.get(`${API_URL}/post-analytics/${userId}`);
export const fetchAds = () => axios.get(`${API_URL}/ads`);
export const fetchAdsByUserId = (userId) => axios.get(`${API_URL}/ads/${userId}`);
export const fetchPromotions = () => axios.get(`${API_URL}/promotion`);
export const fetchPromotionsByUserId = (userId) => axios.get(`${API_URL}/promotion/${userId}`);
