import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from "./components/Sidebar/Settings/Settings";
import BestFriends from "./components/Sidebar/BestFriends/BestFriends";
import { Route } from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";


function App() {
    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <Navigation messagesCount={ 2 }/>
            <main className="app-wrapper__main">
                <Route path="/profile/:userId?"
                       render={ () => <ProfileContainer/> }
                />
                <Route path="/dialogs"
                       render={ () => <DialogsContainer/> }
                />
                <Route path="/users"
                       render={ () => <UsersContainer/> }
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
