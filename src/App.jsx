import React from 'react';
import {
  Switch, Route, BrowserRouter
} from 'react-router-dom';
import List from './components/List';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/:section" component={List} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
