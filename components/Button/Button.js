import React from 'react';
import styles from './button.module.scss';
import classNames from 'classnames';

const Button = ({ children, ...props }) => {
    return (
        <button className={classNames(styles.button)} {...props}>
            {children}
        </button>
    );
};

export default Button;