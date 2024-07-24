import React from 'react'
import useWeather from '@/hooks/utils/useWeather'
import getImageBySkyStatus from '@/utils/getImageBySkyStatus'
import * as S from '@/pages/StadiumPage/components/WeatherSection/WeatherSection.styled'

// eslint-disable-next-line react/prop-types
function StadiumWeather({ lat, lng }) {
  const latStr = Math.floor(lat).toString()
  const lngStr = Math.floor(lng).toString()

  const { weatherData, error } = useWeather(latStr, lngStr)
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
  const sky = getImageBySkyStatus(getWeatherByCategory('SKY')[0].fcstValue)
  const temp = getWeatherByCategory('T1H')[0].fcstValue
  const wind = getWeatherByCategory('WSD')[0].fcstValue

  return (
    <S.WeatherWrapper>
      <S.ImgSky src={sky} alt="sky" />
      <S.SpanTemp>{temp}°</S.SpanTemp>
      <S.SpanWind>{wind}m/s</S.SpanWind>
    </S.WeatherWrapper>
  )
}

export default StadiumWeather
