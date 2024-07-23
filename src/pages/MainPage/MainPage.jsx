import React, { useState, useEffect } from 'react'
import { Map, MapMarker } from 'react-kakao-maps-sdk'
import * as S from './MainPage.styled'
import ClubSection from './components/ClubSection'
import MainCarouselSection from './components/MainCarouselSection'

function MainPage() {
  // const appkey = import.meta.env.VITE_KAKAO_API_KEY
  // const scriptTag = document.createElement('script')
  // scriptTag.type = 'text/javascript'
  // scriptTag.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${appkey}`
  // document.head.appendChild(scriptTag)

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
      <MainCarouselSection />
      <ClubSection />
      <Map
        center={state.center}
        style={{
          width: '100%',
          height: 'calc(100vh - 109px)',
          marginTop: '48px',
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

export default MainPage
