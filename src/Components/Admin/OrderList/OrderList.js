import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../App";
import SideNav from "../SideNav/SideNav";
import './OrderList.css'

const OrderList = () => {
  const [allBooking, setAllBooking] = useState([]);
  const [loggedInUser,setLoggedInUser]=useContext(UserContext)

  useEffect(() => {
    fetch("https://polar-forest-82975.herokuapp.com/allBooking")
      .then((res) => res.json())
      .then((data) => setAllBooking(data));
  }, []);

  const handleChange=(id,event)=>{
     const status=event.target.value;
     const data={
         id:id,
         status:status,
     }

      fetch('https://polar-forest-82975.herokuapp.com/update',{
          method: 'PATCH',
          headers: {'Content-Type':'application/json'},
          body:JSON.stringify(data)
      })
      .then(res=>res.json())
      .then(data=>{
          if (data) {
              alert('Status updated successfully.!')
          }
      })
     
  }

  return (
   <div className='container'>
       <div className='row'>
           <div className='col-md-2'>
               <SideNav/>
           </div>
           <div className='col-md-10'>
           <h4 className='me-3 mt-1' style={{float:'right',color:'#FFC513',backgroundColor:'#292929',borderRadius:'5px',padding:'5px'}}> {loggedInUser.name}</h4>
             <div
                style={{
                    boxShadow:
                    "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                    padding: "30px",
                    borderRadius: "10px",
                }}
                className="mt-5 order"
                >
                <h3
                    style={{ backgroundColor: "#292929" }}
                    className="text-center text-white p-2"
                >
                    Order list
                </h3>
                <table class="table">
                    <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email ID</th>
                        <th scope="col">Service</th>
                        <th scope="col">Pay With</th>
                        <th scope="col">Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    {allBooking.map((booking) => {
                        return (
                        <tr>
                            <th>{booking.name}</th>
                            <td>{booking.email}</td>
                            <td>{booking.serviceName}</td>
                            <td>{booking.paymentBy}</td>
                            <td>
                                <select name='option' onChange={(event)=>handleChange(booking._id,event)}>
                                    <option selected hidden>{booking.status}</option>
                                    <option value="Pending">Pending</option>
                                    <option value="On Going">On going</option>
                                    <option value="Done">Done</option>
                                </select>
                            </td>
                        </tr>
                        );
                    })}
                    </tbody>
                </table>
             </div>
           </div>
       </div>
   </div>
  );
};

export default OrderList;
