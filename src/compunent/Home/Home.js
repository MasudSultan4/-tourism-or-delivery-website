import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import About from './../About/About';
import Tours from './../AllToursArea/Tours';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Tours></Tours>
           <About></About>
           <Contact></Contact>
        </div>
    );
};

export default Home;