import data from '@/utils/constants/f&b.json'
import { useParams } from 'react-router-dom'
import RestaurantCard from './RestaurantCard/RestaurantCard'
import * as S from './RestaurantSection.styled'

function RestaurantSection() {
  const { stadiumName } = useParams()
  const stadiumData = data[stadiumName]

  return (
    <S.RSection>
      {stadiumData.restaurants.map((restaurant, index) => (
        <RestaurantCard
          key={index}
          name={restaurant.name}
          description={restaurant.description}
          location={restaurant.location}
          menu={restaurant.menu}
        />
      ))}
    </S.RSection>
  )
}

export default RestaurantSection
