import Image from 'next/image';
import React from 'react';

import styles from './styles.module.scss'

import arrow from 'assets/images/arrow.png'
import secondblock from 'assets/images/with_glasses.png';

const SecondBlock = () => {

    return (
        <div className='mt-70'>
            <div className='bg-color-red pt-10 pb-10'>
                <div className='container flex jfy-end pr-130'>
                    <span className='fs-80 fw-700 text-color-white'>выставка 365</span>
                </div>
            </div>
            <div className="container flex ">
                <Image src={secondblock} alt='' />
                <div className='relative flex aln-end flex-grow-1'>
                    <div className={styles.form}>
                        <div className='shadow-1 flex jfy-center bg-color-white border-radius-5 width-500 p-block-10 fs-40 fw-700 text-color-red'>
                            онлайн/офлайн
                        </div>
                        <div className='shadow-1 flex jfy-center bg-color-white border-radius-5 width-500 p-block-10 fs-40 fw-700 text-color-red'>
                            назначение встреч
                        </div>
                        <div className='shadow-1 flex jfy-center bg-color-white border-radius-5 width-500 p-block-10 fs-40 fw-700 text-color-red'>
                            каталог участников
                        </div>
                    </div>
                    <div className='flex bg-color-blue-dark aln-center pr-15  gap-20'>
                        <div style={{ overflow: 'hidden', maxWidth: 400 }} className='flex pt-10 pb-10 nowrap '>
                            <span className='fs-48 fw-700 text-color-white text-upper-case marqueeStyle'>expolider - expolider</span>
                            <span className='fs-48 fw-700 text-color-white text-upper-case marqueeStyle2'>expolider - expolider</span>
                        </div>
                        <button style={{ maxHeight: 40 }} className='reverse bg-color-white-05'><Image src={arrow} alt='' /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SecondBlock;