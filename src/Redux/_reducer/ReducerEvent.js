const initState = {
    event: [],
    eventbyid: [],
    eventbycategory: []
}

const ReducerEvent = (state = initState, action) => {
    console.log(action.type)
    switch (action.type) {
       case "GET_ALL_EVENT_FULFILLED":
           console.log("Get Event!")
           return {
               ...state,
               event: action.payload.data
            };
        case "GET_EVENT_BY_ID_FULFILLED":
            console.log("Get Event by ID!")
            return {
                ...state,
                eventbyid: action.payload.data
            };
        case "GET_EVENT_BY_CATEGORY_FULFILLED":
            console.log("Get Event by Category!")
            return {
                ...state,
                eventbycategory: action.payload.data
            };
        default: 
            return state;
    }
}



export default ReducerEvent;