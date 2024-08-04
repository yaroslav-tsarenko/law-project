import React, {FC} from 'react';
import styles from "./FrequentlyQuestionItem.module.scss";
import {Fade, Slide} from "react-awesome-reveal";

interface FrequentlyQuestionItemProps {
    question: string;
    answer: string;
}

const FrequentlyQuestionItem: FC<FrequentlyQuestionItemProps> = ({question, answer}) => {
    return (
        <Slide direction="left" duration={1000}>
            <div className={styles.frequentlyQuestionItem}>
                <Fade>
                    <h1>{question}</h1>
                    <p>{answer}</p>
                </Fade>
            </div>
        </Slide>
    );
};

export default FrequentlyQuestionItem;