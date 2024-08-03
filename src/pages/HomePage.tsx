import React from 'react';
import Header from "../components/header/Header";
import Hero from "../components/hero-section/Hero";
import LegalServices from "../components/legal-services/LegalServices";
import TownDeals from "../components/towns-deals/TownDeals";
import QuestionToAction from "../components/question-to-action/QuestionToAction";
import HeroDescription from "../components/hero-description/HeroDescription";

const HomePage = () => {
    return (
        <>
            <Header/>
            <Hero/>
            <LegalServices/>
            <TownDeals/>
            <QuestionToAction/>
            <HeroDescription/>
            <QuestionToAction/>
            <QuestionToAction/>
        </>
    );
};

export default HomePage;