import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Game from '../Game/Game.jsx';
import Header from '../Header/Header.jsx';
import StartPage from '../Pages/StartPage.jsx';
import AboutPage from '../Pages/AboutPage.jsx';
import CreateGamePage from '../Pages/CreateGamePage.jsx';
import NotFoundPage from '../Pages/NotFoundPage.jsx';

import './MainApp.css';


class MainApp extends React.Component {

    render() {
        let content =
            <Router>
                <div id="container">
                    <Header />
                    <Switch>
                        <Route exact path='/' component={StartPage} />
                        <Route path='/game/:id' component={Game} />
                        <Route path='/about' component={AboutPage} />
                        <Route path='/create' component={CreateGamePage} />
                        <Route component={NotFoundPage} />
                    </Switch>
                </div>
            </Router>;
        return content;
    }

}

export default MainApp;