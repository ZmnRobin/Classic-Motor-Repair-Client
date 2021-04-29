import React from 'react';
import BookingList from '../User/BookingList/BookingList';
import SideNav from './SideNav/SideNav';

const Admin = () => {

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-2'>
                    <SideNav/>
                </div>
                <div className='col-md-10'>
                   <BookingList/>
                </div>
            </div>
        </div>
    );
};
export default Admin;