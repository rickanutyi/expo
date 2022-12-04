import Image from 'next/image';
import React, { useState } from 'react';
import video from 'assets/images/video.png'
import styles from './video.module.scss'
import PlayButton from 'components/Buttons/PlayButton';

const Video = () => {
    const [isVideoRunning, setIsVideoRunning] = useState(false);
    const style = {
        backgroundImage: 'url(/video.png)',
        backgroundSize: '100% 100%'
    }
    return (
        <div style={{ height: 600 }} className='container flex relative' >
            <div className='flex aln-end'>
                <div className={styles.left}>
                    {isVideoRunning ? (<iframe width="560" height="315" src="https://www.youtube.com/embed/pq1VLj-_Yhw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>) : <Image src={video} alt='v' />}
                </div>
                <span className='text-color-red fs-24 fw-800 text-upper-case'>Видео-презентация Видео-презентация Видео-презентация</span>
            </div>
            <div className={styles.right}>
                <PlayButton />
                {isVideoRunning ? (<iframe width="560" height="315" src="https://www.youtube.com/embed/pq1VLj-_Yhw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>) : <Image src={video} alt='v' />}
            </div>
        </div>
    );
};

export default Video;