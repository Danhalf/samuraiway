import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from "./components/Sidebar/Settings/Settings";
import BestFriends from "./components/Sidebar/BestFriends/BestFriends";
import { BrowserRouter, Route } from 'react-router-dom';


function App(props) {

    return (
        <BrowserRouter>
            <div className="app-wrapper">

                <Header/>
                <Navigation/>
                <main className="app-wrapper__main">
                    <Route path="/profile"
                           render={ () => <Profile
                               state={ props.store.state.profilePage }
                               addPost={ props.store.addPost }
                               updatePostMessage={ props.store.updatePostMessage }
                           /> }
                    />
                    <Route path="/dialogs"
                           render={ () => <Dialogs
                               state={ props.store.state.dialogPage }
                               addMessage={ props.store.addMessage }
                               updateDialogsMessage={ props.store.updateDialogsMessage }
                           /> }
                    />
                    <Route path="/news" component={ News }/>
                    <Route path="/music" component={ Music }/>
                    <Route path="/settings" component={ Settings }/>
                    <Route path="/bestfriends" component={ BestFriends }/>
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;
