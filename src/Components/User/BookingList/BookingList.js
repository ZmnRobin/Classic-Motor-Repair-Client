import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import SideNav from '../../Admin/SideNav/SideNav';

const BookingList = () => {
    const [loggedInUser,setLoggedInUser]=useContext(UserContext)
    const [booking,setBooking]=useState([])
    const email=loggedInUser.email;
    useEffect(() => {
        fetch('https://polar-forest-82975.herokuapp.com/bookingByEmail?email='+email)
        .then(res=>res.json())
        .then(data=>setBooking(data))
    }, [])
    
    return (
               
               <div className='mt-5'>
                    <h4 className='me-3' style={{float:'right',color:'#FFC513',backgroundColor:'gray',borderRadius:'5px',padding:'5px'}}>{loggedInUser.name}</h4>
                    <h3 className='ms-3'>Booking List</h3> 
                    <div
                     style={{
                        margin: "10px",
                        padding: "20px",
                        boxShadow:
                          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                        borderRadius: "10px",
                      }} className='row mt-4'>
                        {
                            booking.map(booking=>{
                                return(
                                   <div
                                   style={{border:'1px solid gray',borderRadius:'10px',padding:'20px'}} className='col-md-6 mt-4'>
                                       <img style={{height:'100px'}} src={booking.image} alt=""/>
                                       <h5 style={{float:'right'}}>{booking.status}</h5>
                                       <h4 className='mt-3'>{booking.serviceName}</h4>
                                       <p className='mt-2'>{booking.description}</p>
                                   </div>
                                )
                            })
                        }
                    </div>
                </div>
          
    );
};

export default BookingList;