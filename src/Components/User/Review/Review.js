import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import SideNav from '../../Admin/SideNav/SideNav';

const Review = () => {

    const [imgUrl,setImgUrl]=useState(null);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [option,setOption] = useState()

    const onSubmit = data =>{
        const formData={
            name:data.name,
            designation:data.designation,
            message:data.reviewMsg,
            img:imgUrl
        }

        fetch('https://polar-forest-82975.herokuapp.com/addReview',{
           method:'POST',
           headers:{
               'Content-Type':'application/json'
           },
           body: JSON.stringify(formData)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data) {
                alert('Your review added successfully. Thank you for give us a review.!😊😊')
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

                    <h3>Review</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="mb-3">
                            <input type="text" class="form-control mt-4" id="exampleFormControlInput1" placeholder="name"
                             {...register("name", { required: true })}/>
                        </div>
                        <div class="mb-3">
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="designation"
                             {...register("designation", { required: true })}/>
                        </div>
                        <div class="mb-3">
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Your message"
                             {...register("reviewMsg", { required: true})}></textarea>
                        </div>
                        <label>Upload your photo</label>
                        <input  type="file" class="form-control mt-2" id="exampleFormControlInput1"
                        {...register("image", { required: true })} onChange={handleImg}/>

                        <input type="submit" style={{float:'right',width:'100px'}} className='button mt-3' value="Send"/>
                    </form>
                </div>
            </div>
       </div>
    );
};

export default Review;