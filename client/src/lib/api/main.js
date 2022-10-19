import axios from "axios";

const API = axios.create({
	// baseURL: "http://localhost:8080",
	baseURL: "https://pre-onboarding-selection-task.shop/",
	headers: {
		"Content-Type": "application/json",
	},
});

export default API;
