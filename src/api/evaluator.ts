import axios from "axios";

const evaluatorApi = axios.create({
  baseURL: process.env.REACT_EVALUATOR_API,
});

export default evaluatorApi;
