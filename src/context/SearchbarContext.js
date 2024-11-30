import React, {useState} from 'react'

const SearchbarContext = React.createContext()

export const SearchbarProvider = ({children}) => {
  const [searchInput, setSearchInput] = useState('')
  const [allDrinks, setAllDrinks] = useState([])
  const [drinkItem, setDrinkItem] = useState(() => {
    const storedDrink = localStorage.getItem('drinkItem')
    return storedDrink ? JSON.parse(storedDrink) : null
  })

  const getDrinkItem = value => {
    setDrinkItem(value)
    localStorage.setItem('drinkItem', JSON.stringify(value))
  }

  const setAllDrinksTovalue = value => {
    setAllDrinks(value)
  }

  const getSearchInput = value => {
    setSearchInput(value)
  }

  return (
    <SearchbarContext.Provider
      value={{
        searchInput,
        allDrinks,
        getSearchInput,
        setAllDrinksTovalue,
        drinkItem,
        getDrinkItem,
      }}
    >
      {children}
    </SearchbarContext.Provider>
  )
}

export default SearchbarContext
