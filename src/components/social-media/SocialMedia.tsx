import React from 'react';
import styles from "./SocialMedia.module.scss"
import {Link} from "react-router-dom";
import {ReactComponent as Facebook} from "../../assets/icons/facebook-icon.svg";
import {ReactComponent as Telegram} from "../../assets/icons/telegram-icon.svg";
import {ReactComponent as Viber} from "../../assets/icons/viber-icon.svg";
import {ReactComponent as Whatsapp} from "../../assets/icons/whatsapp-icon.svg";

const SocialMedia = () => {
    return (
        <div className={styles.socialMediaContainerContent}>
            <Link to={"/"}><Facebook/></Link>
            <Link to={"/"}><Telegram/></Link>
            <Link to={"/"}><Viber/></Link>
            <Link to={"/"}><Whatsapp/></Link>
        </div>
    );
};

export default SocialMedia;