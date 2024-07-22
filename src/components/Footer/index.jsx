import * as S from './Footer.styled'

const Info = [
  {
    title: 'About',
    items: ['How it works', 'Featured', 'Partnership', 'Bussiness Relation'],
  },
  {
    title: 'Community',
    items: ['Events', 'Blog', 'Podcast', 'Invite a friend'],
  },
  {
    title: 'Socials',
    items: ['Discord', 'Instagram', 'Twitter', 'Facebook'],
  },
]

function Footer() {
  return (
    <S.Container>
      <S.SiteContainer>
        <S.TitleSection>
          <S.Title>KernelRent</S.Title>
          <S.SubTitle>
            Our vision is to provide convenience <br />
            and help increase your sales business.
          </S.SubTitle>
        </S.TitleSection>
        <S.InfoSection>
          {Info.map(info => (
            <S.Info key={info.title}>
              <S.InfoTitle>{info.title}</S.InfoTitle>
              <S.InfoValueSection>
                {info.items.map(item => (
                  <a href="/" key={item}>
                    <S.InfoValue>{item}</S.InfoValue>
                  </a>
                ))}
              </S.InfoValueSection>
            </S.Info>
          ))}
        </S.InfoSection>
      </S.SiteContainer>
      <S.Div />
      <S.PolicyContainer>
        <S.Source>©2024 KernelRent. All rights reserved</S.Source>
        <S.PolicySection>
          <S.Policy>Privacy Policy</S.Policy>
          <S.Policy>Terms of Service</S.Policy>
        </S.PolicySection>
      </S.PolicyContainer>
    </S.Container>
  )
}

export default Footer
