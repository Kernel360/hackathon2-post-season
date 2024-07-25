/* eslint-disable no-inner-declarations */
import useDispatch from '@/react-redux/hooks/useDispatch'
import useSelector from '@/react-redux/hooks/useSelector'
import { setWeatherActionCreator } from '@/redux/actions/weatherAction'
import getCurrentDate from '@/utils/date/getCurrentDate.js'
import getCurrentSharpTime from '@/utils/date/getCurrentSharpTime.js'
import axios from 'axios'
import { useEffect, useState } from 'react'

const fetchWeather = async (
  latitude,
  longitude,
  isCurrentTimeRequired = true
) => {
  const serviceKey = `4ilvM/MZHjnpTB21ujv6m61TBG3kyYMnMQG+3w0AZ+Wan/+9cBoMsa4ho2BYjLPUDJWfL+zRJ6YrufBiA8JFbA==`
  const pageNo = `1`
  const numOfRows = `60`
  const dataType = `json`
  const baseDate = getCurrentDate()
  const baseTime = getCurrentSharpTime(isCurrentTimeRequired)
  const url = `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst`

  try {
    // console.log('호출')
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
    // console.log(data)
    if (!data.response.body) {
      // console.log(data)
      if (isCurrentTimeRequired) {
        await fetchWeather(false)
      } else {
        throw new Error('유효한 데이터를 받을 수 없습니다.')
      }
    } else {
      function getWeatherByCategory(category) {
        const weatherItems = data.response.body.items.item.filter(
          item => item.category === category
        )
        return weatherItems
      }

      const skyData = getWeatherByCategory('SKY')[0].fcstValue
      const windData = getWeatherByCategory('WSD')[0].fcstValue
      const temperatureData = getWeatherByCategory('T1H')[0].fcstValue

      const result = {
        skyData,
        windData,
        temperatureData,
      }
      return result
    }
  } catch (e) {
    // setError(e)
    // console.log(data)
    console.error('fetch 과정 중 에러 발생', e)
  }
}

const useWeather = (stadiumName, latitude, longitude) => {
  const [error, setError] = useState(null)

  const dispatch = useDispatch()

  const weatherData = useSelector(
    state => state.weather.stadiumWeatherMap[stadiumName]
  )

  useEffect(() => {
    async function updateWeather() {
      const { skyData, windData, temperatureData } = await fetchWeather(
        latitude,
        longitude
      )
      dispatch(
        setWeatherActionCreator(stadiumName, skyData, windData, temperatureData)
      )
    }
    if (weatherData === undefined) {
      updateWeather()
    }
  }, [latitude, longitude])

  return { error }
}

export default useWeather
