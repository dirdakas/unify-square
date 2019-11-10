import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Users from './components/Users/Users';
import UserDetails from './components/UserDetails/UserDetails';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <h1>Demo for Unify Square</h1>
          <Route path="/" exact component={ Users } />
          <Route path="/user/:login" component={ UserDetails } />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
