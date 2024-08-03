import React, {FC} from 'react';
import styles from './CheckMark.module.scss';

interface CustomCheckBoxProps {
    text?: string;
}

const CheckMark: FC<CustomCheckBoxProps> = ({text}) => {
    return (
        <div className={styles.checkboxContainer}>
            <div className={styles.checkboxWrapper}>
                <input type="checkbox" id="morning-checkbox" className={styles.inpCbx}/>
                <label htmlFor="morning-checkbox" className={styles.cbx}>
        <span>
          <svg width="12px" height="10px">
            <use xlinkHref="#check-symbol"></use>
          </svg>
        </span>
                </label>
                <svg className={styles.inlineSvg}>
                    <symbol id="check-symbol" viewBox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                    </symbol>
                </svg>
            </div>
            <p>{text}</p>
        </div>
    );
};

export default CheckMark;
