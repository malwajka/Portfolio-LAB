import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import Decoration from '../assets/Decoration.svg';
import './HomeNavHeader.scss';
import {Link as ScrollLink} from 'react-scroll';
import {AuthContext} from "../App";
import {FirebaseContext} from "../index";

export const HomeNavHeader = () => {
    const firebase = useContext(FirebaseContext);
    const user = useContext(AuthContext);

    const handleLogOut = (e) => {
        e.preventDefault();
        firebase.doSignOut();
    }

    return (
        <header className='header'>
            <div/>
            <div className='header_content'>
                <div className='header_nav'>
                    <div className='log_actions'>
                        {user ? (
                            <>
                                <h3>{user.email}</h3>
                                <Link onClick={handleLogOut} className='cos' to={"/wylogowano"}>Wyloguj</Link>
                            </>
                        ) : (
                            <>
                                <Link className='log_link' to={"/logowanie"}>Zaloguj</Link>
                                <Link className='log_link frame' to={"/rejestracja"}>Załóż konto</Link>
                            </>
                        )}

                    </div>
                    <ul className='nav_list'>
                        <li className='nav_item start'>
                            <Link to="/" style={{textDecoration: 'none'}}>Start</Link>
                        </li>
                        <li className='nav_item'>
                            <ScrollLink to='simple_steps'
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}>O co chodzi?</ScrollLink>
                        </li>
                        <li className='nav_item'>
                            <ScrollLink to='about'
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}>O nas</ScrollLink>
                        </li>
                        <li className='nav_item'>
                            <ScrollLink to='who_we_help'
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}>Fundacja i organizacje</ScrollLink>
                        </li>
                        <li className='nav_item'>
                            <ScrollLink to='contact'
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}>Kontakt</ScrollLink>
                        </li>
                    </ul>
                </div>
                <div className='header_actions'>
                    <h1 className='header_title'>Zacznij pomagać! <br/> Oddaj niechciane rzeczy w zaufane ręce</h1>
                    <img className='img_decoration' src={Decoration} alt='decoration'/>
                    <div className='log_link-container'>
                        <Link className='log_link' to={"/logowanie"}>Oddaj <br/> rzeczy</Link>
                        <Link className='log_link' to={"/logowanie"}>Zorganizuj zbiórkę</Link>
                    </div>
                </div>
            </div>
        </header>
    )
}