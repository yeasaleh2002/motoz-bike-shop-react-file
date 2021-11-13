import React from 'react';
import Products from '../../Products/Products/Products';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact/Contact';
import Rating from '../Rating/Rating';

const Home = () => {
    return (
        <div>
         
            <Banner></Banner>
            <Products></Products>
            <Blogs></Blogs>
            <Rating></Rating>
            <Contact></Contact>
        </div>
    );
};

export default Home;