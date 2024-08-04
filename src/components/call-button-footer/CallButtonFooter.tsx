import React from 'react';
import styles from "./CallButtonFooter.module.scss"
import {ReactComponent as Phone} from "../../assets/icons/call-icon.svg";

const CallButtonFooter = () => {
    return (
        <div className={styles.callButtonFooter}>
            <Phone className={styles.callButtonIcon}/>
            <section>
                <h4>Дзвоніть:</h4>
                <h6>+380 44 123 45 67</h6>
            </section>
        </div>
    );
};

export default CallButtonFooter;