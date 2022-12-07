import React from 'react';

const OrgStafs = () => {
    const style = {
        backgroundImage: 'url(/bg-image.png)'
    }
    return (
        <div>
            <div style={style} className="container ">
                <div className='max-width-50pe flex flex-column pl-70 pt-70'>
                    <span className='fs-60 fw-700 pb-100 text-color-red'>
                        Организационные
                        материалы
                    </span>
                    <span className='fs-20 text-color-white'>Пожалуйста, ознакомьтесь с важными пунктами при подготовке к выставке: </span>
                    <ul className='fs-20 text-color-white pb-260'>
                        <li>заказ дополнительного оборудования;</li>
                        <li>доставка и таможенная очистка грузов;</li>
                        <li>дни монтажа;
                        </li>
                        <li>часы работы выставки и т.д.</li>
                    </ul>
                </div>
                <button className='fs-48 pl-40 pr-40 pt-5 pb-5 fw-700 text-color-white bg-color-red '>СКАЧАТЬ ПРЕСС-РЕЛИЗ</button>
            </div>
        </div>
    );
};

export default OrgStafs;