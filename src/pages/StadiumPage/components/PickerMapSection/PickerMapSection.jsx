import { Map, MapMarker } from 'react-kakao-maps-sdk'
import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

import * as S from './PickerMapSection.styled'
import { getStadiumLocation } from '../../../../utils/getStadiumLocation'

import useGeocoding from '../../hooks/useGeocoding'
import { KEYWORD_LIST } from '../../../../utils/constants/mapKeywordList'

// import useSearchPlacesForLocation from '../../hooks/useSearchPlacesForLocation'

// import useGetParkInfo from '../../../../hooks/apis/useGetParkInfo'
import useGetBusStationInfo from '@/hooks/apis/useGetBusStationInfo'
import useGetBusRealTimeInfo from '@/hooks/apis/useGetBusRealTimeInfo'
import BusRealTimeSection from './components/BusRealTimeSection'

function PickerMapSection() {
  const params = useParams()

  const [searchParams, setSearchParams] = useSearchParams()

  const [markerInfo, setMarkerInfo] = useState() // 마커가 클릭 되었을때 담기는 정보 state

  useEffect(() => {
    if (!searchParams.has('category')) {
      setSearchParams({ category: '' })
    }
  }, [searchParams, setSearchParams])

  const category = searchParams.get('category') || ''

  const stadiumLocation = getStadiumLocation(params.stadiumName)

  const locationState = useGeocoding(stadiumLocation.location)

  const { loading: isLoading, busStationInfo } = useGetBusStationInfo(
    1,
    stadiumLocation.lat,
    stadiumLocation.lng
  ) // 얘는 야구장 주변 버스정류장 정보를 가져오는 API
  // 이후 이 녀석의 lat, log을 가지고 마커를 찍고 마커를 찍었을때 sate에 담아서 해당 요소로 버스 실시간 정보 api를 불러와서 아래에 띄우자ㅣ

  const { loading: isLoading2, busRealTimeInfo } = useGetBusRealTimeInfo(
    markerInfo?.citycode,
    markerInfo?.nodeid
  ) // 얘는 버스정류장별 실시간 도착 정보를 가져오는 API

  if (isLoading) {
    return <div>로딩중...</div>
  }

  if (isLoading2) {
    return <div>로딩중...</div>
  }

  const handleCategoryClick = value => {
    setSearchParams({ category: value })
  }

  return (
    <S.Container>
      <S.CategoryButtonSection>
        {KEYWORD_LIST.map(keyword => (
          <S.Button
            key={keyword.value}
            onClick={() => handleCategoryClick(keyword.value)}
          >
            {keyword.emoji}
            {keyword.value}
          </S.Button>
        ))}
      </S.CategoryButtonSection>
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
          }}
        />
        {category === '버스정류장' && (
          <>
            {busStationInfo.map(busStation => (
              <MapMarker
                key={busStation.stationId}
                position={{
                  lat: busStation.gpslati,
                  lng: busStation.gpslong,
                }}
                image={{
                  src: 'https://cdn-icons-png.flaticon.com/128/2098/2098567.png',
                  size: { width: 35, height: 35 },
                }}
                onClick={() => setMarkerInfo(busStation)}
              />
            ))}
          </>
        )}
      </Map>
      {markerInfo && <BusRealTimeSection busRealTimeInfo={busRealTimeInfo} />}
    </S.Container>
  )
}

export default PickerMapSection

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

/* {markers.map(marker => (
          <MapMarker
            key={marker.address}
            position={{ lat: marker.lat, lng: marker.lng }}
            image={{
              src: 'https://cdn-icons-png.flaticon.com/128/2098/2098567.png',
              size: { width: 35, height: 35 },
            }}
          />
        ))} */

/* {markers.map(marker => (
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
        ))} */
