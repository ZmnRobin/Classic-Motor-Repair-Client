import React from "react";
import { useForm } from "react-hook-form";
import SideNav from "../SideNav/SideNav";

const MakeAdmin = () => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = data =>{

    fetch('https://polar-forest-82975.herokuapp.com/makeAdmin',{
           method:'POST',
           headers:{
               'Content-Type':'application/json'
           },
           body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data) {
                alert('Admin added successfully.!')
            }
        })
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-2">
          <SideNav />
        </div>
          <div style={{
                     boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                     padding:'30px',
                     borderRadius:'10px'
                }} className="col-md-10 mt-5">
              <h3 style={{backgroundColor:'#292929'}} className='text-center text-white p-2'>Make Admin</h3>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div class="mb-3 mt-4">
                    <label for="exampleFormControlInput1" class="form-label">Email</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="example@mail.com"
                            {...register("email", { required: true })}/>
                </div>
                <input style={{float:'right',width:'100px'}} className='button mt-3' type="submit" value='Submit'/>
              </form>
          </div>
      </div>
    </div>
  );
};

export default MakeAdmin;
