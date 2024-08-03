import React from 'react';
import Header from "../components/header/Header";
import Hero from "../components/hero-section/Hero";
import LegalServices from "../components/legal-services/LegalServices";
import TownDeals from "../components/towns-deals/TownDeals";

const HomePage = () => {
    return (
        <>
            <Header/>
            <Hero/>
            <LegalServices/>
            <TownDeals/>
        </>
    );
};

export default HomePage;