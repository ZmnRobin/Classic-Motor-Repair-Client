import React, { useContext } from 'react';
import './login.css'
import { FaGoogle } from 'react-icons/fa';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig/firebaseConfig'
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router';
import logo from '../../../Images/default.png'
import Footer from '../Footer/Footer';

if (firebase.apps.length===0) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {

    const provider = new firebase.auth.GoogleAuthProvider();
    const [loggedInUser,setLoggedInUser]=useContext(UserContext)

    let history=useHistory()
    let location=useLocation()
    let { from } = location.state || { from: { pathname: '/'} };

    const handleGoogleSignIn=()=>{
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            const {displayName,email,photoURL}=result.user;
            const user={
                name:displayName,
                email:email,
                image:photoURL
            }

            console.log(user)
            setLoggedInUser(user);
            history.replace(from)
        }).catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
        });
    }

    const handleClick=()=>{
        history.push('/home')
    }

    return (
        <div>
        <div className='container text-center'>
            <div className='d-flex justify-content-center'>
                <div style={{marginTop:'30px'}}>
                  <img onClick={handleClick} style={{height:'100px'}} src={logo} alt=""/>
                  <h4 style={{marginTop:'140px'}}>Login With</h4>
                 <div onClick={handleGoogleSignIn} className='login'>
                     <h5><FaGoogle/>  Continue with Google</h5>
                 </div>
                </div>
            </div>
        </div>
            <div style={{marginTop:'220px'}}>
            <Footer/>
            </div>
        </div>
    );
};

export default Login;