import Image from 'next/image';
import React from 'react';
import styles from './styles.module.scss'

import img from 'assets/images/left-side-img.png'
import arrow from 'assets/images/arrow.png'

const Expodat = () => {
    return (
        <div>
            <div className="container flex aln-end relative">
                <Image src={img} alt='' />
                <div className='fs-48 fw-700 text-color-white bg-color-red'>
                    EXPODAT
                    <button className='reverse bg-color-white-05'><Image src={arrow} alt='' /></button>
                </div>
                <div className={styles.form}>
                    <span className='fs-80 fw-700 text-color-dark-blue'>выставка 365</span>
                    <div className='shadow-1 flex jfy-center bg-color-white border-radius-5 width-500 p-block-10 fs-24 fw-700 text-color-red'>
                        Мгновенная идентификация
                    </div>
                    <div className='shadow-1 flex jfy-center bg-color-white border-radius-5 width-500 p-block-10 fs-24 fw-700 text-color-red'>
                        Формирование базы контактов
                    </div>
                    <div className='shadow-1 flex jfy-center bg-color-white border-radius-5 width-500 p-block-10 fs-24 fw-700 text-color-red'>
                        Мотивация сотрудников kpi
                    </div>
                    <div className='shadow-1 flex jfy-center bg-color-white border-radius-5 width-500 p-block-10 fs-24 fw-700 text-color-red'>
                        Онлайн отчеты
                    </div>
                    <div className='shadow-1 flex jfy-center bg-color-white border-radius-5 width-500 p-block-10 fs-24 fw-700 text-color-red'>
                        Анкетирование посетителей
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Expodat;