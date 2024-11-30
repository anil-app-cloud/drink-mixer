import {useState, useEffect, useContext} from 'react'
import DrinksList from '../DrinksList'
import SearchbarContext from '../../context/SearchbarContext'
import {HomeBg} from './styledComponents'

const Home = () => {
  const {allDrinks, searchInput, setAllDrinksTovalue, getSearchInput} =
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
    <HomeBg>
      {allDrinks.map(eachOne => (
        <DrinksList key={eachOne.idDrink} drink={eachOne} />
      ))}
    </HomeBg>
  )
}

export default Home
