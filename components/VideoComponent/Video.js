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
            <div className='flex aln-end overflow-hidden'>
                <div className={styles.left}>
                    {isVideoRunning ?
                        (<iframe
                            width="560"
                            height="310"
                            src="https://www.youtube.com/embed/pq1VLj-_Yhw"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>)
                        : <Image src={video} alt='v' />}
                </div>
                <div style={{ maxWidth: 600 }} className='nowrap'>
                    <span id='movetxt' className=' marqueeStyle  text-color-red fs-24 fw-800 text-upper-case'>&nbsp;Видео-презентация Видео-презентация Видео-презентация</span>
                    <span id='movetxt' className=' marqueeStyle2  text-color-red fs-24 fw-800 text-upper-case'>&nbsp;Видео-презентация Видео-презентация Видео-презентация&nbsp;</span>
                </div>
            </div>
            <div className={styles.right}>
                {!isVideoRunning ? null : <PlayButton />}
                {!isVideoRunning ?
                    (<iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/pq1VLj-_Yhw"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>)
                    : <Image src={video} alt='v' />}
            </div>
        </div>
    );
};

export default Video;