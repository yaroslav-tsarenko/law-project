import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/icons/logo.svg';
import styles from './Header.module.scss';
import CallButton from '../call-button/CallButton';
import { RxHamburgerMenu } from "react-icons/rx";
import { LiaTimesSolid } from "react-icons/lia";
import { Fade, Slide } from "react-awesome-reveal";

const Header: React.FC = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <>
            {!isMenuOpen && (
                <Fade>
                    <header className={styles.header}>
                        <section className={styles.headerSection}>
                            <button className={styles.burgerButton} onClick={toggleMenu}>
                                <RxHamburgerMenu className={styles.burgerButtonIcon}/>
                            </button>
                            <Link to={"/"}>
                                <Logo/>
                            </Link>
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

                </Fade>

            )}
            {isMenuOpen && (
                    <div className={styles.burgerMenu}>
                        <button className={styles.closeButton} onClick={toggleMenu}>
                            <LiaTimesSolid className={styles.closeButtonIcon}/>
                        </button>
                        <Link className={styles.headerNavButton} to={"/"} onClick={toggleMenu}>Послуги</Link>
                        <Link className={styles.headerNavButton} to={"/"} onClick={toggleMenu}>Географія</Link>
                        <Link className={styles.headerNavButton} to={"/"} onClick={toggleMenu}>Переваги</Link>
                        <Link className={styles.headerNavButton} to={"/"} onClick={toggleMenu}>Історії</Link>
                        <Link className={styles.headerNavButton} to={"/"} onClick={toggleMenu}>Ліцензія</Link>
                        <Link className={styles.headerNavButton} to={"/"} onClick={toggleMenu}>Часті питання</Link>
                        <Link className={styles.headerNavButton} to={"/"} onClick={toggleMenu}>Часті контакти</Link>
                    </div>

            )}
        </>
    );
};

export default Header;