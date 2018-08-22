import React, { Component} from "react";
import {hot} from "react-hot-loader";
import { Route, Switch } from 'react-router-dom';

import Navigation from "./Ui/Navigation";
import Login from "./Ui/Forms/Login";
import SignUp from "./Ui/Forms/SignUp";

class App extends Component{
  render(){
    return(
      <div className="App">
        <h1>Logo</h1>
        <Navigation />
        <Switch>
          <Route path='/login' exact component={Login} />
          <Route path='/signup' exact component={SignUp} />
        </Switch>
      </div>
    );
  }
}

export default hot(module)(App);