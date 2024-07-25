import PropTypes from 'prop-types'
import { useEffect } from 'react'
import useWeather from '@/hooks/utils/useWeather'
import useSelector from '@/react-redux/hooks/useSelector'
import getImageBySkyStatus from '@/utils/getImageBySkyStatus'
import PropTypes from 'prop-types'
import * as S from './ClubSection.styled'

function ClubWeather({ club }) {
  const { error } = useWeather(club.link, club.lat, club.lon)

  const weatherData = useSelector(
    state => state.weather.stadiumWeatherMap[club.link]
  )

  const skySrc = getImageBySkyStatus(weatherData?.sky)

  if (error) {
    return <div>error: {error.message}</div>
  }

  return (
    <S.WeatherArea>
      <div>
        <S.ImgWeather src={skySrc} alt="sky" />
      </div>
      <S.SpanTemp>{weatherData?.temperature}°C</S.SpanTemp>
    </S.WeatherArea>
  )
}
// PropTypes 설정
ClubWeather.propTypes = {
  club: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    lat: PropTypes.string.isRequired,
    lon: PropTypes.string.isRequired,
  }).isRequired,
}

export default ClubWeather
