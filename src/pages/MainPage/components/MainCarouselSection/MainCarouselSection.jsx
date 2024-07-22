import React from 'react'
import Slider from 'react-slick'
import * as S from './MainCarouselSection.styled'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import hanwha from '@/assets/png/hanwhaEagles.png'
import kia from '@/assets/png/kia.png'

const CLUB = [
  {
    img: hanwha,
    link: 'https://www.hanwhaeagles.co.kr/index.do',
  },
  { img: kia, link: 'https://tigers.co.kr/' },
  { img: hanwha, link: 'https://www.hanwhaeagles.co.kr/index.do' },
  { img: hanwha, link: 'https://www.hanwhaeagles.co.kr/index.do' },
]

function MainCarouselSection() {
  return (
    <S.Container>
      <Slider
        dots
        infinite
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        autoplay // 자동 캐러셀
        autoplaySpeed={2000}
      >
        {CLUB.map(club => (
          <a href={club.link} key={club.img}>
            <S.ClubImg src={club.img} alt="hanwha" />
          </a>
        ))}
      </Slider>
    </S.Container>
  )
}

export default MainCarouselSection
