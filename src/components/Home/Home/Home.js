import React from 'react';
import Products from '../../Products/Products/Products';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact/Contact';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>        
            <Banner></Banner>
            <Products></Products>
            <Review></Review>
            <Contact></Contact>
        </div>
    );
};

export default Home;