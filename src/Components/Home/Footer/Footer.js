import React from 'react';
import logo from '../../../Images/default.png'

const Footer = () => {
    return (
        <div>
        <section
        style={{backgroundColor:'#FAF9F6'}} className=''>
            <div className='container text-left'>
                <div className='row m-2 p-3'>
                    <div className='col-md-3 mt-5'>
                        <h5>H#000(0th Floor),Road #00, <br/>Mirpur,Dhaka,Bangladesh</h5>
                        <br/>
                        <img style={{height:'70px',marginTop:'70px'}} src={logo} alt=""/>
                    </div>
                    <div className='col-md-3 mt-5'>
                        <h4>Company</h4>
                        <p>About</p>
                        <p>Project</p>
                        <p>Our Team</p>
                        <p>Terms Conditions</p>
                        <p>Submit Listing</p>
                    </div>
                    <div className='col-md-3 mt-5'>
                        <h4>Quick Links</h4>
                        <p>Quick Links</p>
                        <p>Our Mechanics</p>
                        <p>Sales</p>
                        <p>Blog</p>
                        <p>Contact</p>
                    </div>
                    <div className='col-md-3 mt-5'>
                        <h4>About us</h4>
                        <p>We use the latest diagnostic <br/> equipment to guarantee your vehicle is <br/> repaired or serviced properly and <br/> in a timely fashion.</p>
                        <h4>Opening Hours</h4>
                        <p>Mon-Fri: 7:00 AM - 6:00 PM <br/>
                        Saturday: 9:00 AM - 5:00 PM <br/>
                        Sunday: Closed</p>
                    </div>
                </div>
            </div>
        </section>
        <footer className='mt-2 mb-1 text-center'>robin 2021@all rights reserved</footer>
        </div>
    );
};

export default Footer;