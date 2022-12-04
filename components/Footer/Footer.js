import Image from 'next/image';
import React from 'react';
import styles from './footer.module.scss'

import footer from 'assets/images/footer.png'
import logo from 'assets/icons/logo.svg'
import ball from 'assets/icons/ball.svg'
import phone from 'assets/icons/phone.svg'
import email from 'assets/icons/email.svg'

import classNames from 'classnames';



const Footer = () => {
    return (
        <div className='bg-color-blue-dark'>
            <div className="container flex">
                <div className={classNames(styles.left)}>
                    <div className='pt-20 pl-100 '>
                        <span className='fs-40 fw-700 text-color-white'>
                            Остались вопросы
                        </span>
                        <p style={{ maxWidth: 500 }} className='fs-20 text-color-white'>Напишите нам и мы с радостью ответим на все Ваши вопросы. Или закажите обратный звонок, оставив заявку.</p>
                    </div>
                    <Image src={footer} alt='s' />
                    <div className='flex gap-40 pt-10 pb-10 pl-100 aln-center'>
                        <Image src={logo} alt='logo' />
                        <div className='flex flex-column gap-5'>
                            <div className='flex aln-center gap-5'>
                                <Image src={email} alt='' />
                                <span className='text-color-white'>medexpo@biexpo.kg</span>
                            </div>
                            <div className='flex aln-center gap-5'>
                                <Image src={phone} alt='' />
                                <span className='text-color-white'>+996 775 000 005</span>
                            </div>
                            <div className='flex aln-center gap-5'>
                                <Image src={ball} alt='' />
                                <span className='text-color-white'>www.biexpo.kg</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classNames(styles.right, 'flex flex-column aln-center flex-grow-1')}>
                    <h2 className='fs-80 fw-700 text-color-white m-0 mt-30 pb-40'>Связаться</h2>
                    <form className='flex flex-column gap-20'>
                        <input className={classNames(styles.inp)} type="text" placeholder='ФИО*' required />
                        <input className={classNames(styles.inp)} type="text" placeholder='Email*' required />
                        <input className={classNames(styles.inp)} type="text" placeholder='Контактный телефон*' required />
                        <textarea className={classNames(styles.text_area)} placeholder='Организация*' id="" cols="30" rows="10"></textarea>
                        <button className={classNames(styles.btn)}>Отправить</button>
                    </form>
                </div>
            </div>
            <div className=' pt-20 pb-20 bg-color-red gap-40 nowrap overflow-hidden'>
                <span className='fs-60 fw-700 text-color-white nowrap overflow-hidden marqueeStyle' id='movetxt'>&nbsp;обратный звонок обратный звонок обратный звонок обратный звонок</span>
                <span className='fs-60 fw-700 text-color-white nowrap overflow-hidden marqueeStyle2' id='movetxt'>&nbsp;обратный звонок обратный звонок обратный звонок обратный звонок&nbsp;</span>
            </div>
        </div>
    );
};

export default Footer;