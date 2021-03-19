import React from 'react';
import "./HomeSimpleSteps.scss";
import Decoration from "../assets/Decoration.svg";
import Icon1 from '../assets/Icon-1.svg';
import Icon2 from '../assets/Icon-2.svg';
import Icon3 from '../assets/Icon-3.svg';
import Icon4 from '../assets/Icon-4.svg';
import {Link} from "react-router-dom";


export const HomeSimpleSteps = () => {
    return (
        <section className='simple_steps' id='simple_steps'>
            <div className='simple_steps-header'>
                <h3 className='simple_steps-header-title'>Wystarczą 4 proste kroki</h3>
                <img className='img_decoration' src={Decoration} alt='decoration'/>
            </div>
            <div className='simple_steps-main'>
                <div className='simple_steps-main-single'>
                    <img src={Icon1} alt='icon'/>
                    <h4 className='simple_steps-main-single-title'>Wybierz rzeczy</h4>
                    <p className='simple_steps-main-single-description'>ubrania, zabawki, sprzęt i inne</p>
                </div>
                <div className='simple_steps-main-single'>
                    <img src={Icon2} alt='icon'/>
                    <h4 className='simple_steps-main-single-title'>Spakuj je</h4>
                    <p className='simple_steps-main-single-description'>skorzystaj z worków na śmieci</p>
                </div>
                <div className='simple_steps-main-single'>
                    <img src={Icon3} alt='icon'/>
                    <h4 className='simple_steps-main-single-title'>Zdecyduj komu chcesz pomóc</h4>
                    <p className='simple_steps-main-single-description'>wybierz zaufane miejsce</p>
                </div>
                <div className='simple_steps-main-single'>
                    <img src={Icon4} alt='icon'/>
                    <h4 className='simple_steps-main-single-title'>Zamów kuriera</h4>
                    <p className='simple_steps-main-single-description'>kurier przyjedzie w dogodnym terminie</p>
                </div>
            </div>
            <div className='simple_steps-action'>
                <Link className='simple_steps-action-link' to={"/logowanie"}>Oddaj <br/> rzeczy</Link>
            </div>
        </section>
    )
}