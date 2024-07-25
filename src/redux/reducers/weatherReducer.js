// Action Types import 하는 코드 작성
import { ACTION_TYPE_WEATHER } from '../actions/weatherAction'
// 초기 상태 작성
export const initialState = {
  sky: undefined,
  wind: null,
  temperature: undefined,
}

// 비동기 통신 -> action 3개 / requested, succeeded, failed
// 비동기 통신 시 thunk, saga 라이브러리를 참고해야함 => e2e때 쓰는걸로
// 날씨 데이터 set 하는 정도로 응용해보기

// 1. 액션 정의
// 2. 리듀서에 어떤 변화 줘야 할지 정의하기

// Reducer 작성하기
function weatherReducer(action, state = initialState) {
  console.log('Reducer called with action:', action) // 액션 확인 로그 추가
  // action이 없는 경우 state 리턴하는 코드 작성
  if (!action) {
    return state
  }
  // switch/case문을 이용하여 각 action에 따라 state에 변화주는 코드 작성
  switch (action.type) {
    case ACTION_TYPE_WEATHER:
      return {
        ...state,
        sky: action.payload.sky,
        wind: action.payload.wind,
        temperature: action.payload.temperature,
      }
    default:
      return state
  }
}

export default weatherReducer