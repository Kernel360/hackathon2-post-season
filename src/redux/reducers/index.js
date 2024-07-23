// combineReducers 함수 import 하는 코드 작성
import { combineReducers } from '../redux'
// Reducer들을 import하는 코드 작성
import counterReducer from './counterReducer'

// combineReducers 함수를 호출하여 rootReducer를 생성하는 코드 작성
const rootReducer = combineReducers({
  counter: counterReducer,
})
export default rootReducer
