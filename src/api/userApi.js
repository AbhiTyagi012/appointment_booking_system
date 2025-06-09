import axios from "../../constant";

export const slots = async (data) => {
    const response = await axios.get("/slots", data);
    return response.data;
};

export const booking = async (data) => {
  const response = await axios.post("/book", data);
  return response.data;
};

export const all_bookings = async (data) => {
  const response = await axios.get("/admin/bookings", data);
  return response.data;
};