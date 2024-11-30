import React from 'react'
import ReactDOM from 'react-dom'
import {SearchbarProvider} from './context/SearchbarContext'
import App from './App'

ReactDOM.render(
  <SearchbarProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </SearchbarProvider>,
  document.getElementById('root'),
)
