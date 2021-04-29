import React from 'react';
import AllService from './AllService/AllService';
import Carosal from './Carosal/Carosal';
import ContactForm from './ContactForm/ContactForm';
import Footer from './Footer/Footer';
import Mechanics from './MEchanics/Mechanics';
import Navbar from './Navbar/Navbar';
import Services from './Services/Services';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
    return (
        <div >
            <Navbar/>
            <Carosal/>
            <Services/>
            <AllService/>
            <Mechanics/>
            <Testimonial/>
            <ContactForm/>
            <Footer/>
        </div>
    );
};

export default Home;