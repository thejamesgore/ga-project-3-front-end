import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from './pages/Home'
import Navbar from "./components/Navbar";

import CountriesIndex from "./pages/CountriesIndex.js";

import Login from "./pages/Login.js";
import Register from "./pages/Register.js";

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/countries" component={CountriesIndex} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
    </Switch>
  </BrowserRouter>
);

export default App;
