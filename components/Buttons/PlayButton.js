import React from 'react';
import play from 'assets/icons/play.svg'
import Image from 'next/image';
import styles from './styles.module.scss'
import classNames from 'classnames';

const PlayButton = (props) => {

    const textPath = `<textPath xlink:href="#circle">открыть видео открыть видео</textPath>`
    return (
        <div className={classNames(styles.btn)}>
            <div style={{ width: '100%', height: '100%' }} className='relative flex aln-center jfy-center'>
                {/* <span className={classNames(styles.text, 'text-color-white fs-20 fw-900')}>Открыть видео открыть видео</span> */}
                <Image className={styles.play} src={play} alt='' />
                <div className={styles.bg}></div>
                <svg id="rotating-text" viewBox="0 0 500 500">
                    <defs>
                        <path d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250" id="circle">
                        </path>
                    </defs>
                    <text dy='70' dangerouslySetInnerHTML={{ __html: textPath }}></text>
                </svg>
            </div>
        </div>
    );
};

export default PlayButton;