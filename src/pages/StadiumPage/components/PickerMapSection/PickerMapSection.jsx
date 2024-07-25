import { Map, MapMarker } from 'react-kakao-maps-sdk'
// import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import * as S from './PickerMapSection.styled'
import { getStadiumLocation } from '../../../../utils/getStadiumLocation'

import useGeocoding from '../../hooks/useGeocoding'

// import useSearchPlacesForLocation from '../../hooks/useSearchPlacesForLocation'

// import useGetParkInfo from '../../../../hooks/apis/useGetParkInfo'
import useGetBusStationInfo from '@/hooks/apis/useGetBusStationInfo'

function PickerMapSection() {
  const params = useParams()

  const stadiumLocation = getStadiumLocation(params.stadiumName)

  const locationState = useGeocoding(stadiumLocation.location)

  // const [parkInfo, setParkInfo] = useState([])
  // const [markers, setMarkers] = useState([])
  const { loading: isLoading, busStationInfo } = useGetBusStationInfo(
    1,
    stadiumLocation.lat,
    stadiumLocation.lng
  ) // 얘는 야구장 주변 버스정류장 정보를 가져오는 API

  if (isLoading) {
    return <div>로딩중...</div>
  }
  console.log('busStationInfo', busStationInfo)

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await useGetParkInfo()
  //     if (JSON.stringify(data) !== JSON.stringify(parkInfo)) {
  //       // 상태가 이전과 다를 때만 업데이트
  //       setParkInfo(data)
  //     }
  //     // setParkInfo(data)
  //   }

  //   fetchData()
  // }, [parkInfo])

  // console.log('parkInfo', parkInfo)

  // const addresses = parkInfo.map(park => park.RDNMADR) // 도로명 주소만 추출

  // console.log('addresses', addresses)
  // addresses.map(address => {
  //   const sample = useSearchPlacesForLocation(address)
  //   setMarkers([...markers, ...sample])
  // })

  // const markers = useSearchPlacesForLocation(addresses)

  return (
    <S.Container>
      <Map
        center={locationState.center}
        style={{
          width: '100%',
          height: '600px',
          marginTop: '48px',
        }}
        level={3}
      >
        <MapMarker
          position={locationState.center}
          image={{
            src: 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png',
            size: {
              width: 50,
              height: 50,
            },
            // options: {
            //   offset: { x: 27, y: 69 },
            // },
          }}
        />
        {/* {markers.map(marker => (
          <MapMarker
            key={marker.address}
            position={{ lat: marker.lat, lng: marker.lng }}
            image={{
              src: 'https://cdn-icons-png.flaticon.com/128/2098/2098567.png',
              size: { width: 35, height: 35 },
            }}
          />
        ))} */}

        {/* {markers.map(marker => (
          <MapMarker
            key={marker.address}
            position={{ lat: marker.lat, lng: marker.lng }}
            // onClick={() => setOpenMarkerInfo(marker)}
            image={{
              src: 'https://cdn-icons-png.flaticon.com/128/2098/2098567.png',
              size: { width: 35, height: 35 },
            }}
          >
            {openMarkerInfo && openMarkerInfo.address === marker.address && (
              <div style={{ padding: '5px', color: '#000' }}>
                {marker.address}
              </div>
            )}
          </MapMarker>
        ))} */}
      </Map>
    </S.Container>
  )
}

export default PickerMapSection
