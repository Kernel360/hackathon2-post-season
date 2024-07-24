import React, { useEffect, useState } from 'react'
import axios from 'axios'
import getCurrentDate from '@/utils/date/getCurrentDate.js'
import getCurrentSharpTime from '@/utils/date/getCurrentSharpTime.js'

const useWeather = (latitude, longitude) => {
  const [weatherData, setWeatherData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchWeather = async (isCurrentTimeRequired = true) => {
      const serviceKey = `F2tl5d/WnzODJeNwAy+pHFW5WgA57X7fcaTNPse/rEUfd1StDJWqJglkWMjT04qOa+YCyp0plNd+rEJCFgFsFw==`
      const pageNo = `1`
      const numOfRows = `60`
      const dataType = `json`
      const baseDate = getCurrentDate()
      const baseTime = getCurrentSharpTime(isCurrentTimeRequired)
      // const baseTime = '1000'
      const url = `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst`

      try {
        const response = await axios.get(url, {
          params: {
            serviceKey,
            numOfRows,
            pageNo,
            dataType,
            base_date: baseDate,
            base_time: baseTime,
            nx: latitude,
            ny: longitude,
          },
        })
        const { data } = response
        if (!data.response.body) {
          if (isCurrentTimeRequired) {
            await fetchWeather(false)
          } else {
            throw new Error('유효한 데이터를 받을 수 없습니다.')
          }
        } else {
          setWeatherData(data)
        }
      } catch (e) {
        setError(e)
        console.error('fetch 과정 중 에러 발생', e)
      }
    }
    fetchWeather()
  }, [])
  return { weatherData, error }
}

export default useWeather
