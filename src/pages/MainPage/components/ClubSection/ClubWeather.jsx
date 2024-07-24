import React from 'react'
import PropTypes from 'prop-types'
import useWeather from '@/hooks/utils/useWeather.js'
import sun from '@/assets/svg/sun.svg'
import sunCloud from '@/assets/svg/sun.svg'
import * as S from './ClubSection.styled'

function ClubWeather({ club }) {
  const { weatherData, error } = useWeather(club.lat, club.lon)

  if (error) {
    return <div>error: {error.message}</div>
  }
  if (!weatherData) {
    return <div>loading...</div>
  }

  function getWeatherByCategory(category) {
    const weatherItems = weatherData.response.body.items.item.filter(
      item => item.category === category
    )
    return weatherItems
  }
  const SkyStatus = getWeatherByCategory('SKY')[0].fcstValue
  const Temp = getWeatherByCategory('T1H')[0].fcstValue
  const Wind = getWeatherByCategory('WSD')[0].fcstValue
  function getImageBySkyStatus(status) {
    switch (status) {
      case 1:
        return
      case 2:
      case 3:
      case 4:
      default:
        return `can't get image`
    }
  }

  console.log(`******* weatherInfo = ${SkyStatus}`)
  return (
    <S.WeatherArea>
      <div>{SkyStatus}</div>
      <div>{Temp}°C</div>
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
