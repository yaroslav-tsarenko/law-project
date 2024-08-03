import React from 'react';
import styles from "./QuestionToAction.module.scss"
import DiscussProblem from "../discuss-problem/DiscussProblem";
import CheckMark from "../checkmark/CheckMark";
import {Fade, Slide} from "react-awesome-reveal";

const QuestionToAction = () => {
    return (
        <Fade>
            <div className={styles.questionToActionWrapper}>
                <div className={styles.questionToActionContent}>
                    <section>
                        <Slide duration={300}>
                            <h1>У вас є питання, у мене – <span>рішення</span></h1>
                        </Slide>
                        <Slide duration={500}>
                            <p>Щоб отримати відповіді та знайти рішення від професійного юриста, залиште свій номер
                                телефону</p>
                        </Slide>
                    </section>
                    <div className={styles.agreementContent}>
                        <DiscussProblem/>
                        <CheckMark text="Я погоджуюся на обробку персональних даних"/>
                    </div>

                </div>
            </div>
        </Fade>
    );
};

export default QuestionToAction;