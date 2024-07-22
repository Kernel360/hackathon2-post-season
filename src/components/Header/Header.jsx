// import ChevronDownIcon from '@assets/svg/chevron-down.svg?react'
import ChevronUPIcon from '../../assets/svg/chevron-up.svg?react'
import ChevronDownIcon from '../../assets/svg/chevron-down.svg?react'

import * as S from './Header.styled'
import useBooleanState from '../../hooks/utils/useBooleanState'
import ball from '../../assets/png/ball.png'
import Dropdown from './components/Dropdown'

// import YellowDotIcon from '@/assets/svg/dots/yellowDot.svg?react'

// '../../assets/svg/chevron-up.svg?react'

function Header() {
  const { value: isDropdownView, toggle, setFalse } = useBooleanState()

  const handleBlurContainer = () => {
    setTimeout(() => {
      setFalse()
    }, 200)
  }

  return (
    <S.Container>
      <S.Logo src={ball} alt="err" />
      <S.Title>Post Season</S.Title>
      <S.TriggerSection className="container" onBlur={handleBlurContainer}>
        <S.Trigger onClick={toggle} type="button">
          프로 야구 {isDropdownView ? <ChevronUPIcon /> : <ChevronDownIcon />}
        </S.Trigger>
        {isDropdownView && <Dropdown />}
      </S.TriggerSection>
    </S.Container>
  )
}

export default Header
