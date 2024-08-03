import React from 'react';
import styles from "./WhyRecommend.module.scss";
import RecommendationItem from "../recommendation-item/RecommendationItem";
import {ReactComponent as ExperienceIcon} from "../../assets/icons/skill-icon.svg";
import { ReactComponent as LawConstructorIcon } from '../../assets/icons/lawyer-constructor.svg';
import {ReactComponent as ResultativityIcon} from "../../assets/icons/results-icon.svg";
import {ReactComponent as WideSpectreServices} from "../../assets/icons/wide-spectre-services.svg";
import {ReactComponent as Accesibility} from "../../assets/icons/accessibility-icon.svg";
import {ReactComponent as Innovations} from "../../assets/icons/innovations-icon.svg";

const WhyRecommend = () => {
    return (
        <div className={styles.whyRecommendWrapper}>
            <h1>Чому мене <span>рекомендують:</span></h1>
            <div className={styles.whyRecommendContent}>
                <RecommendationItem
                    icon={<ExperienceIcon/>}
                    text="20 років успішної юридичної практики у різноманітних галузях права"
                    title="Досвід"/>
                <RecommendationItem
                    icon={<LawConstructorIcon/>}
                    text="Створюю унікальну стратегію для кожної справи, враховуючи всі нюанси"
                    title="Юридичний конструктор"/>
                <RecommendationItem
                    icon={<ResultativityIcon/>}
                    text="Високий відсоток виграних справ, навіть у складних та нестандартних ситуаціях"
                    title="Результативність"/>
                <RecommendationItem
                    icon={<WideSpectreServices/>}
                    text="Компетентність у багатьох галузях права, що дозволяє розв'язувати комплексні юридичні питання"
                    title="Широкий спектр послуг"/>
                <RecommendationItem
                    icon={<Accesibility/>}
                    text="Постійний зв'язок з клієнтом, оперативні консультації та регулярні звіти про перебіг справи"
                    title="Доступність"/>
                <RecommendationItem
                    icon={<Innovations/>}
                    text="Використання сучасних технологій та нестандартних юридичних підходів для досягнення найкращих результатів."
                    title="Інноваційність"/>
            </div>
        </div>
    );
};

export default WhyRecommend;