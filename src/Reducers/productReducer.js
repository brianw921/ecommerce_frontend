const initialState = {
    products: []
}

export default (state = initialState , action) => {
    switch(action.type) {
        case 'PRODUCT_LIST':
        // console.log(action.payload)
        return {...state, products: action.payload}
    default:
        return state
    };
}