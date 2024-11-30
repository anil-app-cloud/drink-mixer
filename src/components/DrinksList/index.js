import {Link} from 'react-router-dom'
import {useContext} from 'react'
import {
  ListItem,
  DirnkPic,
  DrinkDetailsCard,
  DrinkDescription,
  DetailsButton,
  Strongtext,
} from './styledComponents'
import SearchbarContext from '../../context/SearchbarContext'

const DrinksList = props => {
  const {drink} = props
  const {getDrinkItem, drinkItem} = useContext(SearchbarContext)

  const setToDrinkDetails = () => {
    getDrinkItem(drink)
  }
  return (
    <ListItem>
      <DirnkPic src={drink.strDrinkThumb} />
      <DrinkDetailsCard>
        <h1>{drink.strDrink}</h1>
        <p>
          <Strongtext>Type: </Strongtext>
          {drink.strAlcoholic}
        </p>
        <DrinkDescription>
          <Strongtext>How to drink: </Strongtext>
          {drink.strInstructionsIT}
        </DrinkDescription>
        <Link to={`/drink/${drink.idDrink}`}>
          <DetailsButton onClick={setToDrinkDetails}>See Details</DetailsButton>
        </Link>
      </DrinkDetailsCard>
    </ListItem>
  )
}

export default DrinksList
