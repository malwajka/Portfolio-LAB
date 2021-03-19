import React from 'react';
import './HomeAbout.scss';
import Decoration from "../assets/Decoration.svg";
import Signature from '../assets/Signature.svg';

export const HomeAbout = () => {
    return (
        <section className='about' id='about'>
            <div className='about_text'>
                <h3 className='about_title'>O nas</h3>
                <img src={Decoration} alt='decoration'/>
                <p className='about_description'>Nori grape silver beet broccoli kombu beet greens fava bean potato
                    quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                <img className='signature' src={Signature} alt='Signature'/>
            </div>
            <div className='about_image'> </div>
        </section>
    )
}