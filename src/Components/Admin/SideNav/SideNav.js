import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import './sidenav.css'
import { FaUserTie,FaPlus,FaAlignLeft,FaListUl,FaShoppingCart,FaThList,FaRocketchat,FaLongArrowAltLeft} from 'react-icons/fa';
import logo from '../../../Images/default.png'

const SideNav = () => {

    const {id}=useParams()
    const [loggedInUser,setLoggedInUser]=useContext(UserContext);
    const [isAdmin,setIsAdmin]=useState(false);

    let history=useHistory()

    useEffect(() =>{
        fetch('https://polar-forest-82975.herokuapp.com/adminEmail',{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify({email:loggedInUser.email})
        })
        .then(res=>res.json())
        .then(data=>setIsAdmin(data))
    },[])

    const handleClick=()=>{
        setLoggedInUser({})
        history.push('/home')
    }

    return (
        <div>
            <div class="sidebar text-left">
                <Link className='mb-3 p-4' to="/home"><img style={{height:'50px',backgroundColor:'white'}} src={logo} alt=""/></Link>
                {isAdmin ? 
                    <div>
                        <Link to="/orderList"><FaListUl/> Order list</Link>
                        <Link to="/addService"><FaPlus/> Add Service</Link>
                        <Link to="/makeAdmin"> <FaUserTie/> Make Admin</Link>
                        <Link to="/manageService"><FaAlignLeft/> Manage Services</Link>
                    </div>
                :
                <div>
                <Link to={`/book/${id}`}><FaShoppingCart/> Book</Link>
                <Link to="/admin"><FaThList/> Booking List</Link>
                <Link to="/review"><FaRocketchat/> Review</Link>
                </div>
                }
                <br/>
                <Link onClick={handleClick}><FaLongArrowAltLeft/>Log Out</Link>
            </div>
        </div>
    );
};

export default SideNav;