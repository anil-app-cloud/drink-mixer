import {Link} from 'react-router-dom'
import {useContext} from 'react'
import {
  MainNavbar,
  LinkItem,
  NavItems,
  SearchInput,
  SearchInputForm,
  Applogo,
} from './styledComponents'
import SearchbarContext from '../../context/SearchbarContext'
import './index.css'

const Navbar = () => {
  const {getSearchInput} = useContext(SearchbarContext)
  const setInput = e => {
    getSearchInput(e.target.value)
  }

  const formSubmited = e => {
    e.preventDefault()
    console.log('form submited')
  }

  return (
    <MainNavbar>
      <Link to="/"><Applogo>Drink Mixer</Applogo></Link>
      <SearchInputForm onSubmit={formSubmited}>
        <SearchInput
          type="text"
          placeholder="Enter your drink"
          onChange={setInput}
        />
      </SearchInputForm>

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
