import axios from "axios";

export default axios.create({
  baseURL: import.meta.env.VITE_BACKEND_API_URL,
});


// export const setAuthToken = (token) => {
//   if (token) {
//     axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
//   } else {
//     delete axiosInstance.defaults.headers.common["Authorization"];
//   }
// };