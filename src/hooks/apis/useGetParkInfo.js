// // import React, { useEffect, useState } from 'react'
// import axios from 'axios'

// // const PARKING_STATUS_INFO_API_URL =
// //   'http://apis.data.go.kr/B553881/Parking/PrkSttusInfo'
// // const PARKING_INFO_API_URL = 'http://apis.data.go.kr/B553881/Parking/PrkOprInfo'
// // const PARKING_STATE_API_URL =
// //   'http://apis.data.go.kr/B553881/Parking/PrkRealtimeInfo'
// // const PAGE_SIZE = 20
// // const KEY =
// //   'F2tl5d/WnzODJeNwAy+pHFW5WgA57X7fcaTNPse/rEUfd1StDJWqJglkWMjT04qOa+YCyp0plNd+rEJCFgFsFw=='
// // const PAGE = 1

// const PATH = 'http://apis.data.go.kr/6300000/GetPakpListService1/getPakpList1'

// const TKEY =
//   'F2tl5d/WnzODJeNwAy+pHFW5WgA57X7fcaTNPse/rEUfd1StDJWqJglkWMjT04qOa+YCyp0plNd+rEJCFgFsFw=='
// const PAGE_SIZE2 = 50
// const KEYWORD = '대전광역시 중구'

// function useGetParkInfo() {
//   // const parkingStatusInfo = axios.get(PARKING_STATUS_INFO_API_URL, {
//   //   params: {
//   //     serviceKey: KEY,
//   //     numOfRows: PAGE_SIZE,
//   //     pageNo: PAGE,
//   //     format: 2,
//   //   },
//   // })

//   // const ParkingInfo = axios.get(PARKING_INFO_API_URL, {
//   //   params: {
//   //     serviceKey: KEY,
//   //     numOfRows: PAGE_SIZE,
//   //     pageNo: PAGE,
//   //     format: 2,
//   //   },
//   // })

//   // const parkingState = axios.get(PARKING_STATE_API_URL, {
//   //   params: {
//   //     serviceKey: KEY,
//   //     numOfRows: PAGE_SIZE,
//   //     pageNo: PAGE,
//   //     format: 2,
//   //   },
//   // })

//   const test = axios.get(PATH, {
//     params: {
//       serviceKey: TKEY,
//       numOfRows: PAGE_SIZE2,
//       pageNo: 1, // 여기가 받는거
//       type: 'json',
//     },
//   })

//   return { test }
// }

// export default useGetParkInfo
// // parkingStatusInfo, ParkingInfo, parkingState,

// -------

import axios from 'axios'

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
