import * as S from './ClubSection.styled'
import ClubWeather from './ClubWeather'

const CLUB_INFO = [
  { title: '잠실 구장(서울)', link: 'jamsil', lat: '37', lon: '37' },
  { title: '사직 구장(부산)', link: 'busan', lat: '35', lon: '129' },
  { title: '라이온즈파크(대구)', link: 'daegu', lat: '35', lon: '128' },
  { title: '이글스파크(대전)', link: 'daejeon', lat: '36', lon: '127' },
  { title: '챔피언스필드(광주)', link: 'gwangju', lat: '35', lon: '126' },
  { title: '랜더스필드(인천)', link: 'incheon', lat: '37', lon: '126' },
  { title: 'NC파크(창원)', link: 'changwon', lat: '35', lon: '128' },
  { title: '고척 스카이돔(서울)', link: 'gocheok', lat: '37', lon: '126' },
]

function ClubSection() {
  return (
    <S.Container>
      {CLUB_INFO.map(club => (
        <S.Link key={club.link} href={`stadium/${club.link}`}>
          <S.Item>
            <ClubWeather club={club} />
            <div>{club.title}</div>
          </S.Item>
        </S.Link>
      ))}
    </S.Container>
  )
}

export default ClubSection
