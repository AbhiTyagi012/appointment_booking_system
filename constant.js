import axios from "axios";

let domain = ["https://appointment-booking-system-ofsx.onrender.com"];

let instance = axios.create({
  baseURL: domain[0] + "/api",
});

const baseURL = () => domain;

export default instance;
export { baseURL };
