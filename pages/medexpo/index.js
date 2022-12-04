import Image from 'next/image';
import React from 'react';
import Sponsors from 'components/Sponsors';
import main_sponsor from 'assets/images/sponsorbanner.png'
import TopBar from 'components/TopBar/TopBar';
import Banner from 'components/Banner/Banner';
import classNames from 'classnames';
import styles from './medexpo.module.scss'
import Future from 'components/Future/Future';
import Program from 'components/Program/Program';
import Video from 'components/VideoComponent/Video';
import Footer from 'components/Footer/Footer';

const index = () => {

    const cards = [
        { title: 'Медицинский туризм', items: ['медицинские центры и клиники', 'центры эстетической медицины', 'оздоровительный туризм'] },
        { title: 'Медицинский туризм', items: ['медицинские центры и клиники', 'центры эстетической медицины', 'оздоровительный туризм'] },
        { title: 'Медицинский туризм', items: ['медицинские центры и клиники', 'центры эстетической медицины', 'оздоровительный туризм'] },
        { title: 'Медицинский туризм', items: ['медицинские центры и клиники', 'центры эстетической медицины', 'оздоровительный туризм'] },
        { title: 'Медицинский туризм', items: ['медицинские центры и клиники', 'центры эстетической медицины', 'оздоровительный туризм'] },
        { title: 'Медицинский туризм', items: ['медицинские центры и клиники', 'центры эстетической медицины', 'оздоровительный туризм', 'медицинские центры и клиники', 'центры эстетической медицины', 'оздоровительный туризм'] },
    ]

    const styling = {
        backgroundImage: `url(/bg2.png)`,
        backgroundPosition: 'bottom',
        backgroundRepeat: 'no-repeat'
    }

    return (
        <div>
            <TopBar />
            <Banner />
            <Sponsors banner={'banner'} />

            {/* main sponsor image */}
            <div className='container'>
                <Image src={main_sponsor} alt='main sponsor' />
            </div>

            {/* о выставке  */}

            <div>
                <div className="container flex jfy-between aln-center pl-150 pr-80">
                    <p className='fs-18 text-color-dark-05'>
                        Опытные профессионалы медицинской отрасли, <br /> эстетической медицины, производства <br /> и дистрибуции профессиональной продукции <br /> и оборудования для медицинских <br /> центров поделятся с вами полезными <br /> советами и открытиями в индустрии, новинками в отрасли и опытом.
                    </p>
                    <div ><span className='fs-80 fw-700 text-color-red'>О ВЫСТАВКЕ</span></div>
                </div>
            </div>
            <Video />
            <div className="container">
                <h2 className={classNames('text-color-dark-blue fs-60 fw-600')}>Разделы выставки</h2>
                <div className={classNames(styles.sections_cards, '')}>
                    {
                        cards.map((card, i) => (
                            <div key={i} className={classNames(styles.section_card, 'border-radius-10 mb-15')}>
                                <h4 className={classNames('text-upper-case fw-700 fs-24 text-color-red')}>{card.title}</h4>
                                <ul className="text-color-dark-05">
                                    {
                                        card.items.map((text, i) => (
                                            <li key={i}>{text}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        ))
                    }
                </div>
            </div>
            <Sponsors banner={'banner'} />
            <Future />
            <Program />
            <Sponsors />
            <Footer />
        </div>
    );
};

export default index;