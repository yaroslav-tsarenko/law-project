import React from 'react';
import Header from "../components/header/Header";
import Hero from "../components/hero-section/Hero";
import LegalServices from "../components/legal-services/LegalServices";

const HomePage = () => {
    return (
        <>
            <Header/>
            <Hero/>
            <LegalServices/>
        </>
    );
};

export default HomePage;