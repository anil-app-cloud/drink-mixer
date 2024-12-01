import {useContext} from 'react'
import { Oval } from 'react-loader-spinner'
import {
  CardDeatilsBg,
  DirnkPic,
  DrinkDetailsCard,
  DrinkDescription,
  Strongtext,
} from './styledComponents'
import SearchbarContext from '../../context/SearchbarContext'

const DrinkItem = () => {
  const {drinkItem, darkTheme} = useContext(SearchbarContext)
  console.log(drinkItem, 'drink')
  if (!drinkItem) {
    return <Oval
      height={80}
      width={80}
      color="blue"
      ariaLabel="circular-loading"
      secondaryColor="lightgreen"
      strokeWidth={2}
      strokeWidthSecondary={2}
      
    />  
  }
  return (
    <CardDeatilsBg darkTheme={darkTheme}>
      <DirnkPic src={drinkItem.strDrinkThumb} />
      <DrinkDetailsCard darkTheme={darkTheme}>
        <h1>{drinkItem.strDrink}</h1>
        <p>
          <Strongtext>Type: </Strongtext>
          {drinkItem.strAlcoholic}
        </p>
        <DrinkDescription darkTheme={darkTheme}>
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
