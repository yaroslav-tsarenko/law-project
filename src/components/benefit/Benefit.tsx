import React, {FC, ReactNode} from 'react';
import styles from "./Benefit.module.scss";

interface BenefitProps {
    title: string;
    icon: ReactNode;
}

const Benefit: FC<BenefitProps> = ({icon, title}) => {
    return (
        <div className={styles.benefitContainer}>
            <div className={styles.benefitContainerIcon}>
                {icon}
            </div>
            <h3>{title}</h3>
        </div>
    );
};

export default Benefit;