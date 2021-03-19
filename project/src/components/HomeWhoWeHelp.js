import React, {useContext, useState, useEffect} from 'react';
import "./HomeWhoWeHelp.scss";
import Decoration from "../assets/Decoration.svg";
import {FirebaseContext} from "../index";

export const HomeWhoWeHelp = () => {
    const firebase = useContext(FirebaseContext);
    const [current, setCurrent] = useState('fundations')

    const [fundations, setFundations] = useState({});

    useEffect(() => {
        firebase.fundations(current).on("value", (snap) => {
            console.log(snap.val());
            setFundations(snap.val());
         //   console.log(fundations);
        })
    }, [current])



    return (
        <section className='who_we_help' id='who_we_help'>
            <div className='who_we_help-container'>
                <h3 className='who_we_help-title'>Komu pomagamy?</h3>
                <img src={Decoration} alt='decoration'/>
                <div className='who_we_help-organizations'>
                    <div onClick={() => setCurrent('fundations')} className='organizations-single'>Fundacjom</div>
                    <div onClick={() => setCurrent('organisations')} className='organizations-single'>Organizacjom <br/> pozarządowym</div>
                    <div onClick={() => setCurrent('locals')} className='organizations-single'>Lokalnym <br/> zbiórkom</div>
                </div>
                <p className='who_we_help-description'>{fundations.title}</p>

                <p className='who_we_help-description'>{fundations?.items?.map(fundation => (
                    <ul className='fundations_list'>
                        <li className='fundation'>{fundation.title} tutaj powinna być lista fundacji</li>
                    </ul>
                ))}</p>
            </div>
        </section>
    )
}