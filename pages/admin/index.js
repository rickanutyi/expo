import React from 'react';
import styles from './styles.module.scss'
import classNames from 'classnames';
import Header from './Header';

const index = () => {
    return (
        <div className={classNames(styles.root)}>
            <Header />
            <div style={{ height: '80%' }} className='flex jfy-center aln-center'>
                <span className='fs-40 fw-700 text-color-dark-blue'>
                    Добро пожаловать в админку, выберите выставку сверху
                </span>
            </div>
        </div>
    );
};

export default index;