import React from 'react'
import { useParams } from 'react-router-dom'
import * as S from './WeatherSection.styled'
import { getStadiumLocation } from '@/utils/getStadiumLocation.js'
import imgLocation from '@/assets/svg/map-pin.svg'
import getCurrentSharpTime from '@/utils/date/getCurrentSharpTime.js'
import getCurrentTimeFormatted from '@/utils/date/getCurrentTimeFormatted.js'
import StadiumWeather from './StadiumWeather'

const WeatherSection = () => {
  const { stadiumName } = useParams()
  const stadiumInfo = getStadiumLocation(stadiumName)
  const currentTime = getCurrentTimeFormatted()
  return (
    <S.WeatherWrapper>
      <S.SpanLocation>{stadiumInfo.location}</S.SpanLocation>
      <S.Img src={imgLocation} />
      <StadiumWeather data={stadiumInfo} />
      <S.SpanTime>{currentTime}</S.SpanTime>
    </S.WeatherWrapper>
  )
}

export default WeatherSection
