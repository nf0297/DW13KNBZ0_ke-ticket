import axios from 'axios';

const Host = "http://localhost:5000/api/v1"

export const getAllCategory = () => {
    return {
        type: "GET_CATEGORY",
        payload: axios.get(`${Host}/categories`)
    };
}