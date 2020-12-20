
import React, { Fragment, useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getUserBooking } from '../../actions/bookings';
import Pagination from '../paginate/paginate';
import LuggerItem from './UserBookingItem';







const UserBooking = ({ getUserBooking,booking:{loading,bookings},history,match}) => {
  


  const [OrderState,setOrderState] = useState("")
  const [page, setPage] = useState(1)
  const [limit,setlimit] = useState(5)
     
const userId = match.params.id
 
  useEffect(() => {
    // alert("called")
    getUserBooking(userId);
  }, [userId]);





  // const onchange = (e)=>{
  //   setSearch(e.target.value)
    
  // }
 

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
          <Fragment>
            <div className="app-content content view home">
              <div className="content-wrapper">
                <div className="content-body">
                  <section
                    id="configuration"
                    className="search view-cause go_go_geezers_general"
                  >
                    <div className="row">
                      <div className="col-12">
                        <div className="card rounded pad-20">
                          <div className="card-content collapse show">
                            <div className="card-body  card-dashboard">
                              <div className="row">
                                <div className="col-md-12 col-12">
                                  
                                  <h1  className="u-m clr-blue "> 
                                   <i onClick={()=>history.goBack()} className="fa fa-chevron-left"></i> 
                                  User Booking Report
                                  </h1>
                                  

                                </div>
                              </div>

                              <div className="maain-tabble mt-3 table-responsive">
                                <div
                                  id="DataTables_Table_0_wrapper"
                                  className="dataTables_wrapper container-fluid dt-bootstrap4 no-footer"
                                >
                                  <div className="row">
                                    <div className="col-sm-12 col-md-6">
                                      <div
                                        className="dataTables_length"
                                        id="DataTables_Table_0_length"
                                      >
                                        <label>
                                          Show{' '}
                                          <select
                                            name="DataTables_Table_0_length"
                                            aria-controls="DataTables_Table_0"
                                            className="form-control form-control-sm"
                                          >
                                            <option value={10}>10</option>
                                            <option value={25}>25</option>
                                            <option value={50}>50</option>
                                            <option value={100}>100</option>
                                          </select>{' '}
                                        entries
                                      </label>
                                      </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6">
                                      <div
                                        id="DataTables_Table_0_filter"
                                        className="dataTables_filter"
                                      >
                                        <label>
                                          Search:
                                        <input
                                            spellCheck="true"
                                            type="search"
                                            className="form-control form-control-sm"
                                            placeholder="Search"
                                            aria-controls="DataTables_Table_0"
                                            onChange={(e)=>onchange(e)}
                                          />
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-sm-12">
                                      <table
                                        className="table table-striped table-bordered zero-configuration dataTable no-footer"
                                        id="DataTables_Table_0"
                                        role="grid"
                                        aria-describedby="DataTables_Table_0_info"
                                      >
                                        <thead>
                                          <tr role="row">
                                            {/* <th
                                            className="sorting_asc"
                                            tabIndex={0}
                                            aria-controls="DataTables_Table_0"
                                            rowSpan={1}
                                            colSpan={1}
                                            aria-sort="ascending"
                                            aria-label="S.no: activate to sort column descending"
                                            style={{ width: '54px' }}
                                          >
                                            S.no
                                          </th> */}
                                            <th
                                              className="sorting"
                                              tabIndex={0}
                                              aria-controls="DataTables_Table_0"
                                              rowSpan={1}
                                              colSpan={1}
                                              aria-label="User ID: activate to sort column ascending"
                                              style={{ width: '78px' }}

                                            >
                                              Booking ID
                                          </th>
                                            <th
                                              className="sorting"
                                              tabIndex={0}
                                              aria-controls="DataTables_Table_0"
                                              rowSpan={1}
                                              colSpan={1}
                                              aria-label="Full Name: activate to sort column ascending"
                                              style={{ width: '107.6px' }}
                                              // onClick={() => SortActionLugger("user", toggleOrder())}
                                            >
                                              lugger Name
                                          </th>
                                            {/* <th
                                              className="sorting"
                                              tabIndex={0}
                                              aria-controls="DataTables_Table_0"
                                              rowSpan={1}
                                              colSpan={1}
                                              aria-label="Last Name: activate to sort column ascending"
                                              style={{ width: '110px' }}
                                              // onClick={() => SortActionLugger("user", toggleOrder())}
                                            >
                                              Requester Name
                                          </th> */}
                                            <th
                                              className="sorting"
                                              tabIndex={0}
                                              aria-controls="DataTables_Table_0"
                                              rowSpan={1}
                                              colSpan={1}
                                              aria-label="Email: activate to sort column ascending"
                                              style={{ width: '154.8px' }}
                                              // onClick={() => SortActionLugger("from", toggleOrder())}
                                            >
                                              From
                                          </th>
                                            <th
                                              className="sorting"
                                              tabIndex={0}
                                              aria-controls="DataTables_Table_0"
                                              rowSpan={1}
                                              colSpan={1}
                                              aria-label="Status: activate to sort column ascending"
                                              style={{ width: '78px' }}
                                              // onClick={() => SortActionLugger("to", toggleOrder())}
                                            >
                                              To
                                          </th>
                                            <th
                                              className="sorting"
                                              tabIndex={0}
                                              aria-controls="DataTables_Table_0"
                                              rowSpan={1}
                                              colSpan={1}
                                              aria-label="Status: activate to sort column ascending"
                                              style={{ width: '72.4px' }}

                                            >
                                              Status
                                          </th>
                                            <th
                                              className="sorting"
                                              tabIndex={0}
                                              aria-controls="DataTables_Table_0"
                                              rowSpan={1}
                                              colSpan={1}
                                              aria-label="Action: activate to sort column ascending"
                                              style={{ width: '78px' }}

                                            >
                                              Action
                                          </th>
                                          </tr>
                                        </thead>

                                        {bookings&&
           Object.keys(bookings).length > 0 ? (
            bookings.data.map((Booking,index) => (
              <LuggerItem
              key={Booking._id}
              Booking={Booking}
              index={index}
            />
      
         ))
       ) : (
        <h4>No Bookings found...</h4>
       )
     }
                                      
                                       
                                      </table>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-sm-12 col-md-5">
                                      <div
                                        className="dataTables_info"
                                        id="DataTables_Table_0_info"
                                        role="status"
                                        aria-live="polite"
                                      >
                                        {/* Showing 1 to 3 of 3 entries */}
                                    </div>
                                    </div>
                                    <div className="col-sm-12 col-md-7">
                                      <div
                                        className="dataTables_paginate paging_simple_numbers"
                                        id="DataTables_Table_0_paginate"
                                      >
                                        <ul className="pagination">
                                          <li
                                            className="paginate_button page-item previous disabled"
                                            id="DataTables_Table_0_previous"
                                          >
                                            <a
                                              href="#"
                                              aria-controls="DataTables_Table_0"
                                              data-dt-idx={0}
                                              tabIndex={0}
                                              className="page-link"
                                            >
                                              Previous
                                          </a>
                                          </li>
                                          <li className="paginate_button page-item active">
                                            <a
                                              href="#"
                                              aria-controls="DataTables_Table_0"
                                              data-dt-idx={1}
                                              tabIndex={0}
                                              className="page-link"
                                            >
                                              1
                                          </a>
                                          </li>
                                          <li
                                            className="paginate_button page-item next disabled"
                                            id="DataTables_Table_0_next"
                                          >
                                            <a
                                              href="#"
                                              aria-controls="DataTables_Table_0"
                                              data-dt-idx={2}
                                              tabIndex={0}
                                              className="page-link"
                                            >
                                              Next
                                          </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>

            <div
              className="modal fade go-live"
              id="unblockuser"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="modelTitleId"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <i className="fa fa-times-circle"></i>
                    </button>
                  </div>
                  <div className="modal-body">
                    <div className="blocked-modal-main-wrapper text-center">
                      <div className="img-wrapper text-center">
                        <img src="images/blockeduser.png" alt="" />
                        <h2>System Message </h2>
                        <p>Are you sure you want to Un-block this user?</p>
                      </div>
                      <a
                        data-toggle="modal"
                        href="#confirmmodal"
                        className="cancel-button go-live-btn"
                      >
                        {' '}
                      Yes
                    </a>
                      <button data-dismiss="modal" className="blocked-button ">
                        No
                    </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Fragment>
        )}
    </Fragment>
)
}
UserBooking.propTypes = {
    getUserBooking: PropTypes.func.isRequired
//   SortActionLugger: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  booking: state.booking
});

export default connect(mapStateToProps, { getUserBooking })(UserBooking)