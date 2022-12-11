import Image from 'next/image';
import React from 'react';

import card1 from 'assets/images/card1.png';
import card2 from 'assets/images/card2.png';
import card3 from 'assets/images/card3.png';

const ThirdBlock = () => {
    return (
        <div className='pb-40'>
            <div className="container pt-30 pb-30">
                <span className='fs-60 fw-700 text-color-red'>ИНФОРМАЦИЯ</span>
            </div>
            <div className="container flex jfy-between pr-70 pl-70">
                <div style={{ maxWidth: 350, height: 385 }} className='p-10 flex-1-1-1 flex flex-column gap-20 aln-center'>
                    <Image src={card1} alt='' />
                    <span className='fs-30 fw-700 text-color-red text-align-center'>ПРЯМОЙ КОНТАКТ</span>
                    <span className='mt-auto fs-24 text-color-dark-05 fw-700'>ОСТАВИТЬ КОНТАКТ</span>
                </div>
                <div style={{ maxWidth: 350, height: 385 }} className='p-10 flex-1-1-1 flex flex-column gap-20 aln-center shadow-1 border-radius-10'>
                    <Image src={card2} alt='' />
                    <span className='fs-30 fw-700 text-color-red text-align-center'>СПИСОК УЧАСТНИКОВ</span>
                    <span className='mt-auto fs-24 text-color-dark-05 fw-700'>СКАЧАТЬ</span>
                </div>
                <div style={{ maxWidth: 350, height: 385 }} className='p-10 flex-1-1-1 flex flex-column gap-20 aln-center'>
                    <Image src={card3} alt='' />
                    <span className='fs-30 fw-700 text-color-red text-align-center'>ЧЕК ЛИСТ ПОСЕТИТЕЛЯ </span>
                    <span className='mt-auto fs-24 text-color-dark-05 fw-700'>СКАЧАТЬ</span>
                </div>
            </div>
        </div>
    );
};

export default ThirdBlock;