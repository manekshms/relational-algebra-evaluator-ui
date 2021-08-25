import axios from "axios";

const evaluatorApi = axios.create({
  baseURL: process.env.REACT_APP_EVALUATOR_API,
});

evaluatorApi.interceptors.request.use((config) => {
  if (localStorage.getItem("sessionId")) {
    config.headers.sessionId = localStorage.getItem("sessionId");
  }
  return config;
});

export default evaluatorApi;
