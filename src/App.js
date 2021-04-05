import React from 'react';
import { Switch, Route } from 'react-router-dom'


// layouts
import MainLayout from './layouts/MainLayout';
import HomePageLayout from './layouts/HomePageLayout';

//pages
import './default.scss';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Registration from './pages/Registration';



function App() {
  return (
    <div className="App">
      <Switch>
          <Route exact path="/" render={() => (
            <HomePageLayout>
              <HomePage />
            </HomePageLayout>
          )}/>
          <Route path="/registration" render={() => (
            <MainLayout>
              <Registration />
            </MainLayout>
          )} />
        </Switch>
    </div>
  );
}

export default App;
