import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import UserDetail from './Component/UserDetail/UserDetail';
import Home from './Component/Home/Home';
import NoMatch from './NoMatch/NoMatch';


function App() {

  return (

    <Router>
      <Switch>
        <Route path="/home">

          <Home />

        </Route>
        <Route path="/post/:postId">
          <UserDetail />

        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
