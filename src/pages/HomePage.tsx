import React from 'react';
import Header from "../components/header/Header";
import Hero from "../components/hero-section/Hero";
import LegalServices from "../components/legal-services/LegalServices";
import TownDeals from "../components/towns-deals/TownDeals";
import QuestionToAction from "../components/question-to-action/QuestionToAction";
import HeroDescription from "../components/hero-description/HeroDescription";
import WhyRecommend from "../components/why-recomendation/WhyRecommend";
import ClientHistory from "../components/client-history/ClientHistory";
import LawGoverment from "../components/law-goverment/LawGoverment";

const HomePage = () => {
    return (
        <>
            <Header/>
            <Hero/>
            <LegalServices/>
            <TownDeals/>
            <QuestionToAction/>
            <HeroDescription/>
            <WhyRecommend/>
            <QuestionToAction/>
            <ClientHistory/>
            <QuestionToAction/>
            <LawGoverment/>
        </>
    );
};

export default HomePage;