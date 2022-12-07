import TopBar from 'components/TopBar/TopBar';
import Image from 'next/image';
import React from 'react';
import med from 'assets/icons/med.svg'
import Footer from 'components/Footer/Footer';

const index = () => {
    return (
        <div>
            <TopBar page='gest' />
            <div className='bg-color-blue-dark'>
                <div className="container flex  ">
                    <div style={{ maxWidth: '50%' }} className='flex-grow-1 flex flex-column pt-60 pl-30'>
                        <span style={{ maxWidth: 550 }} className='fs-60 lh-100 text-color-white'>
                            ПОСЕТИТЕЛЕМ
                            МОЖЕТ СТАТЬ
                            КАЖДЫЙ
                        </span>
                        <button style={{ maxWidth: 300 }} className='border-radius-10 bg-color-red p-block-15 p-line-40 fs-24 text-color-white'>подать заявку</button>
                        {/* <div className='flex flex-column aln-center pt-20 white-gradient' style={{ maxWidth: 300 }}>
                            <span className='fs-30 fw-500 text-color-white'>кешбек</span>
                            <span className='fs-60 fw-500 text-color-white'>10%</span>
                        </div> */}
                    </div>
                    <div style={{ maxWidth: '50%' }} className='flex-grow-1 flex flex-column'>
                        <div style={{ borderLeft: '1px solid #fff' }} s className='flex flex-column gap-20 pt-60 pl-45'>
                            <div className='flex gap-10 aln-center'>
                                <Image src={med} alt='logo' />
                                <span style={{ maxWidth: 330 }} className='fs-60 fw-700 text-color-white text-upper-case'>
                                    MEDEXPO
                                    Соибирь
                                </span>
                            </div>
                            <span className='fs-30 fw-800 text-color-red'>
                                6|7|8 июня
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default index;