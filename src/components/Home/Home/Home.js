import React from 'react';
import Products from '../../Products/Products/Products';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact/Contact';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>        
            <Banner></Banner>
            <Products></Products>
            <Reviews></Reviews>
            <Contact></Contact>
        </div>
    );
};

export default Home;