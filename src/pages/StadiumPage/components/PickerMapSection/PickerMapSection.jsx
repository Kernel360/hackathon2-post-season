import { Map, MapMarker } from 'react-kakao-maps-sdk'
import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

import * as S from './PickerMapSection.styled'
import { getStadiumLocation } from '../../../../utils/getStadiumLocation'
import useGeocoding from '../../hooks/useGeocoding'
import { KEYWORD_LIST } from '../../../../utils/constants/mapKeywordList'
import useSearchPlacesForLocation from '../../hooks/useSearchPlacesForLocation' // 가져온 주차장 정보들을 좌표로 변환함. => 왜냐면 마커를 찍을때 위도 경도로 찍기 떄문.
import useGetParkInfo from '../../../../hooks/apis/useGetParkInfo' // 주차장 정보를 다 가져옴
import useGetBusStationInfo from '@/hooks/apis/useGetBusStationInfo'
import useGetBusRealTimeInfo from '@/hooks/apis/useGetBusRealTimeInfo'
import BusRealTimeSection from './components/BusRealTimeSection'

function PickerMapSection() {
  const params = useParams()

  const [naturalAddress, setNaturalAddress] = useState([]) // 주차장 주소를 담는 state

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
  )
  const { loading: isLoading2, busRealTimeInfo } = useGetBusRealTimeInfo(
    markerInfo?.citycode,
    markerInfo?.nodeid
  ) // 얘는 버스정류장별 실시간 도착 정보를 가져오는 API

  useEffect(() => {
    const fetchData = async () => {
      const data = await useGetParkInfo()
      setNaturalAddress(data)
    }

    fetchData()
  }, [])

  const markers = useSearchPlacesForLocation(naturalAddress) // 가져온 주차장 정보들을 좌표로 변환함. => 왜냐면 마커를 찍을때 위도 경도로 찍기 떄문.
  console.log('markers', markers)

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
          borderRadius: '15px',
          boxShadow: '1px 1px 10px lightgrey',
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

        {category === '주차장' &&
          markers.map(marker => (
            <MapMarker
              key={marker.address}
              position={{ lat: marker.lat, lng: marker.lng }}
              image={{
                src: 'https://cdn-icons-png.flaticon.com/128/2098/2098567.png',
                size: { width: 35, height: 35 },
              }}
            />
          ))}

        {category === '버스정류장' && busStationInfo.length > 0 && (
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
