import React, {FC} from 'react';
import styles from "./Service.module.scss";

interface ServiceProps {
    title: string;
    image: string;
}

const Service: FC<ServiceProps> = ({title, image}) => {
    return (
            <div className={styles.serviceWrapper}>
                <img src={image} alt="Image"/>
                <h4>{title}</h4>
            </div>
    );
};

export default Service;