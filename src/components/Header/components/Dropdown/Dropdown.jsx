import * as S from './Dropdown.styled'

const CLUB = [
  { title: '잠실 구장(서울)', link: '/jamsil' },
  { title: '사직 구장(부산)', link: '/busan' },
  { title: '라이온즈파크(대구)', link: '/daegu' },
  { title: '이글스파크(대전)', link: '/daejeon' },
  { title: '챔피언스필드(광주)', link: '/gwangju' },
  { title: '랜더스필드(인천)', link: '/incheon' },
  { title: 'NC파크(창원)', link: '/changwon' },
  { title: '고척 스카이돔(서울)', link: '/gocheok' },
]
function Dropdown() {
  return (
    <S.Container>
      <S.SiteContainer>
        {CLUB.map(club => (
          <S.Item key={club.title}>
            <S.TitleSection>
              <S.Title>{club.title}</S.Title>
            </S.TitleSection>
          </S.Item>
        ))}
      </S.SiteContainer>
    </S.Container>
  )
}

export default Dropdown
