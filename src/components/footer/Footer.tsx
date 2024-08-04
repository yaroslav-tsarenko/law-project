import React from 'react';
import styles from "./Footer.module.scss";
import {ReactComponent as Logo} from "../../assets/icons/logo.svg";
import {ReactComponent as Schedule} from "../../assets/images/schedule-illustration.svg";
import CallButton from "../call-button/CallButton";
import CallButtonFooter from "../call-button-footer/CallButtonFooter";
import SocialMedia from "../social-media/SocialMedia";
import {Link} from "react-router-dom";
import {Fade, Slide} from "react-awesome-reveal";

const Footer = () => {
    return (
        <Fade>
            <div className={styles.footerWrapper}>
                <Slide>
                    <div className={styles.footerContentUpper}>
                        <section>
                            <Logo className={styles.footerLogoIcon}/>
                            <h1>Щур Володимир Анатолійович</h1>
                            <p>Є питання — є рішення: 20 років знаходжу вихід там, де інші бачать глухий кут</p>
                        </section>
                        <section>
                            <Link to={"/"} className={styles.footerLink}>Послуги</Link>
                            <Link to={"/"} className={styles.footerLink}>Географія</Link>
                            <Link to={"/"} className={styles.footerLink}>Про юриста</Link>
                            <Link to={"/"} className={styles.footerLink}>Переваги</Link>
                            <Link to={"/"} className={styles.footerLink}>Історії</Link>
                            <Link to={"/"} className={styles.footerLink}>Ліцензія</Link>
                            <Link to={"/"} className={styles.footerLink}>Часті питання</Link>
                            <Link to={"/"} className={styles.footerLink}>Контакти</Link>
                        </section>
                        <section>
                            <h3>Графік Роботи</h3>
                            <Schedule/>
                        </section>
                        <section>
                            <h3>Адреса офісу:</h3>
                            <Link to={"/"} className={styles.footerAddressLink}>
                                м. Київ, 04112
                                вул. Дорогожицька 18, кв.43
                            </Link>
                        </section>
                        <section>
                            <h3>Як зв'язатися:</h3>
                            <CallButtonFooter/>
                            <SocialMedia/>
                        </section>
                    </div>
                </Slide>
                <Slide>
                    <div className={styles.footerContentBottom}>
                        <p>© 2024. Всі права захищено. Копіювання матеріалів тільки з дозволу правовласника.</p>
                        <a href="#">Політика конфіденційності</a>
                    </div>
                </Slide>
            </div>
        </Fade>

    );
};

export default Footer;