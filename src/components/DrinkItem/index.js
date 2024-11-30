import {useContext} from 'react'
import {
  CardDeatilsBg,
  DirnkPic,
  DrinkDetailsCard,
  DrinkDescription,
  Strongtext,
} from './styledComponents'
import SearchbarContext from '../../context/SearchbarContext'

const DrinkItem = () => {
  const {drinkItem} = useContext(SearchbarContext)
  console.log(drinkItem, 'drink')
  return (
    <CardDeatilsBg>
      <DirnkPic src={drinkItem.strDrinkThumb} />
      <DrinkDetailsCard>
        <h1>{drinkItem.strDrink}</h1>
        <p>
          <Strongtext>Type: </Strongtext>
          {drinkItem.strAlcoholic}
        </p>
        <DrinkDescription>
          <Strongtext>How to drink: </Strongtext>
          {drinkItem.strInstructionsIT}
        </DrinkDescription>
        <Strongtext>Ingredients: </Strongtext>
        {drinkItem.strIngredient1 && <p>{drinkItem.strIngredient1}</p>}
        {drinkItem.strIngredient2 && <p>{drinkItem.strIngredient2}</p>}
        {drinkItem.strIngredient3 && <p>{drinkItem.strIngredient3}</p>}
        <Strongtext>Drink Mixers: </Strongtext>
        {drinkItem.strMeasure1 && <p>{drinkItem.strMeasure1}</p>}
        {drinkItem.strMeasure2 && <p>{drinkItem.strMeasure2}</p>}
        {drinkItem.strMeasure3 && <p>{drinkItem.strMeasure3}</p>}
        <Strongtext>How to Mix: </Strongtext>
        {drinkItem.strInstructions && <p>{drinkItem.strInstructions}</p>}
      </DrinkDetailsCard>
    </CardDeatilsBg>
  )
}

export default DrinkItem
