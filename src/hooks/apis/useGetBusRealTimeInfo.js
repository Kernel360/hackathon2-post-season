import { useEffect, useState } from 'react'
import axios from 'axios'

const PATH =
  'http://apis.data.go.kr/1613000/ArvlInfoInqireService/getSttnAcctoArvlPrearngeInfoList'
const KEY =
  'F2tl5d/WnzODJeNwAy+pHFW5WgA57X7fcaTNPse/rEUfd1StDJWqJglkWMjT04qOa+YCyp0plNd+rEJCFgFsFw=='

function useGetBusRealTimeInfo(cityCode, nodeId) {
  const [busRealTimeInfo, setBusRealTimeInfo] = useState()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!cityCode || !nodeId) return

    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await axios.get(PATH, {
          params: {
            serviceKey: KEY,
            // numOfRows: PAGE_SIZE2,
            // pageNo,
            cityCode,
            nodeId,
            _type: 'json',
          },
        })
        setBusRealTimeInfo(response.data.response.body.items.item)
      } catch (e) {
        console.log(e)
      }
      setLoading(false)
    }
    fetchData()
  }, [cityCode, nodeId])

  return { loading, busRealTimeInfo }
}

export default useGetBusRealTimeInfo
