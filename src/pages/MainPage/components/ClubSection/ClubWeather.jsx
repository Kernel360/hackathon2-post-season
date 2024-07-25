import PropTypes from 'prop-types'
import { useEffect } from 'react'
import useWeather from '@/hooks/utils/useWeather'
import useSelector from '@/react-redux/hooks/useSelector'
import getImageBySkyStatus from '@/utils/getImageBySkyStatus'
import * as S from './ClubSection.styled'

function ClubWeather({ club }) {
  const { error } = useWeather(club.lat, club.lon)

  const sky = useSelector(state => state.weather.sky)
  const wind = useSelector(state => state.weather.wind)
  const temperature = useSelector(state => state.weather.temperature)
  const skySrc = getImageBySkyStatus(sky)

  useEffect(() => console.log(sky, temperature), [sky, temperature])

  if (error) {
    return <div>error: {error.message}</div>
  }

  return (
    <S.WeatherArea>
      <div>
        <S.ImgWeather src={skySrc} alt="sky" />
      </div>
      <S.SpanTemp>{temperature}°C</S.SpanTemp>
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
