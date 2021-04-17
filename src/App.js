import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import { checkUserSession } from './redux/User/user.actions'

// components
import AdminToolbar from './components/AdminToolbar/index';

// hoc
import WithAuth from './hoc/withAuth';
import WithAdminAuth from './hoc/withAdminAuth'

// layouts
import MainLayout from './layouts/MainLayout';
import HomePageLayout from './layouts/HomePageLayout';
import AdminLayout from './layouts/AdminLayout';
import DashboardLayout from './layouts/DashboardLayout';

//pages
import HomePage from './pages/HomePage';
import Registration from './pages/Registration';
import Login from './pages/Login/index';
import './default.scss';
import Recovery from './pages/Recovery/index';
import Dashboard from './pages/Dashboard/index';
import Admin from './pages/Admin'





const App = props => {
  const dispatch = useDispatch(); 

  useEffect(() => {
    dispatch(checkUserSession());
    
  }, []);


  return (
    <div className="App">
      <AdminToolbar />
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
          <Route path="/login" 
          render={() => (
            <MainLayout>
              <Login />
            </MainLayout>
          )} />
          <Route path="/recovery" render={() => (
            <MainLayout>
              <Recovery />
            </MainLayout>
          )}/>
          <Route path="/dashboard" render={() => (
            <WithAuth>
              <DashboardLayout>
                <Dashboard />
              </DashboardLayout>
            </WithAuth>
          )}/>
          <Route path="/admin" render={() => (
            <WithAdminAuth>
              <AdminLayout>
                <Admin />
              </AdminLayout>
            </WithAdminAuth>
          )}/>
        </Switch>
    </div>
  );
}

export default App;
