import axios from "axios";


// axios.defaults.baseURL = "http://www.example.com";
export const api = axios.create({
    baseURL:  "http://www.example.com",
    headers: {
        "Content-Type": "application/json",
    },
})
