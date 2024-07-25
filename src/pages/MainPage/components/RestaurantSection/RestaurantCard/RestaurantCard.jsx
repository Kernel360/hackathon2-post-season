import * as S from './RestaurantCard.styled'

function RestarurantCard({ name, description, location, menu }) {
  return (
    <S.Card>
      <S.CardImg src="https://placehold.co/300x250" />
      <S.CardDescription>
        <S.CardDescriptionTitle>{name}</S.CardDescriptionTitle>
        <S.CardDescriptionSubTitle>{description}</S.CardDescriptionSubTitle>
        <S.CardFlex>
          <S.CardDescriptionLocation>{location}</S.CardDescriptionLocation>
          <S.CardDescriptionMenu>{menu}</S.CardDescriptionMenu>
        </S.CardFlex>
      </S.CardDescription>
    </S.Card>
  )
}

export default RestarurantCard
