import React, {useContext, useState, useEffect} from 'react';
import "./HomeWhoWeHelp.scss";
import Decoration from "../assets/Decoration.svg";
import {FirebaseContext} from "../index";
import Pagination from "./Pagination";

export const HomeWhoWeHelp = () => {

    const firebase = useContext(FirebaseContext);
    const [current, setCurrent] = useState('fundations');

    //pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(3);
    const [loading, setLoading] = useState(false);

    const [fundations, setFundations] = useState([]);

    useEffect(() => {
        setLoading(true);
        setCurrentPage(1)
        firebase.fundations(current).on("value", (snap) => {
            console.log(snap.val());
            setFundations(snap.val());

            setLoading(false);
        })
    }, [current]);

//get current items

    const indexOfLastPost = currentPage * itemsPerPage;
    const indexOfFirstPost = indexOfLastPost - itemsPerPage;
    const currentItems = fundations?.items ?  fundations?.items?.slice(indexOfFirstPost, indexOfLastPost) : [];

    console.log(currentItems);

    console.log(indexOfLastPost);
    console.log(indexOfFirstPost);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <section className='who_we_help' id='who_we_help'>
            <div className='who_we_help-container'>
                <h3 className='who_we_help-title'>Komu pomagamy?</h3>
                <img src={Decoration} alt='decoration'/>
                <div className='who_we_help-organizations'>
                    <div tabIndex="0" onClick={() => setCurrent('fundations')}
                         className='organizations-single'>Fundacjom
                    </div>
                    <div tabIndex="0" onClick={() => setCurrent('organisations')}
                         className='organizations-single'>Organizacjom <br/> pozarządowym
                    </div>
                    <div tabIndex="0" onClick={() => setCurrent('locals')}
                         className='organizations-single'>Lokalnym <br/> zbiórkom
                    </div>
                </div>
                <p className='who_we_help-description'>{fundations.title}</p>
                <p className='who_we_help-container'>{currentItems.map(fundation => (
                    <>
                        <ul className='fundations_list'>
                            <p className='fundations_single'>
                                <li className='fundation_title'>{fundation.title}</li>
                                <li className='fundation_subtitle'>{fundation.subtitle}</li>
                            </p>
                            <p className='fundation_other'>{fundation.other}</p>
                        </ul>
                        <div className='line'></div>
                    </>
                ))}</p>
                <Pagination
                    itemsPerPage={itemsPerPage}
                    totalItems={fundations?.items?.length}
                    paginate={paginate}
                />
            </div>
        </section>
    )
}