import React, {FC, ReactNode} from 'react';
import styles from "./RecommendationItem.module.scss";
import {Slide} from "react-awesome-reveal";

interface RecommendationItemProps {
    icon: ReactNode;
    title: string;
    text: string;
}

const RecommendationItem: FC<RecommendationItemProps> = ({icon, title, text}) => {
    return (
        <Slide>
            <div className={styles.recommendationItemWrapper}>
                <div className={styles.recommendationItemTitle}>
                    <div className={styles.icon}>
                        {icon}
                    </div>
                    <h3>{title}</h3>
                </div>
                <div className={styles.recommendationItemDescription}>
                    <p>{text}</p>
                </div>
            </div>
        </Slide>
    );
};

export default RecommendationItem;
