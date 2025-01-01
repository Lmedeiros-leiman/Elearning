import { Axios } from "axios"

const BASE_URL = "/"

export const axios = new Axios({
    baseURL: BASE_URL,
})

const axiosPrivate = new Axios({
    baseURL: BASE_URL,
    headers: { "Content-Type": "application/json" },
    withCredentials: true
})


axiosPrivate.interceptors.request.use(
    config => {
        console.log("Calling interceptor for request.")
        return config
        //if (!config.headers['Authorization']) {
        //    config.headers['Authorization'] = `Bearer ${localStorage.getItem("accessToken")}`
        //}
        //return config
    }, (error) => Promise.reject(error)
);


export default axiosPrivate