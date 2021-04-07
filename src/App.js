import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import { auth } from './firebase/utils'


// layouts
import MainLayout from './layouts/MainLayout';
import HomePageLayout from './layouts/HomePageLayout';

//pages
import './default.scss';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Registration from './pages/Registration';
import Login from './pages/Login/index';

const initialState = {
  currentUser = null
}


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      ...initialState
    };
  }

  componentDidMount(){

  }

  componentWillUnmount(){
    
  }

  render(){
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
            <Route path="/login" render={() => (
              <MainLayout>
                <Login />
              </MainLayout>
            )} />
          </Switch>
      </div>
    );
  }
}

export default App;
