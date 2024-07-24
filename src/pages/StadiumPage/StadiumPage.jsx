import { Map, MapMarker } from 'react-kakao-maps-sdk'
import React, { useState, useEffect } from 'react'
import * as S from './StadiumPage.styled'

function StadiumPage() {
  const [state, setState] = useState({
    center: {
      lat: 33.450701,
      lng: 126.570667,
    },
    errMsg: null,
    isLoading: true,
  })

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          setState(prev => ({
            ...prev,
            center: {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            },
            isLoading: false,
          }))
        },
        err => {
          setState(prev => ({
            ...prev,
            errMsg: err.message,
            isLoading: false,
          }))
        }
      )
    } else {
      setState(prev => ({
        ...prev,
        errMsg: 'geolocation을 사용할수 없어요..',
        isLoading: false,
      }))
    }
  }, [])

  return (
    <S.Container>
      <S.WeatherArea>
        <span>날씨 위젯</span>
      </S.WeatherArea>
      <Map
        center={state.center}
        style={{
          width: '80%',
          height: '600px',
          marginTop: '10px',
        }}
        level={3}
      >
        <MapMarker
          position={state.center}
          image={{
            src: 'https://cdn-icons-png.flaticon.com/128/7124/7124723.png',
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

export default StadiumPage
