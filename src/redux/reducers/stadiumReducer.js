// Action Types import 하는 코드 작성
// 초기 상태 작성
export const initialState = {
  stadium: null,
}
// Reducer 작성하기
function stadiumReducer(action, state = initialState) {
  // action이 없는 경우 state 리턴하는 코드 작성
  if (!action) {
    return state
  }
  // switch/case문을 이용하여 각 action에 따라 state에 변화주는 코드 작성
  switch (action.type) {
    case ACTION_TYPE_WEATHER:
      return {
        ...state,
        stadium: action.payload.stadium,
      }
    default:
      return state
  }
}

export default stadiumReducer
