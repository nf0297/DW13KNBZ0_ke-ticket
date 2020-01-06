const initState = {
    categories: []
}

const ReducerCategory = (state = initState, action) => {
    console.log(action.type)
    switch (action.type) {
       case "GET_CATEGORY_FULFILLED":
           console.log("Get Category!")
           return {
               ...state,
               categories: action.payload.data
            };
        default: 
            return state;
    }
}

export default ReducerCategory;