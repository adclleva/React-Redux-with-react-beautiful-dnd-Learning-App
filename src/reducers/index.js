import { combineReducers } from "redux"
import categoriesReducer from "./categoriesReducer"

export default combineReducers({
    categories: categoriesReducer // this is the state that holds the categories
});