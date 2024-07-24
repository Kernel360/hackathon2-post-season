import * as S from './RestarurantCard.styled'

function RestarurantCard() {
  return (
    <S.Card>
      <S.CardImg src="https://placehold.co/300x250" />
      <S.CardDescription>
        <S.CardDescriptionTitle>보영만두</S.CardDescriptionTitle>
        <S.CardDescriptionSubTitle>보영만두</S.CardDescriptionSubTitle>
        <S.CardFlex>
          <S.CardDescriptionLocation>3루 외야</S.CardDescriptionLocation>
          <S.CardDescriptionMenu>대표 메뉴: A세트</S.CardDescriptionMenu>
        </S.CardFlex>
      </S.CardDescription>
    </S.Card>
  )
}

export default RestarurantCard
