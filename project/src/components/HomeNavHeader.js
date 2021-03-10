import React from 'react';
import {Link} from "react-router-dom";
import Decoration from '../assets/Decoration.svg';
import './HomeNavHeader.scss';

export const HomeNavHeader = () => {
    return (
        <header className='header'>
            <div className='header_photo'></div>
            <div className='header_content'>
                <div className='header_nav'>
                    <div className='log_actions'>
                        <Link className='log_link' to={"/logowanie"}>Zaloguj</Link>
                        <Link className='log_link' to={"/rejestracja"}>Załóż konto</Link>
                    </div>
                    <h1 className='header_title'>Zacznij pomagać! <br/> Oddaj niechciane rzeczy w zaufane ręce</h1>
                    <img src={Decoration}/>
                    <Link className='log_link' to={"/logowanie"}>Oddaj rzeczy</Link>
                    <Link className='log_link' to={"/logowanie"}>Zorganizuj zbiórkę</Link>
                </div>
            </div>
        </header>
    )
}