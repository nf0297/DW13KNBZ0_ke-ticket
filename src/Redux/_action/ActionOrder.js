import axios from 'axios';

const Host = "https://ke-ticket-app.herokuapp.com/api/v1"

export const getOrderByStatus = (id) => {
    return {
        type: "GET_ORDER_BY_STATUS",
        payload: axios.get(`${Host}/payment/${id}`)
    };
}

export const getTicketApproved = (id) => {
    return {
        type: "GET_TICKET_APPROVED",
        payload: axios.get(`${Host}/ticket/${id}`)
    };
}

