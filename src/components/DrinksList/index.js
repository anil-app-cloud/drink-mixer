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
  const {getDrinkItem, darkTheme} = useContext(SearchbarContext)

  const setToDrinkDetails = () => {
    getDrinkItem(drink)
  }
  return (
    <ListItem darktheme={darkTheme}>
      <DirnkPic src={drink.strDrinkThumb} />
      <DrinkDetailsCard darkTheme={darkTheme}>
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
