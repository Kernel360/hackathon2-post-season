// createStore 함수를 import 하는 코드 작성
import { createStore } from './redux'
// rootReducer를 import 하는 코드 작성
import rootReducer from './reducers'

// createStore 함수와 rootReducer를 사용하여 store를 생성하는 코드 작성
const store = createStore(rootReducer)

export default store
