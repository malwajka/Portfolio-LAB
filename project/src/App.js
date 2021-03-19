import React, { createContext } from 'react';
import {Home} from "./components/Home";
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import {Login} from "./components/Login";
import {Register} from "./components/Register";
import {Logout} from "./components/Logout";
import Firebase from './components/Firebase'

export const FirebaseContext = createContext(null)

function App() {
    return (
        <FirebaseContext.Provider value={new Firebase()}>
        <Router>
            <Switch>
                <Route exact path={"/"}>
                    <Home/>
                </Route>
                <Route exact path={"/logowanie"}>
                    <Login/>
                </Route>
                <Route exact path={"/rejestracja"}>
                    <Register/>
                </Route>
                <Route exact path={"/wylogowano"}>
                    <Logout/>
                </Route>
            </Switch>
        </Router>
        </FirebaseContext.Provider>
    );
}

export default App;
