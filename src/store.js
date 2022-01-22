import {createStore, combineReducers} from 'redux'
import reducer2 from "./reducers/reducer2"
import reducer1 from "./reducers/reducer1"

const reducers = combineReducers({reducer1,reducer2}) // thường tạo file root(index) riêng để combine hết đám này lại
// sau đó mới bắn store để createStore
const store = createStore(reducers)
export default store
