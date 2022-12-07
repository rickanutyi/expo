import Image from 'next/image';
import React from 'react';

import med from 'assets/icons/med.svg'
import d from 'assets/images/place.png'
import d2 from 'assets/images/place-2.png'
import w from 'assets/images/novosibirsk.png'

import TopBar from 'components/TopBar/TopBar';
import Footer from 'components/Footer/Footer';
import Sponsors from 'components/Sponsors';
import OrgStafs from './OrgStafs';
import Expodat from './Expodat';



const OborudovannayaINeTolko = () => {//aga smeshno
    return (
        <div className='mt-50'>
            <div className='bg-color-red'>
                <div className='container pl-70 p-block-20'>
                    <span className='fs-40 fw-700 text-color-white text-upper-case'>оборудованная площадь</span>
                </div>
            </div>
            <div className="container flex">
                <div className='pt-60 pb-60 max-width-50pe flex-grow-1'>
                    <ul style={{ maxWidth: 600 }} className='list-style-none default-shadow pt-10 pb-10'>
                        <li className='fs-24 fw-700 text-color-dark-05 text-upper-case ff-m'>1 Стеновые панели</li>
                        <li className='fs-24 fw-700 text-color-dark-05 text-upper-case ff-m'>2 Ковровое покрытие</li>
                        <li className='fs-24 fw-700 text-color-dark-05 text-upper-case ff-m'>3 слол, стул</li>
                        <li className='fs-24 fw-700 text-color-dark text-upper-case ff-m'>4 Бонус</li>
                    </ul>
                    <div style={{ maxWidth: 600 }} className='flex jfy-center'>
                        <span className='text-color-red fs-30 fw-700 ff-m'>
                            Аренда кофемашины
                        </span>
                    </div>
                </div>
                <div className='max-width-50pe'>
                    <Image className='mt-50-negative' src={d} alt='' />
                </div>
            </div>
            <div className='bg-color-blue-dark'>
                <div className='container pl-70 p-block-20 flex jfy-center'>
                    <span className='fs-40 fw-700 text-color-white text-upper-case'>оборудованная площадь</span>
                </div>
            </div>
            <div className="container pt-30 pl-60 pr-600 pb-60 flex">
                <div className='flex flex-column gap-30 max-width-50pe flex-grow-1 pt-60'>
                    <Image src={w} alt='novosibirsk' />
                    <span className='fs-30 fw-700 text-color-red'>Партнеры по застройке стендом</span>
                </div>
                <div className='max-width-50pe'>
                    <div className='p-10 default-shadow flex flex-column pt-30 pb-30 max-width-600'>
                        <span className='text-align-center fs-40 fw-700 text-color-red ff-m'>пустая площадь</span>
                        <span className='text-align-center fs-24 text-color-dark-05 ff-m'>
                            Для реализации самых смелых идей, возможность показать себя с лучшей стороны!
                        </span>
                    </div>
                </div>
            </div>
            <div className='bg-color-red'>
                <div className='container pl-70 p-block-20'>
                    <span className='fs-40 fw-700 text-color-white text-upper-case'>оборудованная площадь</span>
                </div>
            </div>
            <div className="container flex pt-30 pb-60 pr-60 pl-60 jfy-between">
                <div className='p-10 default-shadow flex flex-column pt-30 pb-30 max-width-600'>
                    <span className='text-align-center fs-40 fw-700 text-color-red ff-m'>пустая площадь</span>
                    <span className='text-align-center fs-24 text-color-dark-05 ff-m'>
                        Для реализации самых смелых идей, возможность показать себя с лучшей стороны!
                    </span>
                </div>
                <div>
                    <Image className='mt-50-negative' src={d2} alt='place' />
                </div>
            </div>
        </div>
    )
}


const index = () => {
    return (
        <div className=''>
            <TopBar page="participant" />
            <div className='bg-color-blue-dark'>
                <div className="container flex  ">
                    <div style={{ maxWidth: '50%' }} className='flex-grow-1 flex flex-column pt-60 pl-30'>
                        <span style={{ maxWidth: 550 }} className='fs-60 lh-100 text-color-white'>
                            УЧАСТНИКОМ
                            МОЖЕТ СТАТЬ
                            КАЖДЫЙ
                        </span>
                        <button style={{ maxWidth: 300 }} className='border-radius-10 bg-color-red p-block-15 p-line-40 fs-24 text-color-white'>подать заявку</button>
                        <div className='flex flex-column aln-center pt-20 white-gradient' style={{ maxWidth: 300 }}>
                            <span className='fs-30 fw-500 text-color-white'>кешбек</span>
                            <span className='fs-60 fw-500 text-color-white'>10%</span>
                        </div>
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
            <Sponsors title='Участники' href='error' />
            <div className='container pl-70 pr-60 p-block-40 flex'>
                <div className='flex flex-column gap-30'>
                    <div className='flex gap-10 aln-center'><span className='fs-100 fw-700 text-color-red'>45% </span><span className='fs-40 fw-700 text-color-red'>активных пользователей</span></div>
                    <div className='flex gap-10 aln-center row-reverse'><span className='fs-100 fw-700 text-color-red'>25% </span><span className='fs-40 fw-700 text-color-red text-align-right '>рост продаж после выставки </span></div>
                </div>
                <div className='flex jfy-end'>
                    {/* <div>/ */}
                    <span className='text-align-right fs-100 fw-700 text-color-dark-blue'>
                        МЫ СТРОИМ
                        БУДУЩЕЕ
                    </span>
                    {/* </div> */}
                </div>
            </div>
            <OborudovannayaINeTolko />
            <OrgStafs />
            <Expodat />
            <Footer />
        </div>
    );
};

export default index;
// https://dev.to/yuridevat/how-to-create-a-timer-with-react-7b9