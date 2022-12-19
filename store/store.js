import {createStore} from "redux"
import { combineReducers } from 'redux';

const defaultAuthorization = {
    userName: '',
    uid:''
}
const defaultUserPosts = {
    content: '',
    title: ''
}

function userReducer(state = defaultAuthorization,action) {
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

function userPosts(state = defaultUserPosts,action) {
    switch(action.type) {
        case "CREATE_BLOG_POST":
            return state, {
            content: action.content,
            title:action.title
            }
        case "DELETE_BLOG_POST":
            return state, {
            content: '',
            title:''
            }
        default:
            return state

    }      
  }
const defaultLoginBtn = {
    isAuthorized: false
}
function loginBtnStatus(state = defaultLoginBtn, action) {
    switch (action.type) {
        case 'AUTHORIZE':
            return {
            isAuthorized: true
            };
        case 'EXIT':
            return {
            isAuthorized: false
            };
        default:
            return state;
        }
}


  const rootReducer = combineReducers({
    user: userReducer,
    post: userPosts,
    isAuthorized:loginBtnStatus
  });
const store = createStore(rootReducer)
export default store