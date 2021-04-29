import React from 'react';
import './ContactForm.css'

const ContactForm = () => {
    return (
        <section className='mt-5'
        style={{backgroundColor:'#292929',padding:'30px'}}>
            <div className='container text-center text-white '>
                 <h6>CONTACT</h6>
                 <h1  className='mt-5'>Let us handle your <br/>car, <span style={{color:'#FFC513'}}>professionally</span> </h1>
                <br/>
               <div className='d-flex justify-content-center'>
                   <div className='w-50 mt-2' style={{borderTop:'2px solid #FFC513'}}>
                    <div class="mb-3">
                        <input type="text" class="form-control mt-4" id="exampleFormControlInput1" placeholder="name"/>
                    </div>
                    <div class="mb-3">
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                    </div>
                    <div class="mb-3">
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Your message"></textarea>
                    </div>
                    <br/>
                    <button className='button' >Send Message</button>
                   </div>
               </div>
            </div>
        </section>
    );
};

export default ContactForm;