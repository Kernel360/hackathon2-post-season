import { useState, useEffect } from 'react'

function useGeocoding(location) {
  const { kakao } = window

  const [locationState, setLocationState] = useState({
    center: { lat: 33.450701, lng: 126.570667 },
    errMsg: null,
    isLoading: true,
  })

  useEffect(() => {
    const geocoder = new kakao.maps.services.Geocoder()
    const callback = (result, status) => {
      if (status === kakao.maps.services.Status.OK) {
        const newSearch = result[0]
        setLocationState({
          center: {
            lat: parseFloat(newSearch.y),
            lng: parseFloat(newSearch.x),
          },
          isLoading: false,
        })
      } else {
        setLocationState(prev => ({
          ...prev,
          errMsg: '주소 변환에 실패했어요.',
          isLoading: false,
        }))
      }
    }
    geocoder.addressSearch(location, callback)
  }, [location])

  return locationState
}

export default useGeocoding
