import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import './service.css'

const Services = () => {

    const [services,setServices]=useState([])
    let history=useHistory()

    useEffect(()=>{
        fetch('https://polar-forest-82975.herokuapp.com/allServices')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])

    const handleClick=(id)=>{
        history.push(`/book/${id}`)
    }
    return (
        <section className='mt-5'>
            <div className='container service-container'>
                <div className='text-center'>
                    <h1 >What We Do</h1>
                    <h5 className='text-secondary'>We offer full service auto repair and maintenance</h5>
                </div>
                <div className='mt-5 d-flex justify-content-center'>
                    <div className='row upper'>
                        <div style={{backgroundColor:'#FFC513'}} className='col-md-4 service  '>
                            <h3 className='mt-4'>Preventative <br/>Maintenance</h3>
                            <p>The best way to minimize<br/>breakdowns is doing routine <br/>maintenance</p>
                        </div>
                        <div style={{backgroundColor:'#F3F3F3'}} className='col-md-4 service'>
                            <h3 className='mt-4'>Most Common <br/>Repairs</h3>
                            <p>We have over 30 common car <br/>repairs <br/>and the list is growing</p>
                        </div>
                        <div style={{backgroundColor:'#2A2A2A'}} className='col-md-4 service'>
                            <h3 className='mt-4'style={{color:'#FFC513'}} >Brake <br/>Repair and Service</h3>
                            <p style={{color:'white'}}>Brake maintenance is <br/>important in helping <br/>ensure the safety of you and <br/>your <br/>passengers</p>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <div className='container mt-5 text-center'>
                <h6>SERVICES</h6>
                <br/>
                <div className='container main-service mt-4'>
                    <div className='row  text-center ms-3'>
                        {
                            services.map(service=>{
                                return(
                                <div onClick={()=>handleClick(service._id)} className='col-md-4'>
                                    <div class="card service-1 text-center p-1 " style={{width: '21rem',margin:'10px',height:'27rem'}}>
                                        <img style={{height:'120px',width:'120px'}} src={service.img} class="card-img-top rounded mx-auto d-block mt-2" alt="..."/>
                                        <div class="card-body">
                                            <h4 class="card-title">{service.name}</h4>
                                            <h3>${service.price}</h3>
                                            <p class="card-text">{service.description}</p>
                                        </div>
                                    </div>
                                </div>
                                )
                            })
                        }
                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;