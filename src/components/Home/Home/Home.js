import React from 'react';
import Products from '../../Products/Products/Products';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact/Contact';
import RatingSaw from '../Rating/RatingSaw';

const Home = () => {
    return (
        <div>        
            <Banner></Banner>
            <Products></Products>
            <RatingSaw></RatingSaw>
            <Contact></Contact>
        </div>
    );
};

export default Home;