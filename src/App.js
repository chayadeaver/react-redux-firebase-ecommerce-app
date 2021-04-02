import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './default.scss';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Registration from './pages/Registration';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/registration" component={Registration} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
