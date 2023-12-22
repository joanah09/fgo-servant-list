import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'https://api.atlasacademy.io/nice/NA/servant/1'
});

export default axiosInstance;
