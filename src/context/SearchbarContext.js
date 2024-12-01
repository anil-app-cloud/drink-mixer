import React, {useState} from 'react'

const SearchbarContext = React.createContext()

export const SearchbarProvider = ({children}) => {
  const [searchInput, setSearchInput] = useState('')
  const [allDrinks, setAllDrinks] = useState([])
  const [drinkItem, setDrinkItem] = useState(() => {
    const storedDrink = localStorage.getItem('drinkItem')
    return storedDrink ? JSON.parse(storedDrink) : null
  })

  const [darkTheme, setDarkTheme] = useState(() => {
    const darkThemeFromLocalStroge = localStorage.getItem('darkTheme')
    return darkThemeFromLocalStroge ? JSON.parse(darkThemeFromLocalStroge): false
  })

  const getDarkTheme = () => {
    setDarkTheme(prev => {
      localStorage.setItem('darkTheme', JSON.stringify(!prev))
      return !prev
    })
    
  }

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
        getDarkTheme,
        darkTheme,
        drinkItem,
        getDrinkItem,
      }}
    >
      {children}
    </SearchbarContext.Provider>
  )
}

export default SearchbarContext
