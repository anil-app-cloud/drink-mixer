import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {useContext} from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import DrinkItem from './components/DrinkItem'
import SearchbarContext from './context/SearchbarContext'
import './App.css'

const App = () => {
  const {drinkItem} = useContext(SearchbarContext)
  console.log(drinkItem, 'drinkosh')
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/drink/:id" element={<DrinkItem/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
