import React, { createContext, useState, useEffect, useContext } from 'react';
import {Home} from "./components/Home";
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import {Login} from "./components/Login";
import {Register} from "./components/Register";
import {Logout} from "./components/Logout";
import { FirebaseContext } from "./index";

export const AuthContext = createContext(null)
function App() {
    const firebase = useContext(FirebaseContext);
    const [user, setUser] = useState("");

    useEffect(() => {
        firebase.auth.onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
            } else {
                setUser("")
            }
        })
    }, [])

    return (
<AuthContext.Provider value={user}>
        <Router>
            <Switch>
                <Route exact path={"/"}>
                    <Home/>
                </Route>
                <Route exact path={"/logowanie"}>
                    <Login user={user}/>
                </Route>
                <Route exact path={"/rejestracja"}>
                    <Register/>
                </Route>
                <Route exact path={"/wylogowano"}>
                    <Logout/>
                </Route>
            </Switch>
        </Router>
</AuthContext.Provider>
    );
}

export default App;
