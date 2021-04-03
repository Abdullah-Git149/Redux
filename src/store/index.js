import { createStore, combineReducers } from "redux"
import CheckReducer from "./reducer/CheckReducer"

const root = combineReducers({
 CheckReducer
    
})
const store = createStore(root)
export default store