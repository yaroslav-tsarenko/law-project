import React, {FC} from 'react';
import styles from "./Hero.module.scss";
import LawyerImage from '../../assets/images/lawyer-image.png';
import DiscussProblem from "../discuss-problem/DiscussProblem";
import {Fade} from "react-awesome-reveal";
import {ReactComponent as ExperienceIcon} from "../../assets/icons/experience-icon.svg";
import {ReactComponent as SafetyIcon} from "../../assets/icons/safety-icon.svg";
import {ReactComponent as HumanityIcon} from "../../assets/icons/heart-icon.svg";
import Benefit from "../benefit/Benefit";

const Hero: FC = () => {
    return (
        <Fade>
            <div className={styles.heroSection}>
                <section className={styles.heroDescriptionSection}>
                    <h1 className={styles.heroTitle}>Щур Володимир Анатолійович</h1>
                    <p className={styles.heroDescription}>Юрист, що захищає права українців
                        вже <span>20 років поспіль</span></p>
                    <DiscussProblem/>
                    <div className={styles.benefitsWrapper}>
                        <Benefit title="Досвід" icon={<ExperienceIcon/>}/>
                        <Benefit title="Допомога" icon={<SafetyIcon/>}/>
                        <Benefit title="Людяність" icon={<HumanityIcon/>}/>
                    </div>
                </section>
                <img src={LawyerImage} alt="Lawyer" className={styles.lawyerImage}/>
            </div>
        </Fade>
    );
};

export default Hero;