import { createStore, combineReducers } from "redux"
import CheckReducer from "./reducer/CheckReducer"
import AddReducer from "./reducer/AddReducer"

const root = combineReducers({
    CheckReducer,
    AddReducer

})
const store = createStore(root)
export default store