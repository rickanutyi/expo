import Footer from 'components/Footer/Footer';
import TopBar from 'components/TopBar/TopBar';
import React from 'react';

import styles from './styles.module.scss'
import classNames from 'classnames';
import Banner from 'components/Banner/Banner';
import Bunner from './Bunner';

const index = () => {
    return (
        <div>
            <TopBar />
            <Bunner />
            <main className='pt-40 pb-40'>
                <div className='flex flex-wrap gap-10 container jfy-between p-line-200'>
                    <div className={classNames(styles.card, 'border-radius-10 flex flex-column p-10')}>
                        <span className='text-color-red fs-24 fw-700 text-align-center'>
                            Департамент лекарственных средств при МЗ КР
                        </span>
                        <iframe className={styles.iframe} scrolling='no' src="/doc.png" width={290} align='middle' height={109} frameborder="0"></iframe>
                        <button className='p-10 mt-10 bg-color-white text-color-dark-blue fs-20 fw-700'>скачать</button>
                    </div>
                    <div className={classNames(styles.card, 'border-radius-10 flex flex-column p-10')}>
                        <span className='text-color-red fs-24 fw-700 text-align-center'>
                            Департамент лекарственных средств при МЗ КР
                        </span>
                        <iframe className={styles.iframe} scrolling='no' src="/doc.png" width={290} align='middle' height={109} frameborder="0"></iframe>
                        <button className='p-10 mt-10 bg-color-white text-color-dark-blue fs-20 fw-700'>скачать</button>
                    </div>
                    <div className={classNames(styles.card, 'border-radius-10 flex flex-column p-10')}>
                        <span className='text-color-red fs-24 fw-700 text-align-center'>
                            Департамент лекарственных средств при МЗ КР
                        </span>
                        <iframe className={styles.iframe} scrolling='no' src="/doc.png" width={290} align='middle' height={109} frameborder="0"></iframe>
                        <button className='p-10 mt-10 bg-color-white text-color-dark-blue fs-20 fw-700'>скачать</button>
                    </div>
                    <div className={classNames(styles.card, 'border-radius-10 flex flex-column p-10')}>
                        <span className='text-color-red fs-24 fw-700 text-align-center'>
                            Департамент лекарственных средств при МЗ КР
                        </span>
                        <iframe className={styles.iframe} scrolling='no' src="/doc.png" width={290} align='middle' height={109} frameborder="0"></iframe>
                        <button className='p-10 mt-10 bg-color-white text-color-dark-blue fs-20 fw-700'>скачать</button>
                    </div>
                    <div className={classNames(styles.card, 'border-radius-10 flex flex-column p-10')}>
                        <span className='text-color-red fs-24 fw-700 text-align-center'>
                            Департамент лекарственных средств при МЗ КР
                        </span>
                        <iframe className={styles.iframe} scrolling='no' src="/doc.png" width={290} align='middle' height={109} frameborder="0"></iframe>
                        <button className='p-10 mt-10 bg-color-white text-color-dark-blue fs-20 fw-700'>скачать</button>
                    </div>
                    <div className={classNames(styles.card, 'border-radius-10 flex flex-column p-10')}>
                        <span className='text-color-red fs-24 fw-700 text-align-center'>
                            Департамент лекарственных средств при МЗ КР
                        </span>
                        <iframe className={styles.iframe} scrolling='no' src="/doc.png" width={290} align='middle' height={109} frameborder="0"></iframe>
                        <button className='p-10 mt-10 bg-color-white text-color-dark-blue fs-20 fw-700'>скачать</button>
                    </div>
                    <div className={classNames(styles.card, 'border-radius-10 flex flex-column p-10')}>
                        <span className='text-color-red fs-24 fw-700 text-align-center'>
                            Департамент лекарственных средств при МЗ КР
                        </span>
                        <iframe className={styles.iframe} scrolling='no' src="/doc.png" width={290} align='middle' height={109} frameborder="0"></iframe>
                        <button className='p-10 mt-10 bg-color-white text-color-dark-blue fs-20 fw-700'>скачать</button>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default index;