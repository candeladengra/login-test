import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import Login from './Login.js';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login} />
            <Redirect to="/" />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
