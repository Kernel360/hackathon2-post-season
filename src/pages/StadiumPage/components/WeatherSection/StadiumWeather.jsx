import React from 'react'
import useWeather from '@/hooks/utils/useWeather'
import getImageBySkyStatus from '@/utils/getImageBySkyStatus'
import * as S from '@/pages/StadiumPage/components/WeatherSection/WeatherSection.styled'
import useSelector from '@/react-redux/hooks/useSelector.js'

function StadiumWeather({ lat, lng }) {
  const latStr = Math.floor(lat).toString()
  const lngStr = Math.floor(lng).toString()
  const { error } = useWeather(latStr, lngStr)

  const sky = useSelector(state => state.weather.sky)
  const wind = useSelector(state => state.weather.wind)
  const temperature = useSelector(state => state.weather.temperature)
  const skySrc = getImageBySkyStatus(sky)

  if (error) {
    return <div>error: {error.message}</div>
  }

  return (
    <S.WeatherWrapper>
      <S.ImgSky src={skySrc} alt="sky" />
      <S.SpanTemp>{temperature}°</S.SpanTemp>
      <S.SpanWind>{wind}m/s</S.SpanWind>
    </S.WeatherWrapper>
  )
}

export default StadiumWeather
