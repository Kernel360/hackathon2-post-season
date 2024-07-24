// combineReducers 함수 import 하는 코드 작성
import { combineReducers } from '../redux'
import weatherReducer from './weatherReducer'
// Reducer들을 import하는 코드 작성

// combineReducers 함수를 호출하여 rootReducer를 생성하는 코드 작성
const rootReducer = combineReducers({
  weather: weatherReducer,
})
export default rootReducer
