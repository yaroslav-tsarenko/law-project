import React, {FC} from 'react';
import styles from "./ArgumentPoint.module.scss";
import {ReactComponent as CheckMarkIcon} from "../../assets/icons/checkmark.svg";
import {Slide} from "react-awesome-reveal";

interface ArgumentPointProps {
    description: string;
}

const ArgumentPoint: FC<ArgumentPointProps> = ({description}) => {
    return (
        <Slide>
            <div className={styles.argumentWrapper}>
                <CheckMarkIcon/>
                <p>{description}</p>
            </div>

        </Slide>
    );
};

export default ArgumentPoint;