import axios from "axios";
import { useEffect, useState } from "react";

export const clientBase = 'http://localhost:5173/'
//export const clientBase = 'firebase link will be added here'

export const axiosBase = axios.create({
    //baseURL: 'http://localhost:5000',
    baseURL: 'https://sprintz-clothing-server.vercel.app/',
})

const useAxios = (url) => {
    const [fetch, setFetch] = useState([])

    useEffect(() => {
        axiosBase.get(url)
            .then(res => {
                setFetch(res.data)
            })
    }, [url])

    return fetch;
};

export default useAxios;