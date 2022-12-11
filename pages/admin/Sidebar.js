import React from 'react';
import styles from './styles.module.scss'
import classNames from 'classnames';
import Link from 'next/link';

const Sidebar = ({ menu }) => {
    return (
        <div className={styles.sidebar}>
            <div className='flex flex-column aln-center gap-20 pt-40 p-line-20'>
                <Link href={menu === 'logo' ? {} : 'medexpo/logo'}>
                    <button className={classNames(styles.sidebar_item, { [styles.active_btn]: menu === 'logo' })}>
                        Логотипы
                    </button>
                </Link>
                <button className={classNames(styles.sidebar_item,)}>
                    item
                </button>
                <button className={classNames(styles.sidebar_item,)}>
                    item
                </button>
            </div>
        </div>
    );
};

export default Sidebar;