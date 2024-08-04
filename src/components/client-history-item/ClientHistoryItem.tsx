import React, {FC} from 'react';
import styles from "./ClientHistoryItem.module.scss";
import {ReactComponent as ClientIcon} from "../../assets/icons/history-icon.svg";

interface ClientHistoryItemProps {
    title: string;
    image: string;
    history: string;
    clientName: string;
}

const ClientHistoryItem: FC<ClientHistoryItemProps> = ({title, image, history, clientName}) => {
    return (
        <div className={styles.clientHistoryItemWrapper}>
            <div className={styles.clientHistoryItemHeader}>
                <section>
                    <img src={image} alt="client"/>
                    <h2>{clientName}</h2>
                </section>
                <ClientIcon className={styles.clientIcon}/>
            </div>
            <div className={styles.clientHistoryItemTitle}>{title}</div>
            <div className={styles.clientHistoryItemHistory}>{history}</div>
        </div>
    );
};

export default ClientHistoryItem;