import React from 'react';
import styles from './styles.module.scss'

import footer from 'assets/images/footer.png'
import Image from 'next/image';

const Speakers = () => {
    return (
        <div className='container'>
            <div>
                <h2 className='fs-60 fw-700 text-color-red m-0 text-align-right'>Спикеры</h2>
                <div className="flex gap-20 jfy-end">
                    <button className='fs-48 fw-700 text-color-white bg-color-red border-radius-10'>
                        6.06
                    </button>
                    <button className='fs-48 fw-700 text-color-white bg-color-blue-dark border-radius-10'>
                        7.06
                    </button>
                    <button className='fs-48 fw-700 text-color-white bg-color-blue-dark border-radius-10'>
                        8.06
                    </button>
                </div>
            </div>
            <div>
                <div className='flex gap-40'>
                    <Image className={styles.image} src={footer} alt='' />
                    <div style={{ maxWidth: 450 }} className='flex flex-column '>
                        <span className='fs-30 fw-700 text-color-dark-blue'>
                            ИВАНОВ ИВАН ИВАНЫЧ
                        </span>
                        <span className='fs-24 text-color-dark-blue '>
                            представитель компании BiLive
                        </span>
                        <span className='fs-20 fw-700 color-dark mt-20'>дата выступления:</span>
                        <span className='fs-20 text-color-dark-05'>6-7 июня 2023 г.</span>

                        <span className='fs-20 fw-700 color-dark mt-20'>тема и время выступления:</span>
                        <span className='fs-20 text-color-dark-05'> “живи так, чтобы выставка была заполнена выставкой для определения вставки про усиление выставки”</span>
                    </div>
                </div>
                <div className='flex row-reverse gap-40'>
                    <Image className={styles.image} src={footer} alt='' />
                    <div style={{ maxWidth: 450 }} className='flex flex-column '>
                        <span className='fs-30 fw-700 text-color-dark-blue'>
                            ИВАНОВ ИВАН ИВАНЫЧ
                        </span>
                        <span className='fs-24 text-color-dark-blue '>
                            представитель компании BiLive
                        </span>
                        <span className='fs-20 fw-700 color-dark mt-20'>дата выступления:</span>
                        <span className='fs-20 '>6-7 июня 2023 г.</span>

                        <span className='fs-20 fw-700 color-dark mt-20'>тема и время выступления:</span>
                        <span className='fs-20'> “живи так, чтобы выставка была заполнена выставкой для определения вставки про усиление выставки”</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Speakers;