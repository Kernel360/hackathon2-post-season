import * as S from './ClubSection.styled'

const CLUB_INFO = [
  { title: '잠실 구장(서울)', link: 'jamsil' },
  { title: '사직 구장(부산)', link: 'busan' },
  { title: '라이온즈파크(대구)', link: 'daegu' },
  { title: '이글스파크(대전)', link: 'daejaen' },
  { title: '챔피언스필드(광주)', link: 'ghwangju' },
  { title: '랜더스필드(인천)', link: 'incheon' },
  { title: 'NC파크(창원)', link: 'changwon' },
  { title: '고척 스카이돔(서울)', link: 'gochuck' },
]

function ClubSection() {
  return (
    <S.Container>
      {CLUB_INFO.map(club => (
        <a href={`stadium/${club.link}`}>
          <S.Item key={club.title}>
            <div>{club.title}</div>
          </S.Item>
        </a>
      ))}
    </S.Container>
  )
}

export default ClubSection
