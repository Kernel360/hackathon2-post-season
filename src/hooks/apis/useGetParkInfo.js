import axios from 'axios'
import { useState, useEffect } from 'react'

const PATH = 'http://apis.data.go.kr/6300000/GetPakpListService1/getPakpList1'
const TKEY =
  'F2tl5d/WnzODJeNwAy+pHFW5WgA57X7fcaTNPse/rEUfd1StDJWqJglkWMjT04qOa+YCyp0plNd+rEJCFgFsFw=='
const PAGE_SIZE2 = 50
const KEYWORD = '대전광역시 중구 대종로'

async function fetchPage(pageNo) {
  const response = await axios.get(PATH, {
    params: {
      serviceKey: TKEY,
      numOfRows: PAGE_SIZE2,
      pageNo,
      type: 'json',
    },
  })
  return response.data
}

async function getAllPages() {
  let pageNo = 1
  let allData = []
  let keepFetching = true

  while (keepFetching) {
    // eslint-disable-next-line no-await-in-loop
    const data = await fetchPage(pageNo)
    if (
      data &&
      data.response &&
      data.response.body &&
      data.response.body.items
    ) {
      allData = allData.concat(data.response.body.items.item)
      pageNo += 1
      if (data.response.body.items.item.length < PAGE_SIZE2) {
        keepFetching = false // 마지막 페이지에 도달했을 때
        console.log('last')
      }
    } else {
      keepFetching = false // 데이터가 없거나 오류가 발생했을 때
    }
  }
  return allData
}

function filterByKeyword(data, keyword) {
  return data.filter(item => item.RDNMADR && item.RDNMADR.includes(keyword))
}

async function useGetParkInfo() {
  const allData = await getAllPages()
  const filteredData = filterByKeyword(allData, KEYWORD)
  return filteredData
}

export default useGetParkInfo

// const [parkInfo, setParkInfo] = useState([])
// const [loading, setLoading] = useState(true)

// useEffect(() => {
//   const fetchData = async () => {
//     setLoading(true)
//     try {
//       const allData = await getAllPages()
//       const filteredData = filterByKeyword(allData, KEYWORD)
//       setParkInfo(filteredData)
//     } catch (error) {
//       console.error('Error fetching park info:', error)
//     }
//     setLoading(false)
//   }

//   fetchData()
// }, []) // 빈 배열을 의존성 배열로 전달하여 컴포넌트가 마운트될 때 한 번만 호출

// console.log('parkInfo in hook', parkInfo)
// return { parkInfo, loading }
