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


function App(props) {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navigation messagesCount={ props.state.dialogsPage.dialogs.length }/>
            <main className="app-wrapper__main">
                <Route path="/profile"
                       render={ () => <Profile
                           state={ props.state.profilePage }
                           dispatch={ props.dispatch }
                       /> }
                />
                <Route path="/dialogs"
                       render={ () => <DialogsContainer
                           state={ props.state.dialogsPage }
                           dispatch={ props.dispatch }
                       /> }
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
