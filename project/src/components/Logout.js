import React from "react";
import "./Logout.scss";
import {Link} from "react-router-dom";
import Decoration from '../assets/Decoration.svg'

export const Logout = () => {


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
            <div className='logout_notification'>
                <h3 className='logout_title'>Wylogowanie nastąpiło pomyślnie!</h3>
                <img src={Decoration} alt='decoration'/>
                <Link className='logout_link' to={"/"}>Strona główna</Link>
            </div>
        </>
    )
}