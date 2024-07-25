import { useState, useEffect } from 'react'

function useSearchPlacesForLocation(addresses) {
  const [coordinates, setCoordinates] = useState([])

  useEffect(() => {
    const { kakao } = window
    const geocoder = new kakao.maps.services.Geocoder()

    const fetchCoordinates = async () => {
      // 주소 리스트가 비어있으면 함수를 종료합니다.
      if (addresses.length === 0) {
        setCoordinates([])
        return
      }

      // 주소 리스트를 순회하면서 좌표를 비동기적으로 가져오는 함수입니다.
      const promises = addresses.map(address => {
        return new Promise(resolve => {
          geocoder.addressSearch(address.LNMADR, (result, status) => {
            if (status === kakao.maps.services.Status.OK) {
              resolve({
                address,
                lat: result[0].y,
                lng: result[0].x,
              })
            } else {
              resolve(null) // 실패하더라도 전체 프로세스를 중단하지 않도록 합니다.
            }
          })
        })
      })

      // 모든 프로미스가 완료되면 결과를 배열로 수집합니다.
      const results = await Promise.all(promises)
      setCoordinates(results.filter(res => res !== null)) // null 값을 필터링합니다.
    }

    fetchCoordinates()
  }, [addresses])

  return coordinates
}

export default useSearchPlacesForLocation
