import React from 'react';
import "./HomeWhoWeHelp.scss";
import Decoration from "../assets/Decoration.svg";

export const HomeWhoWeHelp = () => {
    return (
        <section className='who_we_help' id='who_we_help'>
            <div className='who_we_help-container'>
                <h3 className='who_we_help-title'>Komu pomagamy?</h3>
                <img src={Decoration} alt='decoration'/>
                <div className='who_we_help-organizations'>
                    <div className='organizations-single'>Fundacjom</div>
                    <div className='organizations-single'>Organizacjom <br/> pozarządowym</div>
                    <div className='organizations-single'>Lokalnym <br/> zbiórkom</div>
                </div>
                {/*<p className='who_we_help-description'></p>*/}
            </div>
        </section>
    )
}