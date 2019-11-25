const initialState = {
    products: [],
    showProduct: {}, //MAY NOT NEED THIS
    sortGender: "",
    cart: [],
    pastOrders: []
    
}

export default (state = initialState , action) => {
    
    switch(action.type) {
        
        case 'PRODUCT_LIST':
        // console.log(action.payload)
        return {...state, products: action.payload}
        case 'SHOW_PRODUCT':
        console.log(action.payload)
        return {...state, showProduct: action.payload}
        case 'SORT_GENDER':
        // console.log(action.payload)
        return {...state, sortGender: action.payload}
        case 'ADD_TO_CART':
        console.log("helllllooooooooo hi", action.payload)
        return {...state, cart: [...state.cart, action.payload]}
    default:
    
        return state
    
    };
    
}


//helper
// const handleShowProduct = (items , itemId ) => {
//     // return items.find( (item) => {
//     //     return item.id === itemId
//     // }
//     // )
//     console.log(items)
//     console.log(itemId)
// }