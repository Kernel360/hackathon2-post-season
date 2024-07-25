import { Map, MapMarker } from 'react-kakao-maps-sdk'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import * as S from './PickerMapSection.styled'
import { getStadiumLocation } from '../../../../utils/getStadiumLocation'
import { KEYWORD_LIST } from '../../../../utils/constants/mapKeywordList'
import useGeocoding from '../../hooks/useGeocoding'
import useSearchPlaces from '../../hooks/useSearchPlaces'

function PickerMapSection() {
  const params = useParams()
  const stadiumLocation = getStadiumLocation(params.stadiumName).location

  const [openMarkerInfo, setOpenMarkerInfo] = useState(null)

  const locationState = useGeocoding(stadiumLocation)
  const { search, searchPlaces } = useSearchPlaces(locationState.center)

  console.log('openMarkerInfo', openMarkerInfo)

  return (
    <S.Container>
      <S.CategoryButtonSection>
        {KEYWORD_LIST.map(keyword => (
          <S.Button
            key={keyword.id}
            onClick={() => searchPlaces(keyword.value)}
          >
            {keyword.emoji + keyword.value}
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
            // options: {
            //   offset: { x: 27, y: 69 },
            // },
          }}
        />
        {search.map(data => (
          <MapMarker
            key={data.id}
            onClick={() => setOpenMarkerInfo(data)}
            position={{ lat: data.y, lng: data.x }}
            image={{
              src: 'https://cdn-icons-png.flaticon.com/128/2098/2098567.png',
              size: {
                width: 35,
                height: 35,
              },
            }}
          />
        ))}
      </Map>
    </S.Container>
  )
}

export default PickerMapSection
