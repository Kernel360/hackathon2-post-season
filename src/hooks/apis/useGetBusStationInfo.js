import axios from 'axios'
import { useEffect, useState } from 'react'

const PATH =
  'http://apis.data.go.kr/1613000/BusSttnInfoInqireService/getCrdntPrxmtSttnList'
const KEY =
  'F2tl5d/WnzODJeNwAy+pHFW5WgA57X7fcaTNPse/rEUfd1StDJWqJglkWMjT04qOa+YCyp0plNd+rEJCFgFsFw=='
// 'F2tl5d%2FWnzODJeNwAy%2BpHFW5WgA57X7fcaTNPse%2FrEUfd1StDJWqJglkWMjT04qOa%2BYCyp0plNd%2BrEJCFgFsFw%3D%3D'

// const PAGE_SIZE1 = 20

function useGetBusStationInfo(page, lat, log) {
  const [busStationInfo, setBusStationInfo] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    // async를 사용하는 함수 따로 선언
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await axios.get(PATH, {
          params: {
            serviceKey: KEY,
            // numOfRows: PAGE_SIZE1,
            // pageNo: page,
            _type: 'json',
            gpsLati: lat,
            gpsLong: log,
          },
        })
        setBusStationInfo(response.data.response.body.items.item)
      } catch (e) {
        console.log(e)
      }
      setLoading(false)
    }
    fetchData()
  }, [])

  return { loading, busStationInfo }
}

export default useGetBusStationInfo
