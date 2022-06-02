import { ApiHelper } from "./serverConnections";

export * from "./requests";

console.log("API_URL : ", process.env.REACT_APP_API_URL);
const api = new ApiHelper({
	baseURL: "",
	timeout: 3000,
});

export default api;
