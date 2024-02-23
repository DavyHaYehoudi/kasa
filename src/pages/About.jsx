import React from 'react';
import AboutList from '../components/AboutList';
import Banner from "../shared/Banner"

const About = () => {
    return (
        <div className="about-container">
           <Banner page="about" />
           <AboutList />
        </div>
    );
};

export default About;