import React from 'react';
import s from './Header.module.css';
import logo from '../../img/logo.png';

const Header = () => {
    return (
    <header className={s.header}>
        <img src={logo} alt =""></img>
        <div className={s.text}>
            <span>Первая социальная сеть</span>
        </div>
    </header>
    )
}

export default Header;