import React from 'react';
import med from 'assets/icons/med.svg'
import Image from 'next/image';

const Bunner = () => {
    return (
        <div className='bg-color-blue-dark'>
            <div className="container pl-130 flex flex-column gap-40">
                <div className='flex aln-center gap-15 mt-80'>
                    <Image src={med} alt='' />
                    <span style={{ maxWidth: 600 }} className='flex text-color-white fs-60 fw-700'>ОФИЦИАЛЬНАЯ  ПОДДЕРЖКА</span>
                </div>
                <p style={{ maxWidth: 950 }} className='fs-20 text-color-white'>
                    Для ознакомления всего материала Официальной поддержки Выставки MedExpo Siberia 2023
                    Вы можете скачать все разрешительные документы.
                </p>
            </div>
        </div >
    );
};

export default Bunner;