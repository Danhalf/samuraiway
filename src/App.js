import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile.jsx';
import Dialogs from './components/Dialogs/Dialogs.jsx';
import News from './components/News/News.jsx';
import Music from './components/Music/Music.jsx';
import Settings from './components/Settings/Settings.jsx';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navigation />
        <main className="app-wrapper__main">
          <Route path="/profile" render={ () => <Profile />} />
          <Route path="/dialogs" render={ () => <Dialogs />} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
