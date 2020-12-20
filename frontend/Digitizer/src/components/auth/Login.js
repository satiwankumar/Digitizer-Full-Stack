import React,{useEffect, useState} from 'react'
import axios from 'axios'
import {Link, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import PropTypes from'prop-types'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import {login} from '../../actions/auth'

const Login = ({isAuthenticated,login},props) => {
// const [refresh, setstate] = useState(false)

    const [formData,setFormData] = useState({
      
        email:'',
        password:'',
 
    });

    const {email,password} = formData
    const onchange=(e)=>{
        // console.log(e.target.name)
        // console.log(e.target.value)
        setFormData({...formData,[e.target.name]:e.target.value})

    }

  
    const onSubmit= async(e)=>{
        e.preventDefault()
        console.log("email,password")
        // console.log(email,password)
        login(email,password)
     

    }
  

    //Redirect if logged int
    if(isAuthenticated){
      return <Redirect to="/dashboard"/>

    }
    return (
       <>
      <div>
      <form onSubmit={e=>onSubmit(e)}>
      <div className="container sm:px-10">
        <div className="block xl:grid grid-cols-2 gap-4">
          <div className="hidden xl:flex flex-col min-h-screen">
            <a href className="-intro-x flex items-center pt-5">
            <img alt="Digitizer" className="w-6" src={process.env.PUBLIC_URL+'/Assets1/dist/images/logo.svg'} />
              <span className="text-white text-lg ml-3"> Mid<span className="font-medium">One</span> </span>
            </a>
            <div className="my-auto">
              <img alt="Digitizer" className="-intro-x w-1/2 -mt-16" src={process.env.PUBLIC_URL+'/Assets1/dist/images/illustration.svg'} />
              <div className="-intro-x text-white font-medium text-4xl leading-tight mt-10">
                A few more clicks to 
                <br />
                sign in to your account.
              </div>
              <div className="-intro-x mt-5 text-lg text-white dark:text-gray-500">Manage all your e-commerce accounts in one place</div>
            </div>
          </div>
          <div className="h-screen xl:h-auto flex py-5 xl:py-0 my-10 xl:my-0">
            <div className="my-auto mx-auto xl:ml-20 bg-white xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto">
              <h2 className="intro-x font-bold text-2xl xl:text-3xl text-center xl:text-left">
                Sign In
              </h2>
              <div className="intro-x mt-2 text-gray-500 xl:hidden text-center">A few more clicks to sign in to your account. Manage all your e-commerce accounts in one place</div>
              <div className="intro-x mt-8">
                <input type="text" className="intro-x login__input input input--lg border border-gray-300 block"  placeholder="Email"  value={email} name="email"  placeholder="Enter Email Address" onChange={(e)=>onchange(e)} required />
                <input type="password" className="intro-x login__input input input--lg border border-gray-300 block mt-4" placeholder="Password"  value={password} name="password" placeholder="Enter Password" onChange={(e)=>onchange(e)} required/>
              </div>
              <div className="intro-x flex text-gray-700 dark:text-gray-600 text-xs sm:text-sm mt-4">
                <div className="flex items-center mr-auto">
                  <input type="checkbox" className="input border mr-2" id="remember-me" />
                  <label className="cursor-pointer select-none" htmlFor="remember-me">Remember me</label>
                </div>
                <a href>Forgot Password?</a> 
              </div>
              <div className="intro-x mt-5 xl:mt-8 text-center xl:text-left">
                <button className="button button--lg w-full xl:w-32 text-white bg-theme-1 xl:mr-3 align-top">Login</button>
                <button className="button button--lg w-full xl:w-32 text-gray-700 border border-gray-300 dark:border-dark-5 dark:text-gray-300 mt-3 xl:mt-0 align-top">Sign up</button>
              </div>
              <div className="intro-x mt-10 xl:mt-24 text-gray-700 dark:text-gray-600 text-center xl:text-left">
                By signin up, you agree to our 
                <br />
                <a className="text-theme-1 dark:text-theme-10" href>Terms and Conditions</a> &amp; <a className="text-theme-1 dark:text-theme-10" href>Privacy Policy</a> 
              </div>
            </div>
          </div>
        </div>
      </div>
      <div data-url="login-light-login.html" className="dark-mode-switcher cursor-pointer shadow-md fixed bottom-0 right-0 box dark:bg-dark-2 border rounded-full w-40 h-12 flex items-center justify-center z-50 mb-10 mr-10">
        <div className="mr-4 text-gray-700 dark:text-gray-300">Dark Mode</div>
        <div className="dark-mode-switcher__toggle dark-mode-switcher__toggle--active border" />
      </div>
    </form>
    </div>
  
      //        
            <ToastContainer autoClose={2000} />

            </>



   


    )
}


Login.propTypes={
 login:PropTypes.func.isRequired,
 isAuthenticated:PropTypes.bool 
}
const mapStateToProps = state =>({
isAuthenticated : state.auth.isAuthenticated
})


export default connect(mapStateToProps,{login})(Login)
