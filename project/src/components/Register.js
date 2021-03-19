import React, {useContext, useState, useEffect} from 'react';
import './Register.scss';
import {Link} from 'react-router-dom';
import Decoration from "../assets/Decoration.svg";
import {FirebaseContext} from "../App";

export const Register = () => {
    const firebase = useContext(FirebaseContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");

    const [errors, setErrors] = useState("");
    const [registeredIn, setRegisteredIn] = useState(false);

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    useEffect(() => {
        firebase.fundations().on("value", (snap) => {
            console.log(snap.val())
        })
    }, [])
    const handleRegisteredIn = e => {
        e.preventDefault();
        // firebase.doCreateUserWithEmailAndPassword('pawel@gabryel.eu', 'AlaMaKota123')
        firebase.doCreateUserWithEmailAndPassword(email, password);
        const errors = [];
        console.log(errors);

        if (!validateEmail(email)) {
            errors.push("Email jest nieprawidłowy!")
        }

        if (password.length < 6) {
            errors.push("Hasło musi mieć conajmniej 6 znaków!");
        }

        if (password != repeatPassword) {
            errors.push("Hasła muszą być takie same!");
        }

        if (errors.length != 0) {
            setErrors(errors);
        } else {
            setRegisteredIn(true);
            setErrors([]);
            setEmail([]);
            setPassword([]);
        }
    }

    return (
        <>
            <div className='login_nav'>
                <div className='login_actions'>
                    <Link className='login_link' to={"/logowanie"}>Zaloguj</Link>
                    <Link className='login_link frame' to={"/rejestracja"}>Załóż konto</Link>
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
                <h3 className='login_title'>Załóż konto</h3>
                <img src={Decoration} alt='decoration'/>
                <form className='register_form'>
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
                    <label className='login_label' htmlFor='password'>Powtórz hasło</label>
                    <input type='password'
                           className='login_input'
                           onChange={e => setRepeatPassword(e.target.value)}
                    />
                </form>
                <div className='login_actions-form'>
                    <Link className='login_link frame' to={"/logowanie"}>Zaloguj się</Link>
                    <button onClick={handleRegisteredIn} className='login_confirm'>Załóż konto</button>
                </div>
                <div className='form__validation'>
                    {registeredIn && <h4 className='register_success'>Rejestracja przebiegła pomyślnie! Zaloguj się</h4> }
                    {errors.length > 0 && <h4 className='error_alert'>{errors.map(error =>
                        <ul className='error_list'>
                            <li className='error'>{error}</li>
                        </ul> )}</h4>}
                </div>
            </div>
        </>
    )
}