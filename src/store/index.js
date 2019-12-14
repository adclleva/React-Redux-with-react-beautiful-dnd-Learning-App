import {createStore} from "redux"
import rootReducer from "../reducers" // the rootReducer is basically importing from the default export of reducers/index.js file

const store = createStore(rootReducer)

export default store