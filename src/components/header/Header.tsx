import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/icons/logo.svg';
import styles from './Header.module.scss';
import CallButton from '../call-button/CallButton';
import {RxHamburgerMenu} from "react-icons/rx";

const Header = () => {
    return (
        <header className={styles.header}>
            <section className={styles.headerSection}>
                <button className={styles.burgerButton}>
                    <RxHamburgerMenu className={styles.burgerButtonIcon}/>
                </button>
                <Logo/>
            </section>
            <nav className={styles.headerNavButtons}>
                <Link className={styles.headerNavButton} to={"/"}>Послуги</Link>
                <Link className={styles.headerNavButton} to={"/"}>Географія</Link>
                <Link className={styles.headerNavButton} to={"/"}>Переваги</Link>
                <Link className={styles.headerNavButton} to={"/"}>Історії</Link>
                <Link className={styles.headerNavButton} to={"/"}>Ліцензія</Link>
                <Link className={styles.headerNavButton} to={"/"}>Часті питання</Link>
                <Link className={styles.headerNavButton} to={"/"}>Часті контакти</Link>
            </nav>
            <CallButton/>
        </header>
    );
};

export default Header;