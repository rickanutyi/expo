import Image from 'next/image';
import React from 'react';

import calendar from 'assets/images/calendar2.png'
import map from 'assets/images/map.png'

const BlockFour = () => {
    return (
        <div>
            <div className='bg-color-red pt-20 pb-20'>
                <div className="container pl-80">
                    <span className='fs-48 fw-700 text-color-white'>МЕСТО И ВРЕМЯ</span>
                </div>
            </div>
            <div className="container pl-80 flex relative">
                <div className='flex flex-column jfy-between pt-30'>
                    <Image src={calendar} alt='' />
                    <ul>
                        <li className='fs-24'>4 апреля (вт): 10:00 — 18:00</li>
                        <li className='fs-24'>5 апреля (ср): 10:00 — 18:00</li>
                        <li className='fs-24'>6 апреля (чт): 10:00 — 16:00</li>
                    </ul>
                    <h2 className='fs-40 fw-700 mb-60'>Площадка:</h2>
                    <p style={{ position: 'absolute', bottom: 0 }} className='fs-24'>г. Бишкек, ул. Ахунбаева, 97Манеж физкультурного института(КГАФКиС)</p>
                </div>
                <div>
                    <Image src={map} alt='' />
                </div>
            </div>
        </div>
    );
};

export default BlockFour;