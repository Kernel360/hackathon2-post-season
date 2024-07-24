import { useContext } from 'react'
import { ReduxContext } from '..'

function useDispatch() {
  const reduxContext = useContext(ReduxContext)
  // reduxContext를 사용하여 Store의 dispatch 함수를 리턴하는 코드 작성
  return reduxContext.dispatch
}

export default useDispatch
