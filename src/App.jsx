/* eslint-disable no-unused-vars */
import React from 'react';
import {
  Redirect, Route, Switch,
} from 'react-router-dom';
import { useAuth } from './hooks';
import HeroSearchPage from './components/HeroSearchPage/HeroSearchPage';
import LogInPage from './components/LogInPage/LogInPage';
import TeamPage from './components/TeamPage/TeamPage';
import HeroDetailsPage from './components/HeroDetailsPage/HeroDetailsPage';
import NavigationBar from './components/NavigationBar/NavigationBar';
import LogOutPage from './components/LogOutPage/LogOutPage';

function App() {
  const { token, logIn, logOut } = useAuth();

  return (
    <div className="App">
      <header className="App-header">
        <NavigationBar token={token} logOutFn={logOut} />
      </header>
      <main>
        <Switch>
          <Route path="/login">
            <LogInPage logInFn={logIn} />
          </Route>
          <Route path="/logout">
            <LogOutPage logOutFn={logOut} />
          </Route>
          <Route path="/team">
            <TeamPage />
          </Route>
          <Route path="/search">
            <HeroSearchPage />
          </Route>
          <Route path="/hero/:id">
            <HeroDetailsPage />
          </Route>
          <Route path="/">
            <Redirect to="/team" />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
