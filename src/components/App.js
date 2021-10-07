import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={() => <p>Hello</p>} />
    </Switch>
  </BrowserRouter>
)

export default App
