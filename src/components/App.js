import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";

import Navbar from "./Navbar";

import Register from '../components/auth/Register.js'
import Login from "./auth/Login";



const App = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
    </Switch>
  </BrowserRouter>
);

export default App;
