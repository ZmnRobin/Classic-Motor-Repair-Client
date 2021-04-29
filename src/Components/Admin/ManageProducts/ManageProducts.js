import React, { useEffect, useState } from 'react';
import SideNav from '../SideNav/SideNav';

const ManageProducts = () => {

  const [manageService,setManageService]=useState([])

    const handleService=()=>{
      fetch('https://polar-forest-82975.herokuapp.com/allServices')
      .then(res=>res.json())
      .then(data=>setManageService(data))
    }
    
    const handleDelete=(id)=>{
          fetch(`https://polar-forest-82975.herokuapp.com/deleteService/${id}`,{
              method: 'DELETE'
          })
          .then(res=>res.json())
          .then(result=>{
            alert('Service deleted successfully.!')
            handleService()
          })
         }

    useEffect(() => {
      handleService()
    }, [])

    return (
        <div className='container'>
          <div className='row'>
            <div className='col-md-2'>
                <SideNav/>
            </div>
              <div
              style={{
                boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                padding:'30px',
                borderRadius:'10px'
           }} className='col-md-10 mt-5'>
                  <h3 style={{backgroundColor:'#292929'}} className='text-center text-white p-2'>Manage Services</h3>
                  <table class="table">
                <thead >
                <tr>
                    <th scope="col">Service Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody>
                  {
                    manageService.map(service=>{
                      return(
                       <tr>
                        <td >{service.name}</td>
                        <td>${service.price}</td>
                        <td><button className='btn btn-danger' onClick={(event)=>handleDelete(service._id,event)}>Delete</button></td>
                      </tr>
                      )
                    })
                  }
                
                </tbody>
            </table>
              </div>
          </div>
       </div>
    );
};

export default ManageProducts;