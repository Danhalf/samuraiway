import { combineReducers, createStore } from "redux";
import profileReducer from "./Reducers/profileReducer";
import dialogsReducer from "./Reducers/dialogsReducer";
import usersReducer from "./Reducers/usersReducer";
import authReducer from "./Reducers/authReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer
})

let store = createStore(reducers)

export default store