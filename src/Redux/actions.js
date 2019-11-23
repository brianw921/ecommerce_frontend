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
            // console.log(data)
           dispatch({type: "PRODUCT_LIST", payload: data})
        }
        )
    }
}

export const handleAnySort = (sortCategory) => {
    return (dispatch) => {
        dispatch({type: "SORT_CATEGORY", payload: sortCategory})
    }
}

//set action that will handle dispatch for product card
//get click function going to get the card the show and create and order. 

