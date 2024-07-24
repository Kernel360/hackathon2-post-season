import * as S from './StadiumPage.styled'
import PickerMapSection from './components/PickerMapSection'
import WeatherSection from './components/WeatherSection/'

function StadiumPage() {
  return (
    <S.Container>
      <WeatherSection />
      <PickerMapSection />
    </S.Container>
  )
}

export default StadiumPage
