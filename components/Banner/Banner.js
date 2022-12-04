import React from 'react';
import styles from './banner.module.scss';
import classNames from 'classnames';
import Image from 'next/image';

import ru from 'assets/icons/ru.svg';
import eng from 'assets/icons/eng.svg'
import telegram from 'assets/icons/telegram.svg'
import youtube from 'assets/icons/youtube.svg'
import uncnoun from 'assets/icons/unoun.svg'
import med from 'assets/icons/med.svg'


const Banner = ({ banner }) => {
    const styling = {
        backgroundImage: `url(/bg2.png)`,
        backgroundPosition: 'bottom',
        backgroundRepeat: 'no-repeat'
    }

    console.log(banner)
    return (
        <div style={styling} className={classNames(styles.banner, 'bg-color-blue-dark ')}>
            <div className="container p-line-70 pb-40">
                <div className='flex jfy-between pt-14 pb-40'>
                    <div className='flex gap-5'>
                        <Image className='pointer' src={eng} alt='eng btn' />
                        <Image className='pointer' src={ru} alt='ru btn' />
                    </div>
                    <div className='flex gap-5'>
                        <Image className='pointer' src={uncnoun} alt='eng btn' />
                        <Image className='pointer' src={youtube} alt='ru btn' />
                        <Image className='pointer' src={telegram} alt='ru btn' />
                    </div>
                </div>
                <div className='pl-30 pt-40'>
                    <div className='flex gap-15'>
                        <Image src={med} alt='' />
                        <h2 className='m-0 text-color-white fs-100 fw-900'>
                            MEDEXPO <br /> СИБИРЬ 2023
                        </h2>
                    </div>
                    <div className='flex jfy-between'>
                        <div>
                            <div className='fs-60 text-color-red fw-600 pb-10 pt-20'>6|7|7 Июня</div>
                            <div className='fs-20 fw-2 text-color-white'>Международная выставка здравоохранения в Сибирском Федеральном округе, на котором будут продемонстрированы возможности импортозамещения и последних достижений производителей Российской Федерации, а также производителей из дружеских стран</div>
                        </div>
                        <div className='flex aln-end'>
                            <div className='text-color-red fs-24 fw-600 flex aln-end'><span className='mt-auto'>Медицина</span></div>
                            <span className='text-color-white fs-24 fw-600 writing-mode-vertical'>Стоматология &</span>
                        </div>
                    </div>
                    <div>
                        <div className='fs-40 fw-500 text-color-white pb-20'>до выставки осталось:</div>
                        <div className={classNames(styles.timer, 'flex gap-20  border-radius-10 pt-30 pb-30 p-line-30')}>
                            <div className='flex flex-column gap-10'>
                                <span className='text-color-white fs-24'>дней</span>
                                <span className='fs-100 fw-500 text-color-white'>256</span>
                            </div>
                            <span style={{ backgroundColor: '#fff', width: 8, height: 50, marginTop: 'auto', marginBottom: 30 }}></span>
                            <div className='flex flex-column gap-10'>
                                <span className='text-color-white fs-24'>часов</span>
                                <span className='fs-100 fw-500 text-color-white'>55</span>
                            </div>
                            <span style={{ backgroundColor: '#fff', width: 8, height: 50, marginTop: 'auto', marginBottom: 30 }}></span>
                            <div className='flex flex-column gap-10'>
                                <span className='text-color-white fs-24'>минут</span>
                                <span className='fs-100 fw-500 text-color-white'>30</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;