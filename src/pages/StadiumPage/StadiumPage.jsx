import RestaurantSection from '../MainPage/components/RestaurantSection/RestaurantSection'
import * as S from './StadiumPage.styled'
import PickerMapSection from './components/PickerMapSection'
import WeatherSection from './components/WeatherSection'

function StadiumPage() {
  return (
    <S.Container>
      <WeatherSection />
      <PickerMapSection />
      <RestaurantSection />
    </S.Container>
  )
}

export default StadiumPage
