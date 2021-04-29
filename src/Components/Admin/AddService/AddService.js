import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';
import SideNav from '../SideNav/SideNav';

const AddService = () => {
    const [loggedInUser,setLoggedInUser]=useContext(UserContext)
    const [imgUrl,setImgUrl]=useState(null);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data =>{

        const formData={
            name:data.serviceName,
            price:data.price,
            description:data.description,
            img:imgUrl
        }

        fetch('https://polar-forest-82975.herokuapp.com/addServices',{
           method:'POST',
           headers:{
               'Content-Type':'application/json'
           },
           body: JSON.stringify(formData)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data) {
                alert('Service added successfully.!')
            }
        })
    }

    const handleImg=event=>{
        const imgData=new FormData();
        imgData.set('key','69f67a6ce8f59c06c511c35448d16eaa')
        imgData.append('image',event.target.files[0])

         axios.post('https://api.imgbb.com/1/upload',imgData)
           .then(function (response) {
            setImgUrl(response.data.data.display_url)
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-2'>
                    <SideNav/>
                </div>
                <div style={{
                     boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                     padding:'30px',
                     borderRadius:'10px'
                }} className='col-md-10 mt-5'>


                    <h3 style={{backgroundColor:'#292929'}} className='text-center text-white p-2'>Add Service</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="mb-3 mt-4">
                        <label for="exampleFormControlInput1" class="form-label">Service Name</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="service name"
                        {...register("serviceName", { required: true })}/>
                        </div>
                        <div class="mb-3 mt-4">
                        <label for="exampleFormControlInput1" class="form-label">Price</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="price per day"
                        {...register("price", { required: true })}/>
                        </div>
                        <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                        {...register("description", { required: true })}></textarea>
                        </div>
                        <label for="exampleFormControlTextarea1" class="form-label">Image</label>
                        <input  type="file" class="form-control" id="exampleFormControlInput1"
                        {...register("image", { required: true })} onChange={handleImg} 
                       />
                        <input style={{float:'right',width:'100px'}} className='button mt-3' type="submit" value='Submit'/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;