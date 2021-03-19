import React, {useState, useContext} from 'react';
import "./Login.scss";
import {Link} from "react-router-dom";
import Decoration from '../assets/Decoration.svg';
import {FirebaseContext} from "../index";

export const Login = ({user}) => {
    const firebase = useContext(FirebaseContext);

    console.log(user);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [user, setUser] = useState("");

    const [errors, setErrors] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);


    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    const handleLogOut = (e) => {
        e.preventDefault();
        firebase.doSignOut();
    }

    const handleLoggingIn = (e) => {
        e.preventDefault();
        firebase.doSignInWithEmailAndPassword(email, password);
        const errors = [];
        console.log(errors);

        if (!validateEmail(email)) {
            errors.push("Email jest nieprawidłowy!");
        }

        if (password.length < 6) {
            errors.push("Hasło musi mieć conajmniej 6 znaków!");
        }

        if (errors.length !== 0) {
            setErrors(errors);
        } else {
            setLoggedIn(true);
            setErrors("");
            setEmail("");
            setPassword("");
        }
    }
    return (
        <>
            <div className='login_nav'>
                <div className='login_actions'>
                    {user ? (
                        <>
                            <h3>{user.email}</h3>
                            <Link onClick={handleLogOut} className='cos' to={"/wylogowano"}>Wyloguj</Link>
                        </>
                    ) : (
                        <>
                            <Link className='login_link' to={"/logowanie"}>Zaloguj</Link>
                            <Link className='login_link frame' to={"/rejestracja"}>Załóż konto</Link>
                        </>
                    )}
                </div>
                <ul className='login_list'>
                    <li className='login_item login_start'><Link className='login_start-link' to={'/'}>Start</Link></li>
                    <li className='login_item'>O co chodzi?</li>
                    <li className='login_item'>O nas</li>
                    <li className='login_item'>Fundacja i organizacje</li>
                    <li className='login_item'>Kontakt</li>
                </ul>
            </div>
            <div className='login_panel'>
                <h3 className='login_title'>Zaloguj się</h3>
                <img src={Decoration} alt='decoration'/>
                <form className='login_form'>
                    <label className='login_label' htmlFor='email'>Email</label>
                    <input type='text'
                           className='login_input'
                           onChange={e => setEmail(e.target.value)}
                    />
                    <label className='login_label' htmlFor='password'>Hasło</label>
                    <input type='password'
                           className='login_input'
                           onChange={e => setPassword(e.target.value)}
                    />
                </form>
                <div className='login_actions-form'>
                    <Link className='login_link frame' to={"/rejestracja"}>Załóż konto</Link>
                    <button onClick={handleLoggingIn} className='login_confirm'>Zaloguj się</button>
                </div>
                <div className='form__validation'>
                    {loggedIn}
                    {errors.length > 0 && <h4 className='error_alert'>{errors.map(error =>
                        <ul className='error_list'>
                            <li className='error'>{error}</li>
                        </ul>)}</h4>}
                </div>
            </div>
        </>
    )
}