import React,{useEffect, useState} from 'react'
import {connect} from 'react-redux'
import PropTypes from'prop-types'
import {register} from '../../actions/auth'

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


 const Register = ({register,history}) => {
    const [picture, setPicture] = useState(null);
    const [imgData, setImgData] = useState(null);
    const [passtype, setPasstype] = useState(0)
//    const [Image, setImage] = useState({
//        file:'',
//        imagePreviewUrl:''
//    })

    const [formData,setFormData] = useState({
        firstname:'',
        lastname:'',
        email:'',
        password:'',
        confirmpassword:'',
        image:'',
        role:''
 
    });
  const {firstname,lastname,email,password,confirmpassword,role} = formData


    // const {email,password} = formData
    const onchange=(e)=>{
        console.log(e.target.name)
        console.log(e.target.value)
        setFormData({...formData,[e.target.name]:e.target.value})

    }
    // const handleImageChange=(e)=> {
        
    //     e.preventDefault();
    
    //     let reader = new FileReader();
    //     let file = e.target.files[0];
        
    //     reader.onloadend = () => {
    //     // setFormData({...formData,image:file})

    //     setImage({
    //         file: file,
    //         imagePreviewUrl: reader.result
    //       });
    //     }
    
    //     reader.readAsDataURL(file)
    //   }
  const  handleClick=()=>{
        document.getElementById('upload').click()
    }

  
    const onSubmit= async(e)=>{
        e.preventDefault()
        console.log("formData",formData)
        
        register(formData,history)
        
    }

    const onChangePicture = e => {
        e.preventDefault()

      if (e.target.files[0]) {
        //   alert(e.target.files[0])
        // console.log("picture: ", e.target.files);
        setPicture(e.target.files[0]);
        // alert(picture)
        const reader = new FileReader();
        reader.onload =  () => {
          setImgData(reader.result);
          setFormData({...formData,image:reader.result})
        };
        // alert(imgData)
        reader.readAsDataURL(e.target.files[0]);
      }
    };
    console.log(imgData)
    
    const togglePassword = ()=>{
        setPasstype(!passtype)
    }
  
    return (
<>
        <div className="grid grid-cols-12 gap-6 mt-5">
          <div className="intro-y col-span-12 lg:col-span-6">
            {/* BEGIN: Form Layout */}
            <form onSubmit={(e)=>onSubmit(e)}>

            <div className="intro-y box p-5">
              <div>
                <label>First Name</label>
                <input type="text" className="input w-full border mt-2" placeholder="First Name" value={firstname} name="firstname"  onChange={(e)=>onchange(e)} />
              </div>
              
              <div className="mt-3">
                <label>Last Name</label>
                <input type="text" className="input w-full border mt-2" placeholder="Last Name" value={lastname} name="lastname"  onChange={(e)=>onchange(e)} />

              </div>
            
              <div className="mt-3">
              <label>Email</label>
              <input type="email" className="input w-full border mt-2" placeholder="Email" value={email} name="email"  onChange={(e)=>onchange(e)} />

            </div>
            <div className="mt-3">
            <label>Password</label>
            <input type="password" className="input w-full border mt-2" placeholder="password" value={password} name="password"  onChange={(e)=>onchange(e)} />

          </div>
          <div className="mt-3">
          <label>Re-type Password</label>
          <input type="password" className="input w-full border mt-2" placeholder="confirmpassword" value={confirmpassword} name="confirmpassword"  onChange={(e)=>onchange(e)} />

        </div>
            
        
             <div className="mt-3">
                <label>User Type</label>
                <div className="mt-2">
                  <select  style={{color : "black"}} data-placeholder="Select User Type" value={role} name="role"  onChange={(e)=>onchange(e)} className="tail-select w-full">
                    <option style={{color : "black"}} value="client">Client</option>
                    <option style={{color : "black"}} value="digitizer">Digitizer</option>
                  </select>
                </div>
              </div>
            
            
             
            
             {
              //   <div className="mt-3">
              //   <label>Active Status</label>
              //   <div className="mt-2">
              //     <input type="checkbox" className="input input--switch border" />
              //   </div>
              // </div>
            }
           
              <div className="text-right mt-5">
                <button type="button" className="button w-24 border dark:border-dark-5 text-gray-700 dark:text-gray-300 mr-1">Cancel</button>
                <button type="submit" className="button w-24 bg-theme-1 text-white">Create</button>
              </div>
             
            </div>
            {/* END: Form Layout */}
          </form>

          </div>
        </div>
      );

      <ToastContainer autoClose={2000} />

        </>
    )
}

Register.propTypes={
    Register:PropTypes.func.isRequired,
    isAuthenticated:PropTypes.bool 
   }
   const mapStateToProps = state =>({
   isAuthenticated : state.auth.isAuthenticated
   })
   
   
   export default connect(mapStateToProps,{register})(Register)
   