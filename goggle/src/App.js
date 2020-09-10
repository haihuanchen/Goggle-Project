import React from 'react';
import './App.css';
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path='/search'>
            <h3>This is the search page</h3>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
