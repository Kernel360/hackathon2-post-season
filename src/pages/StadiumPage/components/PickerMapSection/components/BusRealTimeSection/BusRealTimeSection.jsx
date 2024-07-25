import * as S from './BusRealTimeSection.styled'
import useGetBusRealTimeInfo from '@/hooks/apis/useGetBusRealTimeInfo'

function BusRealTimeSection({ markerInfoForBus }) {
  const { loading, busRealTimeInfo } = useGetBusRealTimeInfo(
    markerInfoForBus?.citycode,
    markerInfoForBus?.nodeid
  )

  if (loading) {
    return <div>로딩중...</div>
  }

  return (
    <S.StateSection>
      {busRealTimeInfo && busRealTimeInfo.length > 0 ? (
        <>
          <S.StationName>{busRealTimeInfo[0].nodenm}</S.StationName>
          <S.BusInfoSection>
            {busRealTimeInfo.map(busInfo => (
              <S.BusInfoCard key={busInfo.nodeid}>
                <S.BusInfoUnit>
                  <S.BusInfoTitle>버스 번호:</S.BusInfoTitle>
                  <S.BusRouteNo>{busInfo.routeno}</S.BusRouteNo>
                </S.BusInfoUnit>
                <S.BusInfoUnit>
                  <S.BusInfoTitle>버스 타입:</S.BusInfoTitle>
                  <S.BusRouteNo>{busInfo.routetp}</S.BusRouteNo>
                </S.BusInfoUnit>
                <S.BusInfoUnit>
                  <S.BusInfoTitle>남은 정류장 수:</S.BusInfoTitle>
                  <S.BusRouteNo>{busInfo.arrprevstationcnt}</S.BusRouteNo>
                </S.BusInfoUnit>
                <S.BusInfoUnit>
                  <S.BusInfoTitle>도착 예정 시간(초):</S.BusInfoTitle>
                  {/* // 초로 뜨는건 변환 필요 */}
                  <S.BusRouteNo>{busInfo.arrtime}</S.BusRouteNo>
                </S.BusInfoUnit>
              </S.BusInfoCard>
            ))}
          </S.BusInfoSection>
        </>
      ) : (
        <div>현재 버스 도착 정보가 없습니다.</div>
      )}
    </S.StateSection>
  )
}

export default BusRealTimeSection
