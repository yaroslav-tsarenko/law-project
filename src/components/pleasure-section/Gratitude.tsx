import React from 'react';
import styles from './Gratitude.module.scss';
import {Link} from "react-router-dom";
import {Fade, Slide} from "react-awesome-reveal";

const Gratitude = () => {
    return (
        <div className={styles.gratitudeWrapper}>
            <Fade>
                <h1>Дякую за <span>заявку!</span></h1>
            </Fade>
            <Slide>
                <Link className={styles.homeLink} to={"/"}>Повернутися на головну</Link>
            </Slide>
        </div>
    );
};

export default Gratitude;