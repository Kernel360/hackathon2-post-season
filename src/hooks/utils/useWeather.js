import React, { useEffect, useState } from 'react'
import axios from 'axios'

function getCurrentDate() {
  const now = new Date()
  const year = now.getFullYear()
  const month = (now.getMonth() + 1).toString().padStart(2, '0')
  const date = now.getDate().toString().padStart(2, '0')
  return `${year}${month}${date}`
}
function getCurrentSharpTime(isCurrentTimeRequired) {
  const now = new Date()
  let hours
  if (isCurrentTimeRequired) {
    hours = now.getHours().toString().padStart(2, '0')
  } else {
    hours = (now.getHours() - 1).toString().padStart(2, '0')
  }
  return `${hours}00`
}
const useWeather = (latitude, longitude) => {
  const [weatherData, setWeatherData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchWeather = async (isCurrentTimeRequired = true) => {
      const serviceKey = `D1ZwAWGHbxbJAuxI9mpTo1P0JHF0w8PPZOFO0RNtR/xk7vNZO5Ls0ympXujmbCsj3Krsycp+5EaDLMP5BpUYtQ==`
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
        if (
          !data ||
          !data.response ||
          !data.response.body ||
          !data.response.body.items ||
          !data.response.body.items.item.length
        ) {
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
  }, [latitude, longitude])
  return { weatherData, error }
}

export default useWeather
