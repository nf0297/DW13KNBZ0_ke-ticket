const initState = {
    user: []
}

const ReducerUser = (state = initState, action) => {
    console.log(action.type)
    switch (action.type) {
       case "GET_PROFILE_BY_ID_FULFILLED":
           console.log("Get Profile by ID!")
           return {
               ...state,
               user: action.payload.data
            };
        default: 
            return state;
    }
}



export default ReducerUser;