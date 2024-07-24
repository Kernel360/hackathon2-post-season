import { Map, MapMarker } from 'react-kakao-maps-sdk'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import * as S from './PickerMapSection.styled'
import { getStadiumLocation } from '../../../../utils/getStadiumLocation'

import useGeocoding from '../../hooks/useGeocoding'

import useSearchPlacesForLocation from '../../hooks/useSearchPlacesForLocation'

import useGetParkInfo from '../../../../hooks/apis/useGetParkInfo'

function PickerMapSection() {
  const params = useParams()

  const stadiumLocation = getStadiumLocation(params.stadiumName).location

  // const [openMarkerInfo, setOpenMarkerInfo] = useState(null)

  const locationState = useGeocoding(stadiumLocation)

  // console.log('openMarkerInfo', openMarkerInfo)

  const [parkInfo, setParkInfo] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const data = await useGetParkInfo()
      setParkInfo(data)
      setLoading(false)
    }

    fetchData()
  }, [])

  console.log('parkInfo', parkInfo)

  const addresses = parkInfo.map(park => park.RDNMADR)

  console.log('addresses', addresses) // 주소 리스트

  addresses.map(address => console.log(address))
  const markers = useSearchPlacesForLocation(addresses)

  if (loading) {
    return <div>Loading...</div>
  }

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
        {markers.map(marker => (
          <MapMarker
            key={marker.address}
            position={{ lat: marker.lat, lng: marker.lng }}
            image={{
              src: 'https://cdn-icons-png.flaticon.com/128/2098/2098567.png',
              size: { width: 35, height: 35 },
            }}
          />
        ))}

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
