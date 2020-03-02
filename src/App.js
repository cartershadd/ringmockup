import React from 'react';
import './App.css';
import NavBar from "./navigation/NavBar";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Something from './pages/Something';
import Nothing from './pages/Nothing';
import Contact from './pages/Contact';

function App() {
    return (
        <div className="app">
            <Router>
                <NavBar/>
                <Switch>
                    <Route exact path={'/'} component={Home}/>
                    <Route exact path={'/about'} component={About}/>
                    <Route exact path={'/something'} component={Something}/>
                    <Route exact path={'/nothing'} component={Nothing}/>
                    <Route exact path={'/contact'} component={Contact}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
