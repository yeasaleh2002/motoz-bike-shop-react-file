import React from 'react';
import Products from '../../Products/Products/Products';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact/Contact';
import Rating from '../Rating/Rating';

const Home = () => {
    return (
        <div>        
            <Banner></Banner>
            <Products></Products>
            <Rating></Rating>
            <Contact></Contact>
        </div>
    );
};

export default Home;