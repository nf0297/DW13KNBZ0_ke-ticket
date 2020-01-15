import axios from 'axios';

const Host = "https://ke-ticket-app.herokuapp.com/api/v1"

export const getAllCategory = () => {
    return {
        type: "GET_CATEGORY",
        payload: axios.get(`${Host}/categories`)
    };
}