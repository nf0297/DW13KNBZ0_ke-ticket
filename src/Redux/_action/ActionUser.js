import axios from 'axios';

const Host = "https://ke-ticket-app.herokuapp.com/api/v1"

export const getProfilebyID = (id) => {
    console.log(id)
    return {
        type: "GET_PROFILE_BY_ID",
        payload: axios.get(`${Host}/profile/`+ id)
    };
}