import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from "./components/Sidebar/Settings/Settings";
import BestFriends from "./components/Sidebar/BestFriends/BestFriends";
import { Route } from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";


function App() {

    return (
        <div className="app-wrapper">
            <Header/>
            <Navigation messagesCount={ 5 }/>
            <main className="app-wrapper__main">
                <Route path="/profile"
                       render={ () => <Profile/> }
                />
                <Route path="/dialogs"
                       render={ () => <DialogsContainer/> }
                />
                <Route path="/news" component={ News }/>
                <Route path="/music" component={ Music }/>
                <Route path="/settings" component={ Settings }/>
                <Route path="/bestfriends" component={ BestFriends }/>
            </main>
        </div>

    );
}

export default App;
