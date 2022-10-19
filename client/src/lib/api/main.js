import axios from "axios";

const API = axios.create({
  // baseURL: "http://localhost:8080",
  baseURL: "https://pre-onboarding-selection-task.shop/",
  headers: {
    "Content-Type": "application/json",
  },
})

export const APIWithAuth = axios.create({
  baseURL: "https://pre-onboarding-selection-task.shop/",
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${localStorage.getItem('user')} ?? undefined`,
  },
})

export default API
