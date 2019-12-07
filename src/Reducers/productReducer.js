const initialState = {
    products: [],
    productIndex: 0,
    showProduct: {}, 
    sortGender: "",
    sortCategory: "",
    sortPrice: "",
    cart: [],
    search: ""
    
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
        return {...state, sortGender: action.payload, sortCategory: ""}

        case 'SORT_CATEGORY':
        
        return {...state, sortCategory: action.payload}

        case 'SORT_PRICE':
        return {...state, sortPrice: action.payload}

        case 'ADD_TO_CART':
        return {...state, cart: action.payload.order_items}

        case "SEARCH":
        return {...state,search: action.payload}

        case 'REMOVE_FROM_CART':
        return {...state, cart: [...handleRemoveFromCart([...state.cart], action.payload.id)]}

        case 'CLEAR_CART':
        return {...state, cart: []}

        case 'SUBMIT_ORDER':
        return {...state, cart: []}
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
