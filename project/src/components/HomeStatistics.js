import React from 'react';
import './HomeStatistics.scss';

export const HomeStatistics = () => {
    return (
        <section className='statistics'>
            <div className='statistics_single'>
                <h2 className='statistics_value'>10</h2>
                <h3 className='statistics_title'>Oddanych worków</h3>
                <p className='statistics_description'>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
            </div>
            <div className='statistics_single'>
                <h2 className='statistics_value'>5</h2>
                <h3 className='statistics_title'>Wspartych organizacji</h3>
                <p className='statistics_description'>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
            </div>
            <div className='statistics_single'>
                <h2 className='statistics_value'>7</h2>
                <h3 className='statistics_title'>Zorganizowanych zbiórek</h3>
                <p className='statistics_description'>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
            </div>
        </section>
    )
}