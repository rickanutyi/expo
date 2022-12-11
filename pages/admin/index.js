import React from 'react';
import styles from './styles.module.scss'
import classNames from 'classnames';
import Header from './Header';

const index = () => {
    return (
        <div className={classNames(styles.root)}>
            <Header />
        </div>
    );
};

export default index;