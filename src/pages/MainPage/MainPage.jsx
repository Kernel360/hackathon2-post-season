import * as S from './MainPage.styled'

import ClubSection from './components/ClubSection'
import MainCarouselSection from './components/MainCarouselSection'

function MainPage() {
  return (
    <S.Container>
      MainPage
      <MainCarouselSection />
      <ClubSection />
    </S.Container>
  )
}

export default MainPage
