export const userPostFetch = (user) => {
    console.log("actions", user)
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
            console.log("USEROBJ", userObj)
            localStorage.setItem("token" , userObj.jwt)
            
            dispatch(loginUser(userObj.user))
        })
    }
    
}

const loginUser = userObj => ({
    type: 'LOGIN_USER',
    payload: userObj
})

export const logOut = () => dispatch => {
    dispatch({type: "LOG_OUT"})
    dispatch({type: "CLEAR_CART"})
    localStorage.clear()
}

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
           console.log(loginData)
           
           if (loginData.user) {
                localStorage.setItem("token", loginData.token)
                dispatch({type: "ADD_TO_CART", payload: loginData.user.cart})
                return dispatch(loginUser(loginData.user))
            } else if (loginData.error) {
                dispatch({type: "ERROR_HANDLING", payload: loginData.error})
            }
            
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
            console.log("ONE", item)
            dispatch({type: "SHOW_PRODUCT", payload: item})
            
        })
        
    }
}

export const addToCart = (item, user) => {
    console.log("BRIAN WONG",user)
    return (dispatch) => {
        fetch('http://localhost:3000/order_items', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' , Accept: 'application/json'},
        body: JSON.stringify({
            item_id: item.id,
            order_id: user.cart.id
        })
    })
    .then(res => res.json())
    .then((data) => {
        console.log("ACTION", data)
        dispatch({type: "ADD_TO_CART", payload: data})
    }
    )
    }
}



export const removeFromCart = (cartItemId) => {
    return (dispatch) => {
        return fetch(`http://localhost:3000/order_items/${cartItemId}`, {
            method: "DELETE"
        })
        .then(r => r.json())
        .then((data) => {
            console.log("TWO", data)
            dispatch({type: "REMOVE_FROM_CART", payload: data})
        })

    }
}

export const submitOrder = (orderCartArr) => {
    console.log("orderCartArr", orderCartArr)
    return (dispatch) => {
        return fetch("http://localhost:3000/orders", {
            method: "POST",
            headers: { "content-type": "application/json", accept: "application/json",
        "Authorization": 'bearer ' + localStorage.token
        },
            body: JSON.stringify({
                
                order: {
                    cart: orderCartArr
                }
            })
        })
        .then(r => r.json())
        .then(data => {
            console.log("BRIAN WONG", data)
            dispatch({type: "SUBMIT_ORDER", payload: data})
        })
    }
}





