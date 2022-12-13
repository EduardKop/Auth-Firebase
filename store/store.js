import {createStore} from "redux"

// const store = configureStore({
//   reducer: {
//     user: authorizationReduser
//   },
//   userData: {

//   }
// })
const defaultAuthorization = {
    userName: '',
    uid:''
}
const reducer =(state = defaultAuthorization,action) => {
    switch(action.type) {
        case "SIGN_IN":
            return state, {
                userName: action.name,
                uid:action.id
            }
        case "SIGN_OUT":
            return state, {
                userName: action.name,
                uid:action.id
            }

        default:
            return state

    }       
}

const store = createStore(reducer)
export default store