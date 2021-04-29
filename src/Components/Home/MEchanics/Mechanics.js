import React from 'react';
import mechanic1 from '../.././../Images/mechanic 1.png'
import mechanic2 from '../.././../Images/2.png'

const Mechanics = () => {
    return (
        <section className='mt-5'>
            <div className='container'>
                <h6 className='text-secondary text-center'>MEET OUR AWESOME MECHANICS</h6>
               <div className='row mt-5 p-3 ms-5'>
                   <div className='col-md-4'>
                       <img style={{height:'300px'}} src={mechanic1} alt=""/>
                       <div className='text-left ms-5 mt-2'>
                        <h5>Andrew Wilson</h5>
                        <p>+99 66 88 55 00</p>
                       </div>
                       
                   </div>
                   <div className='col-md-4'>
                       <img style={{height:'300px'}} src={mechanic2} alt=""/>
                       <div className='ms-4 mt-2'>
                        <h5>Jonathon Charls</h5>
                        <p>+99 77 88 55 00</p>
                       </div>
                      
                   </div>
                   <div className='col-md-4'>
                       <img style={{height:'300px'}} src={mechanic1} alt=""/>
                       <div className='text-left ms-5 mt-2'>
                        <h5>Andrew Wilson</h5>
                        <p>+99 66 88 55 00</p>
                       </div>
                   </div>
               </div>
            </div>
        </section>
    );
};

export default Mechanics;