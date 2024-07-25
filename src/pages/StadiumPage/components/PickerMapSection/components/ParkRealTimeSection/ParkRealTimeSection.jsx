import * as S from './ParkRealTimeSection.styled'
import useGetParkInfo from '@/hooks/apis/useGetParkInfo.js'

function ParkRealTimeSection({ markerInfoForPark }) {
  console.log('markerInfoForPark', markerInfoForPark) // 예시를 위한 console입니다. 작업 마치신 후 지워주세요

  const name = markerInfoForPark.address.PRKPLCENM
  const location = markerInfoForPark.address.LNMADR
  const openDay = markerInfoForPark.address.OPERDAY
  const openTimeDefault = markerInfoForPark.address.WEEKDAYOPEROPENHHMM
  const closeTimeDefault = markerInfoForPark.address.WEEKDAYOPERCOLSEHHMM.slice(
    0,
    -3
  )
  const openTimeSat = markerInfoForPark.address.SATOPEROPEROPENHHMM
  const closeTimeSat = markerInfoForPark.address.SATOPERCLOSEHHMM
  const openTimeHolliday = markerInfoForPark.address.HOLIDAYOPEROPENHHMM
  const closeTimeHolliday = markerInfoForPark.address.HOLIDAYCLOSEOPENHHMM

  return (
    <S.StateSection>
      <S.Name>{name} 주차장</S.Name>
      <S.Location>{location}</S.Location>
      <S.InfoContainer>
        <S.Info>개장일 : {openDay}</S.Info>
        <S.Info>
          개장시간(평일) : {`${openTimeDefault} ~ ${closeTimeDefault}`}
        </S.Info>
        <S.Info>개장시간(토요일) : {`${openTimeSat} ~ ${closeTimeSat}`}</S.Info>
        <S.Info>
          개장시간(공휴일) : {`${openTimeHolliday} ~ ${closeTimeHolliday}`}
        </S.Info>
      </S.InfoContainer>
    </S.StateSection>
  )
}

export default ParkRealTimeSection
