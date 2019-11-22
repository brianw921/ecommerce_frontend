const initialState = {
    currentUser: {}
    // products: []
}

export default (state = initialState , action) => {
    switch(action.type) {
        case 'LOGIN_USER':
        return {...state, currentUser: action.payload}
        // case 'PRODUCT_LIST':
        // // console.log(action.payload)
        // return {...state, products: action.payload}
    default:
        return state
    };
}