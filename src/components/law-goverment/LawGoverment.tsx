import React from 'react';
import styles from "./LawGoverment.module.scss";
import {ReactComponent as LawGovermentIcon} from "../../assets/images/goverment-logo.svg";

const LawGoverment = () => {
    return (
        <div className={styles.lawGovermentWrapper}>
            <div className={styles.lawGovermentContainer}>
                <div className={styles.lawGovermentContainerContent}>
                    <LawGovermentIcon className={styles.lawGovermentIcon}/>
                    <section>
                        <h4>РАДА АДВОКАТІВ МІСТА КИЄВА</h4>
                        <hr/>
                        <h4>КВАЛІФІКАЦІЙНО-ДИСЦИПЛІНАРНА КОМІСІЯ АДВОКАТУРИ МІСТА КИЄВА</h4>
                        <hr/>
                        <h4>ЦЕНТР СТАЖУВАННЯ ТА ПІДВИЩЕННЯ КВАЛІФІКАЦІЇ</h4>
                    </section>
                </div>
            </div>
            <div className={styles.lawGovermentCredentials}>
                <section>
                    <p>Номер Свідотцтва:</p>
                    <p>2453</p>
                </section>
                <section>
                    <p>Дата видачи свідоцтва:</p>
                    <p>26.01.2006</p>
                </section>
                <section>
                    <p>Номер рішення:</p>
                    <p>27-22-25</p>
                </section>
                <section>
                    <p>Дата прийняття рішення:</p>
                    <p>26.01.2006</p>
                </section>
                <section>
                    <p>Організація яка прийняла рішення:</p>
                    <p>Київська міська КДКА</p>
                </section>
                <section>
                    <p>Робоча адреса:</p>
                    <p>вул.Дорогожицька, 18, кв. 43, м. Київ, 04112</p>
                </section>
                <section>
                    <p>Робочі телефони</p>
                    <p>098 102 0808, 044 592 0707</p>
                </section>
                <section>
                    <p>Вид практики:</p>
                    <p>Індивідуально</p>
                </section>

            </div>
        </div>
    );
};

export default LawGoverment;