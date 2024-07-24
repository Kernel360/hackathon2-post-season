import useDispatch from '@/react-redux/hooks/useDispatch'
import { setWeatherActionCreator } from '@/redux/actions/weatherAction'
import getCurrentDate from '@/utils/date/getCurrentDate.js'
import getCurrentSharpTime from '@/utils/date/getCurrentSharpTime.js'
import axios from 'axios'
import { useEffect, useState } from 'react'
const useWeather = (latitude, longitude) => {
  const [error, setError] = useState(null)

  const dispatch = useDispatch()

  const fetchWeather = async (isCurrentTimeRequired = true) => {
    const serviceKey = `F2tl5d/WnzODJeNwAy+pHFW5WgA57X7fcaTNPse/rEUfd1StDJWqJglkWMjT04qOa+YCyp0plNd+rEJCFgFsFw==`
    const pageNo = `1`
    const numOfRows = `60`
    const dataType = `json`
    const baseDate = getCurrentDate()
    const baseTime = getCurrentSharpTime(isCurrentTimeRequired)
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
        function getWeatherByCategory(category) {
          const weatherItems = data.response.body.items.item.filter(
            item => item.category === category
          )
          return weatherItems
        }

        const skyData = getWeatherByCategory('SKY')[0].fcstValue
        const windData = getWeatherByCategory('WSD')[0].fcstValue
        const temperatureData = getWeatherByCategory('T1H')[0].fcstValue

        // console.log(sky, temperature)

        dispatch(
          setWeatherActionCreator({
            sky: skyData,
            wind: windData,
            temperature: temperatureData,
          })
        )
      }
    } catch (e) {
      setError(e)
      console.error('fetch 과정 중 에러 발생', e)
    }
  }

  useEffect(() => {
    fetchWeather()
  }, [latitude, longitude])

  return { error }
}

export default useWeather
