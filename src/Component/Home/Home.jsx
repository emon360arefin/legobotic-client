import React from 'react';
import HeroSection from './HeroSection';
import SecondSection from './SecondSection';
import SectionOne from './SectionOne/SectionOne';
import ExtraOne from './ExtraOne/ExtraOne';
import ExtraTwo from './ExtraTwo/ExtraTwo';
import useTitle from '../Hooks/useTitle';

const Home = () => {
    useTitle("Home")
    return (
        <div>
            <HeroSection></HeroSection>
            <SectionOne></SectionOne>
            <SecondSection></SecondSection>
            <ExtraOne></ExtraOne>
            <ExtraTwo></ExtraTwo>
        </div>
    );
};

export default Home;