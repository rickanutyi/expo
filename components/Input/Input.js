import React from 'react';
import styles from './input.module.scss'
import classNames from 'classnames';



const Input = (props) => {
    return (
        <div>
            <input className={classNames(styles.input)} {...props} />
        </div>
    );
};

export default Input;