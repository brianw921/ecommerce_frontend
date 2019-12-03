const initialState = {
    products: [],
    showProduct: {}, //MAY NOT NEED THIS
    sortGender: "",
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
        console.log("TWO", action.payload)
        return {...state, showProduct: action.payload}
        
        case 'SORT_GENDER':
        return {...state, sortGender: action.payload}

        case 'SORT_CATEGORY':
        return {...state, sortCategory: action.payload}

        case 'ADD_TO_CART':
        return {...state, cart: action.payload.order_items}

        // case "SEARCH":
        //      const productList = state.products.filter(p => p.product_full_name.toLowerCase().includes(action.payload.toLowerCase()))
        //      return {
        //          ...state,
        //          products: productList,
        //          search: action.payload
        //      }
        case 'REMOVE_FROM_CART':
        console.log("THREE", action.payload.id)
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
