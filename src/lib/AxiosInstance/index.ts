import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://pet-care-backend-api.vercel.app/api/v1",
});

// axiosInstance.interceptors.request.use(
//   function (config) {
//     const cookieStore = cookies();

//     const accessToken = cookieStore.get("accessToken")?.value;

//     if (accessToken) {
//       config.headers.Authorization = `Bearer ${accessToken}`;
//     }

//     return config;
//   },
//   function (error) {
//     return Promise.reject(error);
//   }
// );

// axiosInstance.interceptors.response.use(
//   function (response) {
//     return response;
//   },
//   function (error) {
//     return Promise.reject(error);
//   }
// );

export default axiosInstance;
