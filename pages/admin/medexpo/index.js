import React from 'react';
import Header from '../Header';
import Sidebar from '../Sidebar';

const index = () => {
    return (
        <div>
            <Header path='medexpo' />
            <div>
                <Sidebar />

            </div>
        </div>
    );
};

export default index;