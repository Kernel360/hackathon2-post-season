import * as S from './ClubSection.styled'
import lionspark from '@/assets/jpg/imgLionspark.jpeg'
import sajik from '@/assets/jpg/imgSajikst.jpg'
import jamsil from '@/assets/jpg/imgJamsilst.jpg'
import ClubWeather from '@/pages/MainPage/components/ClubSection/ClubWeather.jsx'
// import useDispatch from '@/react-redux/hooks/useDispatch'

const CLUB_INFO = [
  {
    title: '잠실 구장(서울)',
    link: 'jamsil',
    lat: '37',
    lon: '37',
    img: jamsil,
  },
  {
    title: '사직 구장(부산)',
    link: 'busan',
    lat: '35',
    lon: '129',
    img: sajik,
  },
  {
    title: '라이온즈파크(대구)',
    link: 'daegu',
    lat: '35',
    lon: '128',
    img: lionspark,
  },
  {
    title: '이글스파크(대전)',
    link: 'daejeon',
    lat: '36',
    lon: '127',
    img: 'http://tong.visitkorea.or.kr/cms/resource/89/2767189_image2_1.jpg',
  },
  {
    title: '챔피언스필드(광주)',
    link: 'gwangju',
    lat: '35',
    lon: '126',
    img: 'https://i.namu.wiki/i/nE0HQ1tuLWpZBO0YVGGOVjpLhT052kI9lY1ybUas-IeJs_MoHsCRxkVEmTng3oZsOuYnC9sFw6oGq8oQ2yGxtVablfiDnCEonGqpAh_R8-EiSRpndHDMw5VUBE-gdAQvKlv7xBxNqqW04G2aanFXJA.webp',
  },
  {
    title: '랜더스필드(인천)',
    link: 'incheon',
    lat: '37',
    lon: '126',
    img: 'https://i.namu.wiki/i/1QTTeLUbMXAKgvvp63qo4OYSwJM-lIZTQ-osvRWmWq1ijrspJenYhLni0i6jaDFZdfC2h6TEoEFqrNWuvl92rQyPmH3uRGIxRW5rDH9FT5BAjrDh-2_VzU2H8THZVAqXf-HK0KYoa6BeS5VTw0ndfw.webp',
  },
  {
    title: 'NC파크(창원)',
    link: 'changwon',
    lat: '35',
    lon: '128',
    img: 'http://m.haeahn.com/upload/prjctmain/20190703134332395338.jpg',
  },
  {
    title: '고척 스카이돔(서울)',
    link: 'gocheok',
    lat: '37',
    lon: '126',
    img: 'https://images.chosun.com/resizer/6r-X2wYys2ANnHNMcxKU5jo4Ehg=/961x641/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/NAPZPLZHHES4FYI5OSSAGTKGCY.jpg',
  },
]

function ClubSection() {
  // const dispatch = useDispatch()
  return (
    <S.Container>
      {CLUB_INFO.map(club => (
        <S.Link
          key={club.link}
          href={`stadium/${club.link}`}
          // onClick={() =>
          //   dispatch(setStadiumActionCreator({ stadium: club.link }))
          // }
        >
          <S.Item>
            <ClubWeather club={club} />
            <S.ImgStadium src={club.img} />
            <S.TitleWrapper>{club.title}</S.TitleWrapper>
          </S.Item>
        </S.Link>
      ))}
    </S.Container>
  )
}

export default ClubSection
