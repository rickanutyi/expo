import Image from 'next/image';
import React, { useState } from 'react';
import styles from './topbar.module.scss'
import logo from 'assets/icons/logo.svg'
import header_image from 'assets/images/header_img.png'
import classNames from 'classnames'
import Link from 'next/link';

const TopBar = ({ page }) => {
    const activeBtn1 = page === 'participant'
    const activeBtn2 = page === 'gest'

    return (
        <div className={classNames(styles.header, 'bg-color-blue-dark')}>
            <div className="container">
                <div className={classNames(styles.header__content, 'flex')}>
                    <div className={classNames(styles.left, "flex jfy-start aln-center flex-grow-1")}>
                        <Link href='/medexpo'>
                            <Image src={logo} alt='logo' />
                        </Link>
                        <Image src={header_image} alt='logo' />
                    </div>
                    <div className={classNames(styles.right, 'flex jfy-end flex-grow-1 aln-center')}>
                        <div className={classNames(styles.burger__btn, 'flex flex-column jfy-around aln-center')}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <button className={classNames('fs-24 fw-5 text-color-white bg-color-red', { [styles.bg_gray]: activeBtn2 })}>
                            <Link href='/medexpo/participant'>
                                УЧАСТНИКАМ
                            </Link>
                        </button>
                        <span style={{ width: 2, border: '1px solid #fff', maxHeight: '90%', height: '80%' }}></span>
                        <button className={classNames('fs-24 fw-5 text-color-white bg-color-red', { [styles.bg_gray]: activeBtn1 })}>
                            <Link href='/medexpo/gest'>
                                ПОСЕТИТЕЛЯМ
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;