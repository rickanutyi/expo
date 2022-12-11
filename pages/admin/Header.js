import classNames from 'classnames';
import Link from 'next/link';
import React from 'react';
import styles from './styles.module.scss'

const Header = ({ path }) => {
    return (
        <div className='shadow-1'>
            <div className="container  pt-20 pb-20">
                <div className='flex gap-20'>
                    <Link href='/admin/medexpo'>
                        <span className={classNames('fs-24 fw-700 text-color-blue', { [styles.active_link]: path === 'medexpo' })}>medexpo</span>
                    </Link>
                    <Link href='/admin/medexpo'>
                        <span className='fs-24 fw-700 text-color-blue'>medexpo</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;