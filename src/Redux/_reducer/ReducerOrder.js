const initState = {
    orderbystatus: [],
    ticket:[]
}

const ReducerOrder = (state = initState, action) => {
    console.log(action.type)
    switch (action.type) {
        case "GET_ORDER_BY_STATUS_FULFILLED":
           console.log("Get Payment!")
           return {
               ...state,
               orderbystatus: action.payload.data
            };
        case "GET_TICKET_APPROVED_FULFILLED":
           console.log("Get Payment!")
           return {
               ...state,
               ticket: action.payload.data
            };
        default: 
            return state;
    }
}



export default ReducerOrder;