import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../Images/default.png'

const Navbar = () => {
    const [loggedInUser,setLoggedInUser]=useContext(UserContext)
    const history=useHistory()

    const handleClick=()=>{
        history.push('/login')
    }
    return (
        <div >
            <nav class="navbar navbar-expand-lg navbar-light bg-light position-sticky">
                <div class="container-fluid ">
                    <a class="navbar-brand ms-5" href="#"><img style={{height:'50px'}} src={logo} alt=""/></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav ms-auto">
                        <a class="nav-link active me-5" aria-current="page" href="#">Home</a>
                        <a class="nav-link active me-5" href="#">About Us</a>
                        <a class="nav-link active me-5" href="#">Projects</a>
                        <a class="nav-link active me-5" href="#">Contact</a>
                        <Link class="nav-link active me-5" to='/admin'>Admin</Link>
                       { loggedInUser.email? <button className='button me-5 mt-0' style={{width:'100px',height:'50px'}} onClick={()=>setLoggedInUser({})}>Log Out</button>
                       :<button className='button me-5 mt-0' style={{width:'100px',height:'50px'}} onClick={handleClick}>Login</button>}
                    </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;