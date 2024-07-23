export const getStadiumLocation = stadiumName => {
  switch (stadiumName) {
    case 'daejeon':
      return {
        location: '대전광역시 중구 대종로 373',
        lat: 36.3253,
        lng: 127.4238,
      }
    case 'jamsil':
      return {
        location: '서울특별시 송파구 올림픽로 25',
        lat: 37.5156,
        lng: 127.0724,
      }
    case 'busan':
      return {
        location: '부산광역시 동래구 사직로 45',
        lat: 35.1944,
        lng: 129.0597,
      }
    case 'gwangju':
      return {
        location: '광주광역시 북구 서림로 10',
        lat: 35.1858,
        lng: 126.8523,
      }
    case 'daegu':
      return {
        location: '대구광역시 수성구 야구전설로 1',
        lat: 35.8324,
        lng: 128.6811,
      }
    case 'incheon':
      return {
        location: '인천광역시 미추홀구 매소홀로 618',
        lat: 37.4363,
        lng: 126.693,
      }
    case 'changwon':
      return {
        location: '경상남도 창원시 마산회원구 삼호로 63',
        lat: 35.2193,
        lng: 128.5833,
      }
    case 'gocheok':
      return {
        location: '서울특별시 구로구 경인로 430',
        lat: 37.4982,
        lng: 126.8679,
      }
    default:
      return null
  }
}
