import { useEffect, useContext} from 'react'
import { Oval } from 'react-loader-spinner'
import DrinksList from '../DrinksList'
import SearchbarContext from '../../context/SearchbarContext'
import {HomeBg, MainBg} from './styledComponents'

const Home = () => {
  const {allDrinks, searchInput, setAllDrinksTovalue, getSearchInput, darkTheme} =
    useContext(SearchbarContext)

  console.log(searchInput, 'search')
  useEffect(() => {
    const fetchDrinks = async () => {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchInput}`,
        )
        const body = await response.json()
        if (body.drinks === 'no data found' || body.drinks === null) {
          getSearchInput('coffee')
          setAllDrinksTovalue([])
        } else {
          setAllDrinksTovalue(body.drinks)
        }
      } catch (error) {
        console.error('Error fetching drinks:', error)
      }
    }

    fetchDrinks()
  }, [searchInput])
  return (
    <MainBg>
      {!allDrinks || allDrinks.length === 0 ? (
        <Oval
          height={80}
          width={80}
          color="blue"
          ariaLabel="circular-loading"
          secondaryColor="lightgreen"
          strokeWidth={2}
          strokeWidthSecondary={2}
          
        />
      ) : (
        <HomeBg darkTheme={darkTheme}>
          {allDrinks.map(eachOne => (
            <DrinksList key={eachOne.idDrink} drink={eachOne} />
          ))}
        </HomeBg>
      )}
    </MainBg>
    
  )
}

export default Home
