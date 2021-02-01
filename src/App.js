import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navigation />
        <main className="app-wrapper__main">
          <Route path="/profile" component={Profile} />
          <Route path="/dialogs" component={Dialogs} />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
