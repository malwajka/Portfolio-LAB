import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'reset-css';
import '../src/scss/main.scss';
import { createContext } from 'react';
import Firebase from "./components/Firebase";

export const FirebaseContext = createContext(null);

ReactDOM.render(
    <FirebaseContext.Provider value={new Firebase()}>
    <App/>
    </FirebaseContext.Provider>,
    document.getElementById('root')
);

