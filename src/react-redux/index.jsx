import PropTypes from 'prop-types'
import { createContext } from 'react'

export const ReduxContext = createContext()

export function Provider(props) {
  const { store, children } = props
  return (
    // ReduxContext의 Provider를 사용하여
    // children에서 모든 state에 접근할 수 있도록 하는 코드 작성
    <ReduxContext.Provider value={store}>{children}</ReduxContext.Provider>
  )
}

Provider.propTypes = {
  // PropTypes를 사용하여 store와 children의 타입을 지정하는 코드 작성
  store: PropTypes.shape({
    getState: PropTypes.func,
    subscribe: PropTypes.func,
    dispatch: PropTypes.func,
  }),
  children: PropTypes.element,
}
