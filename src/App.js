import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import Provider from './Context/Provider';
import Homepage from './Pages/Homepage';

function App() {
  return (
    <Provider>
      <Switch>
        <Route path="/" component={ Homepage } />
      </Switch>
    </Provider>
  );
}

export default App;
