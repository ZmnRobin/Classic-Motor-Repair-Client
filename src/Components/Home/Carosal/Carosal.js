import React from 'react';
import { useHistory, useParams } from 'react-router';
import firstImg from '../../../Images/1 (1).jpg'
import secondImg from '../../../Images/1 (2).jpg'
import thirdImg from '../../../Images/1 (3).jpg'
import './Carosal.css'

const Carosal = () => {
    
    const {id}=useParams()
    let history=useHistory();
    const handleClick=()=>{
        history.push(`/book/${id}`)
    } 
    return (
        <div>
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active ">
                <img src={firstImg} class="d-block w-100" alt="..."/>
                   
                </div>
                <div class="carousel-item">
                   <img src={secondImg} class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                  <img src={thirdImg} class="d-block w-100" alt="..."/>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            <div class="carousel-caption d-md-block ">
                    <h2>Full Service of</h2>
                    <br/>
                       <h1>Auto Repair</h1>
                       <h1>and Maintenance</h1>
                    <br/>
                    <h3>Over 35 Years of Quality Auto service</h3>
                      <button className='button mt-3' onClick={handleClick}>GET APPOINTMENT</button>
                    </div>
            </div>
        </div>
    );
};

export default Carosal;