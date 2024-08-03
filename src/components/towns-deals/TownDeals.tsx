import React from 'react';
import styles from "./TownDeals.module.scss"
import {ReactComponent as UkrainianMap} from "../../assets/images/ukrainemap.svg";
import ArgumentPoint from "../arg-point/ArgumentPoint";
import {Fade} from "react-awesome-reveal";

const TownDeals = () => {
    return (
        <div className={styles.townDealsWrapper}>
            <Fade>
                <h1>Допомагаю розв’язати питання в <span>будь-якому місті</span> України</h1>
            </Fade>
            <div className={styles.townDealsContent}>
                <Fade>
                <section>
                        <ArgumentPoint description="Офлайн працюю для клієнтів в Києві та Київській області"/>
                        <ArgumentPoint
                            description="Онлайн консультую по всій Україні: Одеса, Миколаїв, Чернігів, Львів, Закарпаття тощо."/>
                        <ArgumentPoint description="Представництво в суді в будь-якому регіоні країни онлайн"/>
                    </section>
                </Fade>

                <Fade>
                    <UkrainianMap className={styles.mapIllustration}/>
                </Fade>
            </div>
        </div>
    );
};

export default TownDeals;