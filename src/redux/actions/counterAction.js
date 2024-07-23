// Action Types
export const ACTION_TYPE_INCREASE = 'increase'
export const ACTION_TYPE_DECREASE = 'decrease'

// Action Creators 작성하기
export function increaseActionCreator() {
  return {
    type: ACTION_TYPE_INCREASE,
  }
}

export function decreaseActionCreator() {
  return {
    type: ACTION_TYPE_DECREASE,
  }
}
