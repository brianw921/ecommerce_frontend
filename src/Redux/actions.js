export const userPostFetch = (user) => {
    return (dispatch) => {
        return fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Accept: "application/json"
            },
            body: JSON.stringify(user)
        })
        .then( r => r.json())
        .then( (userObj) => {
            console.log(userObj)
            localStorage.setItem("token" , userObj.jwt)
            dispatch(loginUser(userObj.user))
        })
    }
    
}

const loginUser = userObj => ({
    type: 'LOGIN_USER',
    payload: userObj
})

export const getUser = (user) => {
    return (dispatch) => {
        return fetch("http://localhost:3000/login" , {
        method: 'POST',
        headers: { "Content-type": "application/json", 
                Accept : "application/json"},
        body: JSON.stringify(user)
        })
        .then(r => r.json())
        .then( loginData => {
            console.log(loginData.token)
            localStorage.setItem("token", loginData.token)
            dispatch(loginUser(loginData.user))
        })
    }
}

export const fetchProducts = () => {
    return (dispatch) => {
        return fetch('http://localhost:3000/items')
        .then(r => r.json())
        .then((data) => {
           dispatch({type: "PRODUCT_LIST", payload: data})
        }
        )
    }
}

export const handleAnySort = (sortGender) => {
    return (dispatch) => {
        dispatch({type: "SORT_GENDER", payload: sortGender})
    }
}

export const showProduct = (item) => {
    return (dispatch) => {
        return fetch(`http://localhost:3000/items/${item.id}`)
        .then(r => r.json())
        .then( (item) => {
            console.log("hgjhghjk",item)
            dispatch({type: "SHOW_PRODUCT", payload: item})
            
        })
        
    }
}

export const addToCart = (item) => {
    return (dispatch) => {
        dispatch({type: "ADD_TO_CART", payload: item})
    }
}
export const removeFromCart = (cartItemId) => {
    console.log("CartItem.id", cartItemId)
    return (dispatch) => {
        dispatch({type: "REMOVE_FROM_CART", payload: cartItemId})
    }
}

export const submitOrder = (orderCartArr) => {
    return (dispatch) => {
        return fetch("http://localhost:3000/orders", {
            method: "POST",
            headers: { "content-type": "application/json", accept: "application/json"},
            body: JSON.stringify({
                order: {
                    cart: orderCartArr
                }
            })
        })
        .then(r => r.json())
        .then(console.log)
    }
}



//set action that will handle dispatch for product card
//get click function going to get the card the show and create and order. 

