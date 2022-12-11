import React from 'react';
import Image from 'next/image';

import TopBar from 'components/TopBar/TopBar';
import med from 'assets/icons/med.svg'

const index = () => {
    return (
        <div>
            <TopBar />
            <div>
                <div>
                    <Image src={med} alt='' />
                    <span className='text-upper-case'>пресс релиз</span>
                </div>
            </div>
        </div>
    );
};

export default index;