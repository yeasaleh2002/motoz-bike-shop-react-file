import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact/Contact';
import HomeProducts from '../HomeProducts/HomeProducts';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>        
            <Banner></Banner>
            <HomeProducts></HomeProducts>
            <Reviews></Reviews>
            <Contact></Contact>
        </div>
    );
};

export default Home;