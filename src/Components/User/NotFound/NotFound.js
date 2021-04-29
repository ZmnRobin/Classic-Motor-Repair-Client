import React from 'react';
import { Link } from 'react-router-dom';
import SideNav from '../../Admin/SideNav/SideNav';

const NotFound = () => {
    return (
        <div className='container'>
                <div className=' text-center mt-5 text-danger'>
                  <h4>No route found..! 404 error ! Go Home</h4>
                  <Link to='/home'> <h3> Home</h3></Link>
                </div>
        </div>
    );
};

export default NotFound;