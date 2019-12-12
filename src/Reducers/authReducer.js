const initialState = {
    currentUser: {
        
        orders: [],
        error: "",
        
    }
}

export default (state = initialState , action) => {
    switch(action.type) {
        case 'LOGIN_USER':
        return {...state, currentUser: action.payload}
        case 'ERROR_HANDLING':
        return {...state, error: action.payload}
        case 'LOG_OUT':
        return initialState
    default:
        return state
    };
}