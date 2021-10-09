import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AllCountries from "./All Countries";
import Home from "./Home";
import Navbar from "./Navbar";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/Countries" component={AllCountries} />
    </Switch>
  </BrowserRouter>
);

export default App;
