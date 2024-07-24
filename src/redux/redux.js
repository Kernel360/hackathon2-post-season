// rootReducer를 파라미터로 받아
export function createStore(rootReducer) {
  let currentState = rootReducer()
  let listenerCount = 0
  let listenerMap = {}

  return {
    getState: () => {
      // 현재 상태를 리턴하는 코드 작성
      return currentState
    },
    subscribe: listener => {
      // 고유한 listenerId를 생성하는 코드 작성 (listenerCount 값 사용)
      const listenerId = listenerCount++

      // listenerMap에 listener를 추가하는 코드 작성
      listenerMap[listenerId] = listener
      return function unsubscribe() {
        // listenerMap에서 listener를 제거하는 코드 작성
        if (!listenerMap[listenerId]) {
          return
        }
        delete listenerMap[listenerId]
      }
    },
    dispatch: action => {
      // rootReducer를 사용해서 currentState를 업데이트 하는 코드 작성
      currentState = rootReducer(currentState, action)

      // listenerMap에 등록된 listener들을 실행하는 코드 작성
      Object.values(listenerMap).forEach(listener => {
        listener()
      })
      // action을 리턴하는 코드 작성
      return action
    },
  }
}

export function combineReducers(reducerMap) {
  const reducerKeys = Object.keys(reducerMap)

  return function rootReducer(state = {}, action) {
    let hasChanged = false
    const nextState = {}
    for (let i = 0; i < reducerKeys.length; i++) {
      // 각 reducer들을 사용하여 nextState를 만드는 코드 작성
      const key = reducerKeys[i]
      const reducer = reducerMap[key]
      const prevStateForKey = state[key]
      const nextStateForKey = reducer(prevStateForKey, action)
      nextState[key] = nextStateForKey
      hasChanged = hasChanged || nextStateForKey !== prevStateForKey
      // 현재 state와 다음 state를 비교하여 hasChanged 값을 갱신하는 코드 작성
    }

    // reducerKeys의 길이와 state의 키의 개수를 비교하여 hasChanged 값을 갱신하는 코드 작성 - 변화 상태 감지 코드
    hasChanged = hasChanged || reducerKeys.length !== Object.keys(state).length

    return hasChanged ? nextState : state
  }
}
