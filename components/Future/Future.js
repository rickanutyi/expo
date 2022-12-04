import React from 'react';
import classNames from 'classnames';

const Future = () => {
    const style = {
        backgroundImage: 'url(/hands.png)',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        // height: 1000
    }
    return (
        <div className="container">
            <div style={style} className=' pt-40 pl-80 pb-40 flex gap-40'>
                <div style={{ maxWidth: '44%' }}>
                    <span className={classNames('fs-80 text-color-white fw-700 m-0')}>Мы строим будущее</span>
                </div>
                <div className='flex flex-column jfy-between gap-200 flex-grow-1'>
                    <div className='flex flex-column gap-5 pr-80'>
                        <span className='fs-80 fw-700 text-color-red'>80%</span>
                        <span className='fs-24 fw-700 text-color-red'>Окупаемость</span>
                        <span style={{ maxWidth: 380 }} className='fs-20 fw-500 text-color-white text-align-center'>Участники положительно оценивают свои инвестиции на выставку</span>
                    </div>
                    <div className='flex flex-column gap-5 pr-80'>
                        <span className='fs-80 fw-700 text-color-red'>80%</span>
                        <span className='fs-24 fw-700 text-color-red'>Окупаемость</span>
                        <span style={{ maxWidth: 380 }} className='fs-20 fw-500 text-color-white text-align-center'>Участники положительно оценивают свои инвестиции на выставку</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Future;