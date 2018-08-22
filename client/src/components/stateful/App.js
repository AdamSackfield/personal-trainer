import React, { Component} from "react";
import {hot} from "react-hot-loader";
import Navigation from "./Ui/Navigation";
// import "./App.css";

class App extends Component{
  render(){
    return(
      <div className="App">
        <h1>Logo</h1>
        <Navigation />
      </div>
    );
  }
}

export default hot(module)(App);