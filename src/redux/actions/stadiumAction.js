// Action Types
export const ACTION_TYPE_STADIUM = 'setStadium'

// Action Creators 작성하기
export function setStadiumActionCreator(stadium) {
  return {
    type: ACTION_TYPE_STADIUM,
    payload: stadium,
  }
}
