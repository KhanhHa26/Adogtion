import axios from "axios";

const customFetch = axios.create({
  baseURL: "http://localhost:5050/api",
  withCredentials: true,
});

export default customFetch;
