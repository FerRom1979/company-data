import React from 'react';
import HomePage from './components/HomePage/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Overview from './components/Overview/index';

function App() {
  return (
    <Router basename="/">
      <div className="fluid">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/overview" component={Overview} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
