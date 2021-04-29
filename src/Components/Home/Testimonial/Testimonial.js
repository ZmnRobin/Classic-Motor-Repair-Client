import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Testimonial = () => {
    const [review,setReview]=useState([])

    useEffect(() => {
        fetch('https://polar-forest-82975.herokuapp.com/allReviews')
        .then(res=>res.json())
        .then(data=>setReview(data))
    }, [])

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };

    return (
        <section>
            <div className='container text-center mt-5'>
                <h6 className='mt-4'>TESTIMONIALS</h6>
            </div>
                <Carousel className='container mt-5'
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all 1.5"
                transitionDuration={1000}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                >
                    {
                        review.map(review=>{
                            return(   
                                <div class="card text-center" style={{width: '22rem',border:'none'}}>
                                    <img
                                    style={{height:'250px',width:'250px',borderRadius:'50%'}} src={review.img} class="rounded mx-auto d-block mt-2" alt="..."/>
                                    <div class="card-body">
                                        <p class="card-text ">{review.message}</p>
                                        <h5 class="card-title" style={{color:'#FFC513'}}>{review.name},</h5><p>{review.designation}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </Carousel>;
        </section>
    );
};

export default Testimonial;