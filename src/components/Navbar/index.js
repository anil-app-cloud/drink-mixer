import {Link} from 'react-router-dom'
import {useContext} from 'react'
import {
  MainNavbar,
  LinkItem,
  NavItems,
  SearchInput,
  SearchInputForm,
  Applogo,
  ThemeLogo,
  ThemeButton,
} from './styledComponents'
import SearchbarContext from '../../context/SearchbarContext'


const Navbar = () => {
  const {getSearchInput, getDarkTheme, darkTheme} = useContext(SearchbarContext)
  const setInput = e => {
    getSearchInput(e.target.value)
  }

  const formSubmited = e => {
    e.preventDefault()
    console.log('form submited')
  }
  const onToggleTheme = () => {
    getDarkTheme()
  }
  console.log(darkTheme, "theme")
  return (
    <MainNavbar>
      <Link to="/">
        <Applogo>Drink Mixer</Applogo>
      </Link>
      <SearchInputForm onSubmit={formSubmited}>
        <SearchInput
          type="text"
          placeholder="Enter your drink"
          onChange={setInput}
        />
      </SearchInputForm>
      <ThemeButton onClick={onToggleTheme}><ThemeLogo src={darkTheme ?"https://cdn0.iconfinder.com/data/icons/multimedia-line-30px/30/sun_light_mode_day-512.png":"https://cdn.iconscout.com/icon/premium/png-256-thumb/dark-2734591-2279374.png?f=webp&w=128"} alt="theme"/></ThemeButton>
      <NavItems>
        
        <Link to="/">
          <LinkItem>Home</LinkItem>
        </Link>
        <Link to="/about">
          <LinkItem>About</LinkItem>
        </Link>
      </NavItems>
    </MainNavbar>
  )
}

export default Navbar
