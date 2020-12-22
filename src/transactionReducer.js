const Transaction_Reducer = ((state, action) => {
    switch (action.type) {

        case "ADD_TO_Transaction": {
           return [action.payload, ...  state]
        }
        default:
            return state;
    }

})
export default Transaction_Reducer;