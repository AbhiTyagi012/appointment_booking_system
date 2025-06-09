import axios from "axios";

let domain = ["http://localhost:5050"];

let instance = axios.create({
  baseURL: domain[0] + "/api",
});

const baseURL = () => domain;

export default instance;
export { baseURL };
