
import React, { Fragment, useEffect,useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import ReactPaginate from 'react-paginate';
import { getUsers, UpdateUserStatus,SortAction } from '../../actions/profile';
import {Link } from 'react-router-dom'
import UserItem from './userItem';
import Pagination from '../paginate/paginate';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Users = ({ getUsers,SortAction, UpdateUserStatus, profile: { Users, loading }, history }) => {


  const [currentID, setCurrentID] = useState('')
  const [Selection, setSelection] = useState(1)
  const [blockStatus, setBlockStatus] = useState(1)
  const [OrderState,setOrderState] = useState(1)

  const [page, setPage] = useState(1)
  const [limit,setlimit] = useState(5)
     

   const blockToggleUser = (id,status) => {
     setCurrentID(id)
    
     setBlockStatus(status)

     window.jQuery('#blockuser').modal('show');
   }

  useEffect(() => {
// alert(Selection)
    getUsers(page,limit,Selection);
  }, [getUsers,page,limit,Selection]);


  
  const toggleOrder=()=>{
    const currentState = OrderState ===1?-1:1
      setOrderState(currentState)
      return OrderState
  }
  const handleSelection=()=>{
    const currentState = Selection==1?0:1
      setSelection(currentState)
      return Selection
  }
  const handleChange=(e)=> {
    // alert(e.target.value)
    let value = e.target.value;
    
   setlimit(value)
}
const handlePageClick = (data) => {
  
    let selected = data.selected +1;
    // console.log(selected)
    setPage(selected);
   
};
  // const paginate = pageNumber => setCurrentPage(pageNumber);
  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <div>
        <h2 className="intro-y text-lg font-medium mt-10">
          User List
        </h2>
        <div className="grid grid-cols-12 gap-6 mt-5">
          <div className="intro-y col-span-12 flex flex-wrap sm:flex-no-wrap items-center mt-2">
            <Link to="/register" className="button text-white bg-theme-1 shadow-md mr-2">Add New Users</Link>
            <div className="dropdown">
              <button className="dropdown-toggle button px-2 box text-gray-700 dark:text-gray-300">
                <span className="w-5 h-5 flex items-center justify-center"> <i className="w-4 h-4" data-feather="plus" /> </span>
              </button>
              <div className="dropdown-box w-40">
                <div className="dropdown-box__content box dark:bg-dark-1 p-2">
                  <a href className="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="printer" className="w-4 h-4 mr-2" /> Print </a>
                  <a href className="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="file-text" className="w-4 h-4 mr-2" /> Export to Excel </a>
                  <a href className="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="file-text" className="w-4 h-4 mr-2" /> Export to PDF </a>
                </div>
              </div>
            </div>
            <div className="hidden md:block mx-auto text-gray-600">Showing 1 to 10 of 150 entries</div>
            <div className="w-full sm:w-auto mt-3 sm:mt-0 sm:ml-auto md:ml-0">
              <div className="w-56 relative text-gray-700 dark:text-gray-300">
                <input type="text" className="input w-56 box pr-10 placeholder-theme-13" placeholder="Search..." />
                <i className="w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0" data-feather="search" /> 
              </div>
            </div>
          </div>
          {/* BEGIN: Data List */}
          <div className="intro-y col-span-12 overflow-auto lg:overflow-visible">
            <table className="table table-report -mt-2">
              <thead>
                <tr>
                  <th className="whitespace-no-wrap">IMAGES</th>
                
                  <th className="whitespace-no-wrap">First Name</th>
                  <th className="text-center whitespace-no-wrap">Last Name</th>
                  <th className="whitespace-no-wrap">Email</th>
                  <th className="text-center whitespace-no-wrap">STATUS</th>
                  <th className="text-center whitespace-no-wrap">ACTIONS</th>
                </tr>
              </thead>
              <tbody>
              {Object.keys(Users).length > 0 ? (
                
                Users.data.map((user, index) => (
                  <UserItem
                    key={user._id}
                    user={user}
                    index={index}
                  />
                ))
              ) : (
                  <h4>No User Found...</h4>
                )}
            
                
              
              </tbody>
            </table>
          </div>
          {/* END: Data List */}
          {/* BEGIN: Pagination */}
          <div className="intro-y col-span-12 flex flex-wrap sm:flex-row sm:flex-no-wrap items-center">
            <ul className="pagination">
              <li>
                <a className="pagination__link" href> <i className="w-4 h-4" data-feather="chevrons-left" /> </a>
              </li>
              <li>
                <a className="pagination__link" href> <i className="w-4 h-4" data-feather="chevron-left" /> </a>
              </li>
              <li> <a className="pagination__link" href>...</a> </li>
              <li> <a className="pagination__link" href>1</a> </li>
              <li> <a className="pagination__link pagination__link--active" href>2</a> </li>
              <li> <a className="pagination__link" href>3</a> </li>
              <li> <a className="pagination__link" href>...</a> </li>
              <li>
                <a className="pagination__link" href> <i className="w-4 h-4" data-feather="chevron-right" /> </a>
              </li>
              <li>
                <a className="pagination__link" href> <i className="w-4 h-4" data-feather="chevrons-right" /> </a>
              </li>
            </ul>
            <select className="w-20 input box mt-3 sm:mt-0">
              <option>10</option>
              <option>25</option>
              <option>35</option>
              <option>50</option>
            </select>
          </div>
          {/* END: Pagination */}
        </div>
       
      </div>
      )}
    </Fragment>
  )
}

Users.propTypes = {
  getUsers: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  // UpdateluggerStatus:PropTypes.func.isRequired,
  UpdateUserStatus:PropTypes.func.isRequired


};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { getUsers, UpdateUserStatus,SortAction })(Users);
