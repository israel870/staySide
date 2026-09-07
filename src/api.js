import axios from "axios";

const apiUrl = axios.create({
    baseURL:'https://backend-22cw.onrender.com/stayside'
});

export default apiUrl