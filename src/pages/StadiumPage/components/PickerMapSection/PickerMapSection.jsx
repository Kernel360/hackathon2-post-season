import { Map, MapMarker } from 'react-kakao-maps-sdk'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import * as S from './PickerMapSection.styled'
import { getStadiumLocation } from '../../../../utils/getStadiumLocation'

const { kakao } = window

function PickerMapSection() {
  const params = useParams()

  const [locationState, setLocationState] = useState({
    center: {
      lat: 33.450701,
      lng: 126.570667,
    },
    errMsg: null,
    isLoading: true,
  })

  useEffect(() => {
    const geocoder = new kakao.maps.services.Geocoder()

    const callback = function (result, status) {
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

    geocoder.addressSearch(getStadiumLocation(params.stadiumName), callback)
  }, [])

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
          }}
        />
      </Map>
    </S.Container>
  )
}

export default PickerMapSection
