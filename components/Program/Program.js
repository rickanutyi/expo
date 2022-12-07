import Image from 'next/image';
import React from 'react';

import arrow from 'assets/icons/arrowdown.svg'

const Program = () => {
    return (
        <div className='container pt-40 pl-130'>
            <h2 className='m-0 text-upper-case text-color-red fs-80 fw-700 lh-65 pb-60'>Программа <br /> мероприятия</h2>
            <div className='flex flex-column gap-30'>
                <div className='flex jfy-between p-line-20 p-block-40 shadow-1 border-radius-30'>
                    <span className='fs-60 text-color-dark-blue nowrap'>Мастер классы</span>
                    <p className='fs-18 text-color-dark-05' style={{ maxWidth: 460 }}>
                        Получи заряд вдохновения! В рамках деловой программы выставки проходят мастер-классы и семинары, презентации и конференции.
                    </p>
                </div>
                <div className='flex row-reverse jfy-between p-line-20 p-block-40 shadow-1 border-radius-30'>
                    <span className='fs-60 text-color-dark-blue nowrap'>Мастер классы</span>
                    <p className='fs-18 text-color-dark-05' style={{ maxWidth: 460 }}>
                        Получи заряд вдохновения! В рамках деловой программы выставки проходят мастер-классы и семинары, презентации и конференции.
                    </p>
                </div>
                <div className='flex jfy-between p-line-20 p-block-40 shadow-1 border-radius-30'>
                    <span className='fs-60 text-color-dark-blue nowrap'>Мастер классы</span>
                    <p className='fs-18 text-color-dark-05' style={{ maxWidth: 460 }}>
                        Получи заряд вдохновения! В рамках деловой программы выставки проходят мастер-классы и семинары, презентации и конференции.
                    </p>
                </div>
                <div className='flex jfy-center'>
                    <button className='download-btn'>
                        <Image src={arrow} alt='arrow icon' />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Program;