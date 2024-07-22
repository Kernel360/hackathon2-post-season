import * as S from './Footer.styled'

function Footer() {
  return (
    <S.Container>
      <S.SiteContainer>
        <S.TitleSection>
          <S.Title>Post Season</S.Title>
          <S.SubTitle>
            Slump?
            <br />
            That&apos;s only for a batter who hits .300
          </S.SubTitle>
        </S.TitleSection>
      </S.SiteContainer>
      <S.Div />
      <S.PolicyContainer>
        <S.Source>©2024 Post Season. All rights reserved</S.Source>
      </S.PolicyContainer>
    </S.Container>
  )
}

export default Footer
