import React from 'react';
import About from '../../component/AboutUS/About';
import Banner from '../../component/Banner/Banner';
import Package from '../../component/Packages/Package';
import Testimonials from '../../component/Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Package></Package>
            <About></About>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;