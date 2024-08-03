import React from 'react';
import {Fade} from "react-awesome-reveal";
import styles from "./LegalServices.module.scss";
import Service from "../service/Service";
import LawyerEnviroment from "../../assets/images/lawyer-enviroment.png";
import FamilyDeals from "../../assets/images/family-deals.png";
import BuildingDeals from "../../assets/images/bulding-deals.png";
import MilitaryDeals from "../../assets/images/military-deals.png";
import BankDeals from "../../assets/images/bank-deals.png";
import AdminDeals from "../../assets/images/admin-deals.png";
import CriminalDeals from "../../assets/images/criminal-deals.png";
import ConflictDeals from "../../assets/images/conflicts-deals.png";
import LawAnalys from "../../assets/images/law-analys.png";
import RetrimentDeals from "../../assets/images/retriment-deals.png";
import DoingDeals from "../../assets/images/doing-deals.png";
import CrashDeals from "../../assets/images/crash-deals.png";

const LegalServices = () => {
    return (
        <div className={styles.legalServicesWrapper}>
            <Fade>
                <h1>Юридичні послуги у <span>всіх галузях</span> права</h1>
            </Fade>
            <div className={styles.legalServicesContent}>
                <Service title="Представництво в суді" image={LawyerEnviroment}/>
                <Service title="Сімейні справи та спадщина" image={FamilyDeals}/>
                <Service title="Супровід операцій з нерухомістю" image={BuildingDeals}/>
                <Service title="Військові справи (ТЦК)" image={MilitaryDeals}/>
                <Service title="Банківські та боргові справи" image={BankDeals}/>
                <Service title="Адміністративні справи (КАСУ, КпАП)" image={AdminDeals}/>
                <Service title="Кримінальні справи" image={CriminalDeals}/>
                <Service title="Претензії та позови" image={ConflictDeals}/>
                <Service title="Складання та правовий аналіз договорів" image={LawAnalys}/>
                <Service title="Пенсійні справи" image={RetrimentDeals}/>
                <Service title="За та проти виконавчих проваджень" image={DoingDeals}/>
                <Service title="Юридична допомога при ДТП" image={CrashDeals}/>
            </div>
        </div>
    );
};

export default LegalServices;