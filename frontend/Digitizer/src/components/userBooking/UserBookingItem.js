import React from 'react'
import {Link } from 'react-router-dom'

 const BookingItem = ({Booking,index}) => {
    return (
    
      <tbody>
      <tr>
          {/* <td>{index+1} </td>  */}
          <td>{Booking._id}</td>
        <td>{Booking.lugger.user.firstname + " " +Booking.lugger.user.lastname  }</td>
        {/* <td>{Booking.lugger.lastname}</td> */}
        <td>{Booking.lugger.from}</td>
        <td>{Booking.lugger.to}</td>
        <td>{Booking.lugger.status === 0? "pending":Booking.lugger.status == 1? "Approved":Booking.lugger.status == 2? "Rejected": Booking.lugger.status == 3 ? "Landed":Booking.lugger.status == 4? "Delivered":''}</td>
        


     
        <td>
          <div className="btn-group mr-1 mb-1">
            <button type="button" className="btn  btn-drop-table btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="fa fa-ellipsis-v"></i></button>
            <div className="dropdown-menu BookingStyle" x-placement="bottom-start">
              <Link className="dropdown-item"   to={`/lugger/${Booking.lugger._id}`}  ><i className="fa fa-eye"></i>VIEW </Link>
                 
             
             
            
            </div>
            </div>
          </td>
        </tr>
        </tbody>

       
          
     
    )
}
export default BookingItem
