import React, { useEffect, useState } from 'react';
import 'keen-slider/keen-slider.min.css';
import styles from "./ClientHistory.module.scss";
import ClientHistoryItem from "../client-history-item/ClientHistoryItem";
import AndriyAvatar from "../../assets/images/anriy-avatar.png";
import VadymAvatar from "../../assets/images/vadym-avatar.png";
import SergiyAvatar from "../../assets/images/sergiy-avatar.png";
import { useKeenSlider } from "keen-slider/react";

const ClientHistory = () => {
    const [isSliderEnabled, setIsSliderEnabled] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            setIsSliderEnabled(window.innerWidth <= 1440);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const [sliderRef, slider] = useKeenSlider({
        slides: {
            perView: 1,
            spacing: 10,
        },
        breakpoints: {
            '(min-width: 1300px)': {
                slides: {
                    perView: 3,
                },
            },
        },
        mode: 'snap',
        loop: true,
        slideChanged(s) {
            const dots = document.querySelectorAll(`.${styles.paginationDot}`);
            dots.forEach((dot, idx) => {
                dot.classList.toggle(styles.active, idx === s.track.details.rel);
            });
        },
    });

    return (
        <div className={styles.clientHistoryWrapper}>
            <h1><span>Історія</span> клієнтів</h1>
            {isSliderEnabled ? (
                <div ref={sliderRef} className={`keen-slider ${styles.clientHistoryContent}`}>
                    <div className="keen-slider__slide">
                        <ClientHistoryItem title="Справедливість відновлено: повернення законної спадщини" image={AndriyAvatar}
                                           history="Після смерті батька виявилося, що він заповів усе майно своїй другій дружині,
                                           з якою прожив лише рік. Я був у відчаї, адже залишився без нічого. Володимир
                                           Анатолійович взявся за мою справу, коли інші юристи відмовлялися. Він знайшов
                                           документи, які доводили, що заповіт був складений під тиском. Завдяки його
                                           професіоналізму, суд визнав заповіт недійсним, і я отримав свою законну
                                           частку спадщини."
                                           clientName="Андрій К."/>
                    </div>
                    <div className="keen-slider__slide">
                        <ClientHistoryItem title="Від звинувачення до виправдання: перемога у складній справі про ДТП" image={VadymAvatar}
                                           history="Мене звинуватили у серйозному ДТП, хоча я був упевнений, що не
                                           порушував правил. Страхова відмовлялася виплачувати компенсацію, а
                                           поліція наполягала на моїй провині. Володимир Анатолійович провів власне
                                           розслідування, знайшов свідків та відеозаписи з навколишніх камер. Він довів
                                           мою невинуватість у суді, і тепер страхова компанія не лише виплатила
                                           компенсацію, але й покрила всі судові витрати."
                                           clientName="Вадим З."/>
                    </div>
                    <div className="keen-slider__slide">
                        <ClientHistoryItem title="Захист прав призовника: законне звільнення від військової служби" image={SergiyAvatar}
                                           history="Коли мене призвали на військову службу, я був у розпачі.
                                           Маю хронічне захворювання, яке не дозволяє мені служити,
                                           але військкомат відмовлявся це враховувати. Володимир Анатолійович
                                           допоміг мені зібрати всі необхідні медичні документи, організував
                                           додаткове обстеження та представляв мої інтереси у військкоматі.
                                           Завдяки його наполегливості та знанню законодавства, мене визнали
                                           непридатним до військової служби за станом здоров'я. Я вдячний за
                                           можливість продовжувати підтримувати країну своєю цивільною роботою."
                                           clientName="Сергій С."/>
                    </div>
                </div>
            ) : (
                <div className={styles.clientHistoryContent}>
                        <ClientHistoryItem title="Справедливість відновлено: повернення законної спадщини" image={AndriyAvatar}
                                           history="Після смерті батька виявилося, що він заповів усе майно своїй другій дружині,
                                           з якою прожив лише рік. Я був у відчаї, адже залишився без нічого. Володимир
                                           Анатолійович взявся за мою справу, коли інші юристи відмовлялися. Він знайшов
                                           документи, які доводили, що заповіт був складений під тиском. Завдяки його
                                           професіоналізму, суд визнав заповіт недійсним, і я отримав свою законну
                                           частку спадщини."
                                           clientName="Андрій К."/>
                        <ClientHistoryItem title="Від звинувачення до виправдання: перемога у складній справі про ДТП" image={VadymAvatar}
                                           history="Мене звинуватили у серйозному ДТП, хоча я був упевнений, що не
                                           порушував правил. Страхова відмовлялася виплачувати компенсацію, а
                                           поліція наполягала на моїй провині. Володимир Анатолійович провів власне
                                           розслідування, знайшов свідків та відеозаписи з навколишніх камер. Він довів
                                           мою невинуватість у суді, і тепер страхова компанія не лише виплатила
                                           компенсацію, але й покрила всі судові витрати."
                                           clientName="Вадим З."/>
                        <ClientHistoryItem title="Захист прав призовника: законне звільнення від військової служби" image={SergiyAvatar}
                                           history="Коли мене призвали на військову службу, я був у розпачі.
                                           Маю хронічне захворювання, яке не дозволяє мені служити,
                                           але військкомат відмовлявся це враховувати. Володимир Анатолійович
                                           допоміг мені зібрати всі необхідні медичні документи, організував
                                           додаткове обстеження та представляв мої інтереси у військкоматі.
                                           Завдяки його наполегливості та знанню законодавства, мене визнали
                                           непридатним до військової служби за станом здоров'я. Я вдячний за
                                           можливість продовжувати підтримувати країну своєю цивільною роботою."
                                           clientName="Сергій С."/>
                </div>
            )}
            {isSliderEnabled && (
                <div className={styles.pagination}>
                    <div className={styles.paginationDot}></div>
                    <div className={styles.paginationDot}></div>
                    <div className={styles.paginationDot}></div>
                </div>
            )}
        </div>
    );
};

export default ClientHistory;