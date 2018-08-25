import React, { Component} from "react";
import {hot} from "react-hot-loader";
import { Route, Switch } from 'react-router-dom';

import Navigation from "./Ui/Navigation";
import Login from "./Ui/Forms/Login";
import SignUp from "./Ui/Forms/SignUp";
import Landing from "../stateless/Ui/Pages/Landing";
import About from "../stateless/Ui/Pages/About";
import Dashboard from "./Ui/Dashboard/Dashboard";

class App extends Component{
  render(){
    return(
      <div className="App">
        <h1>Logo</h1>
        <Navigation />
        <Switch>
          <Route path='/' exact component={Landing} />
          <Route path='/about' exact component={About} />
          <Route path='/login' exact component={Login} />
          <Route path='/signup' exact component={SignUp} />
          <Route path='/dashboard'exact component={Dashboard} />
        </Switch>
      </div>
    );
  }
}

export default hot(module)(App);