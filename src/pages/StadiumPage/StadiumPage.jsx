import RestaurantSection from '../MainPage/components/RestaurantSection/RestaurantSection'
import * as S from './StadiumPage.styled'
import PickerMapSection from './components/PickerMapSection'

function StadiumPage() {
  return (
    <S.Container>
      <PickerMapSection />
      <RestaurantSection />
    </S.Container>
  )
}

export default StadiumPage
