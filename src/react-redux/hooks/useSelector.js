import { useContext, useSyncExternalStore } from 'react'
import { ReduxContext } from '..'

function useSelector(selector) {
  const reduxContext = useContext(ReduxContext)

  // useSyncExternalStore 훅을 사용하여 원하는 state만을 리턴하는 코드 작성
  return useSyncExternalStore(reduxContext.subscribe, () =>
    selector(reduxContext.getState())
  )
}

export default useSelector
