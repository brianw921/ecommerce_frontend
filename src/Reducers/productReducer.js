const initialState = {
    products: [],
    showProduct: {},
    sortCategory: "",
    cart: {},
    pastOrders: []
}

export default (state = initialState , action) => {
    switch(action.type) {
        case 'PRODUCT_LIST':
        // console.log(action.payload)
        return {...state, products: action.payload}
        case 'SHOW_PRODUCT':
        return {...state, products: action.payload}
        case 'SORT_CATEGORY':
        console.log(action.payload)
        return {...state, sortCategory: action.payload}
    default:
        return state
    };
}