import {BrowserRouter, Switch, Route} from 'react-router-dom'
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
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path = "/about" component={About} />
        <Route exact path="/drink/:id" component={DrinkItem} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
