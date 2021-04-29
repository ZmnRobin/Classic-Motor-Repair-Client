import React from 'react';
import logo1 from '../../../Images/service.png'
import logo2 from '../../../Images/car.png'
import logo3 from '../../../Images/support.png'

const AllService = () => {
    return (
        <section>
            <div className='container text-center mt-5'>
                <h1>100% Result Guarantee</h1>
                <h5 className='text-secondary'>We offer full service auto repair and maintenance</h5>
                <div className='mt-5'>
                    <div style={{margin:'10px',padding:'10px'}} className='row'>
                        <div className='col-md-4'>
                            <img style={{height:'100px',borderBottom:'2px solid #FFC513'}} src={logo1} alt=""/>
                            <h3>All Car Makes</h3>
                            <p>We provide a variety of repair <br/> and maintenance services for all <br/> car makes and models, even for <br/> exotic and vintage ones.</p>
                        </div>
                        <div className='col-md-4'>
                            <img style={{height:'100px',borderBottom:'2px solid #FFC513'}} src={logo2} alt=""/>
                            <h3>Variety Services</h3>
                            <p>The main principle of our work is <br/> to offer a wide range of quality <br/> car repair services and we’ve <br/> been doing it since our first day.</p>
                        </div>
                        <div className='col-md-4'>
                            <img style={{height:'100px',borderBottom:'2px solid #FFC513'}} src={logo3} alt=""/>
                            <h3>Quality Support</h3>
                            <p>Car Repair Services offers <br/> quality support programs for any <br/> vehicles that allow them to <br/> always stay fully functional.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{backgroundColor:'#2A2A2A',color:'white'}} className='mt-5'>
                <div  className='container d-flex justify-content-center'
                style={{padding:'30px'}}>
                   <div className='row ms-5'>
                   <div className='col-md-4 mt-3'>
                        <h1>Repair Services <br/> That <span style={{color:'#FFC513'}}>We Offer</span></h1>
                        <br/>
                        <p style={{borderTop:'2px solid #FFC513'}}>We provide a full range of front end mechanical repairs for all makes and models of cars, no matter the cause. This includes everything from struts, shocks, and tie rod ends to ball joints, springs, and basically everything that is included in repairing the front end of the vehicle.</p>
                    </div>
                    <div className='col-md-4 mt-3'>
                        <p>FREE Loaner Cars</p>
                        <p>FREE Shuttle Service</p>
                        <p>General Auto Repair and Maintenance</p>
                        <p>Transmission Repair and Replacement</p>
                        <p>Fuel System Repair</p>
                        <p>Exhaust System Repair</p>
                        <p>Engine Cooling System Maintenance</p>
                        <p>Electrical Diagnostics</p>
                    </div>
                    <div className='col-md-4 mt-3'>
                        <p>Starting and Charging Repair</p>
                        <p>Wheel Alignment</p>
                        <p>CV Axles</p>
                        <p>Computer Diagnostic Testing</p>
                        <p>Manufacturer Recommended Service</p>
                        <p>Brake Repair and Replacement</p>
                        <p>Air Conditioning A/C Repair</p>
                        <p>Tire Repair and Replacement</p>
                    </div>
                   </div>
                </div>
            </div>
        </section>
    );
};

export default AllService;