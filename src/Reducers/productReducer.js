const initialState = {
    products: [],
    showProduct: {}, //MAY NOT NEED THIS
    sortGender: "",
    cart: [],
    search: "",
    pastOrders: []
    
}

export default (state = initialState , action) => {
    
    switch(action.type) {
        
        case 'PRODUCT_LIST':
        
        return {
            ...state,
            products: action.payload
        }
        case 'SHOW_PRODUCT':
        
        return {...state, showProduct: action.payload}
        case 'SORT_GENDER':
        
        return {...state, sortGender: action.payload}
        case 'ADD_TO_CART':
        
        return {...state, cart: [...state.cart, action.payload]}
        case "SEARCH":
             const productList = state.products.filter(p => p.product_full_name.toLowerCase().includes(action.payload.toLowerCase()))
             return {
                 ...state,
                 products: productList,
                 search: action.payload
             }
        case 'REMOVE_FROM_CART':
        
        return {...state, cart: [...handleRemoveFromCart([...state.cart], action.payload)]}
    default:
    
        return state
    
    };
    
}

//REMOVE FROM CART HELPER
const handleRemoveFromCart = (cart, cartId) => {
    
    return cart.filter( (cart) => {
        return cart.id !== cartId
    }
    )
}

//helper
