import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
<<<<<<< HEAD
import Home from "./Home";
=======

import Home from "./Home";

>>>>>>> 0070704c86ceb9c3454fbc406be95b47cb18afe9

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </BrowserRouter>
);

export default App;
