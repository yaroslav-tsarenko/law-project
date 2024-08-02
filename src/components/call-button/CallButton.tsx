import React from 'react';
import {ReactComponent as CallIcon} from "../../assets/icons/call-icon.svg";
import styles from "./CallButton.module.scss";

const CallButton = () => {

    const handleCall = () => {
        window.location.href = "tel:+380441234567";
    };

    return (
        <button className={styles.button} onClick={handleCall}>
            <CallIcon/>
            <section>
                <p>Дзвоніть</p>
                <h1>+380 44 123 45 67</h1>
            </section>
        </button>
    );
};

export default CallButton;