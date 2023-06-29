import axios from "axios";

const BASE_URL = "http://localhost:5000/rep-api/";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
