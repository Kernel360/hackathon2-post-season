import * as S from '@/pages/StadiumPage/components/WeatherSection/WeatherSection.styled'
import useSelector from '@/react-redux/hooks/useSelector.js'
import getImageBySkyStatus from '@/utils/getImageBySkyStatus'
import { useParams } from 'react-router-dom'

function StadiumWeather({ lat, lng }) {
  const latStr = Math.floor(lat).toString()
  const lngStr = Math.floor(lng).toString()

  const path = useParams().stadiumName

  const weatherData = useSelector(
    state => state.weather.stadiumWeatherMap[path]
  )

  const skySrc = getImageBySkyStatus(weatherData?.sky)

  return (
    <S.WeatherWrapper>
      <S.ImgSky src={skySrc} alt="sky" />
      <S.SpanTemp>{weatherData?.temperature}°</S.SpanTemp>
      <S.SpanWind>{weatherData?.wind}m/s</S.SpanWind>
    </S.WeatherWrapper>
  )
}

export default StadiumWeather
