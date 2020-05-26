import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from './pages/homepage/Homepage.component.jsx'
import { HeaderComponent } from './components/Header.component'

function App() {
  return (
    <div>
      <HeaderComponent />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
  )
}

export default App
