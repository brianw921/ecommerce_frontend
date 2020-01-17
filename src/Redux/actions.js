const deployed = "http://localhost:3000/"
// const deployed = "https://protected-eyrie-60550.herokuapp.com/"

export const userPostFetch = (user) => {
    console.log("actions", user)
    return (dispatch) => {
        return fetch(`${deployed}users` , {
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
            if (userObj.error){ 
                dispatch({type: "ERROR_HANDLING", payload: userObj.error})
            } else {
            localStorage.setItem("token" , userObj.jwt)
            dispatch(loginUser(userObj.user))
            }
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
        return fetch(`${deployed}login`, {
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

export const getUserPersist = () => {
    return (dispatch) => {
        return fetch(`${deployed}auth`, {
            method: "GET",
            headers: { "content-type": "application/json", "Authorization": "bearer " + localStorage.token}
        })
        .then( r => r.json())
        .then( (user) => {
            dispatch({type: "LOGIN_USER", payload: user})
        }
        )

    }
}

export const fetchProducts = () => {
    return (dispatch) => {
        return fetch(`${deployed}items`)
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

export const sortCategory = (sortCategory) => {
    
    return (dispatch) => {
        dispatch({type: "SORT_CATEGORY", payload: sortCategory})
    }
}

export const handleSortPrice = (priceValue) => {
    return (dispatch) => {
        dispatch({type: "SORT_PRICE", payload: priceValue})
    }
}

export const showProduct = (item) => {
    return (dispatch) => {
        return fetch(`${deployed}items/${item.id}`)
        .then(r => r.json())
        .then( (item) => {
            dispatch({type: "SHOW_PRODUCT", payload: item})
            
        })
        
    }
}

export const addToCart = (item, user) => {
    
    return (dispatch) => {
        fetch(`${deployed}order_items`, {

            method: 'POST',
            headers: { 'Content-Type': 'application/json' , Accept: 'application/json'},
            body: JSON.stringify({
                item_id: item.id,
                order_id: user.cart.id
            })
        })
        .then(res => res.json())
        .then((item) => {
            dispatch({type: "ADD_TO_CART", payload: item})
        }  
        )
    }
}



export const removeFromCart = (cartItemId) => {
    return (dispatch) => {
        return fetch(`${deployed}order_items/${cartItemId}`, {
            method: "DELETE"
        })
        .then(r => r.json())
        .then((data) => {
            console.log("TWO", data)
            dispatch({type: "REMOVE_FROM_CART", payload: data})
        })
    }
}

export const submitOrder = () => {
    return (dispatch) => {
        return fetch(`${deployed}orders`, {
            method: "POST",
            headers: { "content-type": "application/json", accept: "application/json",
            "Authorization": 'bearer ' + localStorage.token
        }
        })
        .then(r => r.json())
        .then(data => {
            dispatch({type: "SUBMIT_ORDER", payload: data})
            dispatch({type: "LOGIN_USER", payload: data})
        })
    }
}

export const searchOrder = (searchTerm) => {
    console.log(searchTerm)
    return (dispatch) => {
        dispatch({type: "SEARCH", payload: searchTerm})
    }
}





