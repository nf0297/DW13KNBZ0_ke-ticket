import axios from 'axios';

const Host = "https://ke-ticket-app.herokuapp.com/api/v1"

export const getAllEvent = () => {
    return {
        type: "GET_ALL_EVENT",
        payload: axios.get(`${Host}/events`)
    };
}

export const getEventByCategory = (id) => {
    console.log(id)
    return {
        type: "GET_EVENT_BY_CATEGORY",
        payload: axios.get(`${Host}/category/`+ id +`/events`)
    }
}
export const getEventByID = (id) => {
    console.log(id)
    return {
        type: "GET_EVENT_BY_ID",
        payload: axios.get(`${Host}/event/`+ id)
    };
}