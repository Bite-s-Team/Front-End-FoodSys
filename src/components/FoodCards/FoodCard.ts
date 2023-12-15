import { FoodCardContainer } from "./FoodCardContainer"
import { FoodCardContainerShadow } from "./FoodCardContainerShadow"
import { FoodCardDetailsContainer } from "./FoodCardDeailsContainer"
import { FoodCardPrice } from "./FoodCardPrice"
import { FoodCardTitle } from "./FoodCardTitle"
import { FoodCardsContainer } from "./FoodCardsContainer"
import { FoodCardImageContainer } from "./FoorCardImageContainer"

export const FoodCard = {
  root: FoodCardsContainer,
  container: FoodCardContainer,
  shadow: FoodCardContainerShadow,
  title: FoodCardTitle,
  price: FoodCardPrice,
  imageContainer: FoodCardImageContainer,
  details: FoodCardDetailsContainer,
}
