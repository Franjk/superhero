/* eslint-disable no-unused-vars */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HeroSearchPage from './components/HeroSearchPage/HeroSearchPage';
import LogInForm from './components/LogInForm/LogInForm';
import Team from './components/Team/Team';
import './App.css';
import HeroDetails from './components/HeroDetails/HeroDetails';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Header
      </header>
      <main>
        <Switch>
          <Route path="/team">
            <Team />
          </Route>
          <Route path="/login">
            <LogInForm />
          </Route>
          <Route path="/search">
            <HeroSearchPage />
          </Route>
          <Route path="/hero/:id">
            <HeroDetails />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
