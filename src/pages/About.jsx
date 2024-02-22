import React from 'react';
import Banner from '../components/Banner';
import AboutList from '../components/AboutList';

const About = () => {
    return (
        <div className="about-container">
           <Banner page="about" />
           <AboutList />
        </div>
    );
};

export default About;