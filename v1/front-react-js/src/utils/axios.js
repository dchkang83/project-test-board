import Axios from "axios";

const axiosInstance = Axios.create({
    baseURL: "http://127.0.0.1:7000/",
    timeout: 3000,
});

export default axiosInstance;