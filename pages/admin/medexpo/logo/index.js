import classNames from 'classnames';
import Button from 'components/Button/Button';
import Input from 'components/Input/Input';
import Loader from 'components/Loader/Loader';
import Header from 'pages/admin/Header';
import Sidebar from 'pages/admin/Sidebar';
import React, { useState } from 'react';

const Content = () => {
    const [loading, setLoading] = useState(false)
    const submit = (e) => {
        e.preventDefault()
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, [2000])
    }
    return (
        <>
            <div className='flex'>
                <Sidebar menu='logo' />
                <div className='flex flex-grow-1  flex-column aln-center gap-20 pt-40'>
                    <div className='flex'>
                        <span>logo</span>
                    </div>
                    <form onSubmit={submit} className={classNames('form flex flex-column gap-10')}>
                        <Input />
                        <Button>
                            Сохранить
                        </Button>
                    </form>
                </div>
            </div>
            <Loader loading={loading} />
        </>
    )
}

const index = () => {

    return (
        <div>
            <Header path='medexpo' />
            <Content />
        </div>
    );
};

export default index;