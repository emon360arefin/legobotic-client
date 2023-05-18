import React from 'react';
import HeroSection from './HeroSection';
import SecondSection from './SecondSection';
import SectionOne from './SectionOne/SectionOne';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <SectionOne></SectionOne>
            <SecondSection></SecondSection>
        </div>
    );
};

export default Home;