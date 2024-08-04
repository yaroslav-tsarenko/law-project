import React from 'react';
import styles from "./HeroDescription.module.scss";
import HeroImage from "../../assets/images/hero-photo-description.png";
import {Fade, Slide} from "react-awesome-reveal";

const HeroDescription = () => {
    return (
        <Fade>
            <div className={styles.heroDescriptionWrapper}>
                <h1 className={styles.heroDescriptionTitle}>Професіонал, що <span>переймається</span> справами людей
                </h1>
                <div className={styles.heroDescriptionContent}>
                        <img src={HeroImage} alt="Hero Image"/>
                    <section className={styles.heroDescriptionText}>
                        <Fade  duration={200}>
                            <h1>Юрист з <span className={styles.heroDescriptionTitleLabel}>нестандартним</span> підходом
                                до
                                складних справ</h1>
                        </Fade>
                        <Fade  duration={400}>
                            <p>
                                Я досвідчений юрист з 20-річним стажем роботи. Моє професійне кредо просте:
                                <span>
                        "Є питання — є рішення".
                        </span>
                            </p>
                        </Fade>
                        <Fade  duration={600}>
                            <p>
                                Я спеціалізуюся практично на всіх напрямках юридичної практики, завжди дивлячись на
                                проблему
                                з погляду її вирішення. За роки роботи я зрозумів, що варіант вирішення існує завжди.
                                Навіть коли великі компанії відмовляються від справи, я берусь за неї та досягаю
                                позитивного
                                результату.
                            </p>
                        </Fade>
                        <Fade  duration={800}>
                            <p>
                                Мій підхід — використовувати навіть найменший шанс на успіх. Я не боюсь складних справ,
                                навпаки, вони мотивують мене шукати нестандартні рішення.
                            </p>
                        </Fade>
                        <Fade  duration={1000}>
                            <p>
                                Моя мета — не просто надати юридичну консультацію, а
                                знайти <span>ефективне розв'язання</span>
                                вашої проблеми. Кожен клієнт для мене — це новий виклик і можливість допомогти.
                                З якою б юридичною проблемою ви не зіткнулися, я готовий взятися за її вирішення і
                                знайти найкоротший шлях до результату.
                            </p>
                        </Fade>
                        <Fade  duration={1200}>
                            <h5>
                                З повагою, юрист, адвокат
                            </h5>
                        </Fade>
                        <Fade  duration={1400}>
                            <h3>
                                Щур Володимир Анатолійович
                            </h3>
                        </Fade>
                    </section>
                </div>
            </div>
        </Fade>
    );
};

export default HeroDescription;