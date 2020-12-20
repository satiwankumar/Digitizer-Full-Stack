import React, { Fragment, useState } from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { UpdateUserStatus } from '../../actions/profile';
import Spinner from '../layout/Spinner';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
 const UserItem = ({user,index,currentPage, blockToggle,selection}) => {
    return (
    <Fragment>
      {user === null ? (
        <Spinner />
      ) : (
        <Fragment>
        <tr className="intro-x">

      
       <td className="w-40">
          <div className="flex">
            <div className="w-10 h-10 image-fit zoom-in">
              <img alt="Midone Tailwind HTML Admin Template" className="tooltip rounded-full" src={process.env.PUBLIC_URL+'/Assets1/dist/images/preview-14.jpg'} title="Uploaded at 20 April 2021" />
            </div>
          </div>
        </td>
    
        <td>
          <div className="text-xs whitespace-no-wrap">{user.firstname}</div>
        </td>
        <td className="text-center">{user.lastname}</td>
        <td className="w-40">
          <div className="flex items-center justify-center text-theme-9"> <i data-feather="check-square" className="w-4 h-4 mr-2" /> {user.email} </div>
        </td>
        <td className="w-40">
          <div className="flex items-center justify-center text-theme-9"> <i data-feather="check-square" className="w-4 h-4 mr-2" /> {user.status==1?"active":"inactive"} </div>
        </td>
        <td className="table-report__action w-56">
          <div className="flex justify-center items-center">
            <a className="flex items-center mr-3" href="javascript:;"> <i data-feather="check-square" className="w-4 h-4 mr-1" /> Edit </a>
            <a className="flex items-center text-theme-6" href="javascript:;" data-toggle="modal" data-target="#delete-confirmation-modal"> <i data-feather="trash-2" className="w-4 h-4 mr-1" /> Delete </a>
          </div>
        </td>
      </tr>
     
      


      
      </Fragment>
    )
      }
    </Fragment>
    )
}

UserItem.propTypes = {
 
  // UpdateUserStatus:PropTypes.func.isRequired
  


};


export default connect(null, {})(UserItem);

