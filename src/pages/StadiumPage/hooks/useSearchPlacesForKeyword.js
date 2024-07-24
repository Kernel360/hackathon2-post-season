import { useState } from 'react'

function useSearchPlacesForKeyword(center) {
  const [search, setSearch] = useState([])

  const searchPlaces = keyword => {
    const { kakao } = window
    if (!center) return

    const ps = new kakao.maps.services.Places()
    const options = {
      location: new kakao.maps.LatLng(center.lat, center.lng),
      radius: 5000,
      sort: kakao.maps.services.SortBy.DISTANCE,
    }

    ps.keywordSearch(
      keyword,
      (data, status) => {
        if (status === kakao.maps.services.Status.OK) {
          setSearch(data)
        } else {
          console.error('검색에 실패하였습니다.')
        }
      },
      options
    )
  }

  return { search, searchPlaces }
}

export default useSearchPlacesForKeyword
