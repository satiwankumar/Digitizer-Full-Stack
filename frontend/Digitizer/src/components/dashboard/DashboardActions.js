import React,{Fragment,useEffect} from 'react';
import PropTypes from 'prop-types';
import { NavLink,Link, Redirect } from 'react-router-dom';
import {logout} from '../../actions/auth'
import {getNotifications} from '../../actions/profile'
import {connect} from 'react-redux'
import Spinner from '../layout/Spinner';

 import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const DasboardActions = ({auth:{isAuthenticated,loading,user},profile:{Notifications},getNotifications,logout}) => {

    let notifications = Notifications
    // console.log(notifications) 
   
  useEffect(() => {
    if(isAuthenticated){
    getNotifications();
  }
  }, [getNotifications,isAuthenticated]);
  
  const toggleMenu = () => {
    document.querySelector('body').classList.toggle('menu-collapsed')
  }
// const getCount = ()=>{
//   let count = 0
//   if(Object.keys(notifications).length>0){
    
//     let newNotification  = notifications.map(noti  => noti.isread==false)
//      count= newNotification.length
//   }
//   return count
  
// }

  const authLinks = (

    <div>
    <div className="mobile-menu md:hidden">
      <div className="mobile-menu-bar">
        <Link to className="flex mr-auto">
          <img alt="Midone Tailwind HTML Admin Template" className="w-6" src={`${process.env.PUBLIC_URL}+'/Assets1/dist/images/logo.svg`} />
          
        </Link>
        <Link to="javascript:;" id="mobile-menu-toggler"> <i data-feather="bar-chart-2" className="w-8 h-8 text-white transform -rotate-90" /> </Link>
      </div>
      <ul className="border-t border-theme-24 py-5 hidden">
        <li>
          <Link to="side-menu-dark-dashboard.html" className="menu">
            <div className="menu__icon"> <i data-feather="home" /> </div>
            <div className="menu__title"> Dashboard </div>
          </Link>
        </li>
        <li>
          <Link to="javascript:;" className="menu">
            <div className="menu__icon"> <i data-feather="box" /> </div>
            <div className="menu__title"> Orders <i data-feather="chevron-down" className="menu__sub-icon" /> </div>
          </Link>
          <ul className>
            <li>
              <Link to="side-menu-dark-dashboard.html" className="menu">
                <div className="menu__icon"> <i data-feather="activity" /> </div>
                <div className="menu__title"> Users</div>
              </Link>
            </li>
            <li>
              <Link to="simple-menu-dark-dashboard.html" className="menu">
                <div className="menu__icon"> <i data-feather="activity" /> </div>
                <div className="menu__title"> Simple Menu </div>
              </Link>
            </li>
            <li>
              <Link to="top-menu-dark-dashboard.html" className="menu">
                <div className="menu__icon"> <i data-feather="activity" /> </div>
                <div className="menu__title"> Top Menu </div>
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="side-menu-dark-inbox.html" className="menu">
            <div className="menu__icon"> <i data-feather="inbox" /> </div>
            <div className="menu__title"> Inbox </div>
          </Link>
        </li>
        <li>
          <Link to="side-menu-dark-file-manager.html" className="menu">
            <div className="menu__icon"> <i data-feather="hard-drive" /> </div>
            <div className="menu__title"> File Manager </div>
          </Link>
        </li>
        <li>
          <Link to="side-menu-dark-point-of-sale.html" className="menu">
            <div className="menu__icon"> <i data-feather="credit-card" /> </div>
            <div className="menu__title"> Point of Sale </div>
          </Link>
        </li>
        <li>
          <Link to="side-menu-dark-chat.html" className="menu">
            <div className="menu__icon"> <i data-feather="message-square" /> </div>
            <div className="menu__title"> Chat </div>
          </Link>
        </li>
        <li>
          <Link to="side-menu-dark-post.html" className="menu">
            <div className="menu__icon"> <i data-feather="file-text" /> </div>
            <div className="menu__title"> Post </div>
          </Link>
        </li>
        <li className="menu__devider my-6" />
        <li>
          <Link to="javascript:;.html" className="menu menu--active">
            <div className="menu__icon"> <i data-feather="edit" /> </div>
            <div className="menu__title"> Crud <i data-feather="chevron-down" className="menu__sub-icon" /> </div>
          </Link>
          <ul className="menu__sub-open">
            <li>
              <Link to="side-menu-dark-crud-data-list.html" className="menu menu--active">
                <div className="menu__icon"> <i data-feather="activity" /> </div>
                <div className="menu__title"> Data List </div>
              </Link>
            </li>
            <li>
              <Link to="side-menu-dark-crud-form.html" className="menu">
                <div className="menu__icon"> <i data-feather="activity" /> </div>
                <div className="menu__title"> Form </div>
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="javascript:;" className="menu">
            <div className="menu__icon"> <i data-feather="users" /> </div>
            <div className="menu__title"> Users <i data-feather="chevron-down" className="menu__sub-icon" /> </div>
          </Link>
          <ul className>
            <li>
              <Link to="side-menu-dark-users-layout-1.html" className="menu">
                <div className="menu__icon"> <i data-feather="activity" /> </div>
                <div className="menu__title"> Layout 1 </div>
              </Link>
            </li>
            <li>
              <Link to="side-menu-dark-users-layout-2.html" className="menu">
                <div className="menu__icon"> <i data-feather="activity" /> </div>
                <div className="menu__title"> Layout 2 </div>
              </Link>
            </li>
            <li>
              <Link to="side-menu-dark-users-layout-3.html" className="menu">
                <div className="menu__icon"> <i data-feather="activity" /> </div>
                <div className="menu__title"> Layout 3 </div>
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="javascript:;" className="menu">
            <div className="menu__icon"> <i data-feather="trello" /> </div>
            <div className="menu__title"> Profile <i data-feather="chevron-down" className="menu__sub-icon" /> </div>
          </Link>
          <ul className>
            <li>
              <Link to="side-menu-dark-profile-overview-1.html" className="menu">
                <div className="menu__icon"> <i data-feather="activity" /> </div>
                <div className="menu__title"> Overview 1 </div>
              </Link>
            </li>
            <li>
              <Link to="side-menu-dark-profile-overview-2.html" className="menu">
                <div className="menu__icon"> <i data-feather="activity" /> </div>
                <div className="menu__title"> Overview 2 </div>
              </Link>
            </li>
            <li>
              <Link to="side-menu-dark-profile-overview-3.html" className="menu">
                <div className="menu__icon"> <i data-feather="activity" /> </div>
                <div className="menu__title"> Overview 3 </div>
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="javascript:;" className="menu">
            <div className="menu__icon"> <i data-feather="layout" /> </div>
            <div className="menu__title"> Pages <i data-feather="chevron-down" className="menu__sub-icon" /> </div>
          </Link>
          <ul className>
            <li>
              <Link to="javascript:;" className="menu">
                <div className="menu__icon"> <i data-feather="activity" /> </div>
                <div className="menu__title"> Wizards <i data-feather="chevron-down" className="menu__sub-icon" /> </div>
              </Link>
              <ul className>
                <li>
                  <Link to="side-menu-dark-wizard-layout-1.html" className="menu">
                    <div className="menu__icon"> <i data-feather="zap" /> </div>
                    <div className="menu__title">Layout 1</div>
                  </Link>
                </li>
                <li>
                  <Link to="side-menu-dark-wizard-layout-2.html" className="menu">
                    <div className="menu__icon"> <i data-feather="zap" /> </div>
                    <div className="menu__title">Layout 2</div>
                  </Link>
                </li>
                <li>
                  <Link to="side-menu-dark-wizard-layout-3.html" className="menu">
                    <div className="menu__icon"> <i data-feather="zap" /> </div>
                    <div className="menu__title">Layout 3</div>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="javascript:;" className="menu">
                <div className="menu__icon"> <i data-feather="activity" /> </div>
                <div className="menu__title"> Blog <i data-feather="chevron-down" className="menu__sub-icon" /> </div>
              </Link>
              <ul className>
                <li>
                  <Link to="side-menu-dark-blog-layout-1.html" className="menu">
                    <div className="menu__icon"> <i data-feather="zap" /> </div>
                    <div className="menu__title">Layout 1</div>
                  </Link>
                </li>
                <li>
                  <Link to="side-menu-dark-blog-layout-2.html" className="menu">
                    <div className="menu__icon"> <i data-feather="zap" /> </div>
                    <div className="menu__title">Layout 2</div>
                  </Link>
                </li>
                <li>
                  <Link to="side-menu-dark-blog-layout-3.html" className="menu">
                    <div className="menu__icon"> <i data-feather="zap" /> </div>
                    <div className="menu__title">Layout 3</div>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="javascript:;" className="menu">
                <div className="menu__icon"> <i data-feather="activity" /> </div>
                <div className="menu__title"> Pricing <i data-feather="chevron-down" className="menu__sub-icon" /> </div>
              </Link>
              <ul className>
                <li>
                  <Link to="side-menu-dark-pricing-layout-1.html" className="menu">
                    <div className="menu__icon"> <i data-feather="zap" /> </div>
                    <div className="menu__title">Layout 1</div>
                  </Link>
                </li>
                <li>
                  <Link to="side-menu-dark-pricing-layout-2.html" className="menu">
                    <div className="menu__icon"> <i data-feather="zap" /> </div>
                    <div className="menu__title">Layout 2</div>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="javascript:;" className="menu">
                <div className="menu__icon"> <i data-feather="activity" /> </div>
                <div className="menu__title"> Invoice <i data-feather="chevron-down" className="menu__sub-icon" /> </div>
              </Link>
              <ul className>
                <li>
                  <Link to="side-menu-dark-invoice-layout-1.html" className="menu">
                    <div className="menu__icon"> <i data-feather="zap" /> </div>
                    <div className="menu__title">Layout 1</div>
                  </Link>
                </li>
                <li>
                  <Link to="side-menu-dark-invoice-layout-2.html" className="menu">
                    <div className="menu__icon"> <i data-feather="zap" /> </div>
                    <div className="menu__title">Layout 2</div>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="javascript:;" className="menu">
                <div className="menu__icon"> <i data-feather="activity" /> </div>
                <div className="menu__title"> FAQ <i data-feather="chevron-down" className="menu__sub-icon" /> </div>
              </Link>
              <ul className>
                <li>
                  <Link to="side-menu-dark-faq-layout-1.html" className="menu">
                    <div className="menu__icon"> <i data-feather="zap" /> </div>
                    <div className="menu__title">Layout 1</div>
                  </Link>
                </li>
                <li>
                  <Link to="side-menu-dark-faq-layout-2.html" className="menu">
                    <div className="menu__icon"> <i data-feather="zap" /> </div>
                    <div className="menu__title">Layout 2</div>
                  </Link>
                </li>
                <li>
                  <Link to="side-menu-dark-faq-layout-3.html" className="menu">
                    <div className="menu__icon"> <i data-feather="zap" /> </div>
                    <div className="menu__title">Layout 3</div>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="login-dark-login.html" className="menu">
                <div className="menu__icon"> <i data-feather="activity" /> </div>
                <div className="menu__title"> Login </div>
              </Link>
            </li>
            <li>
              <Link to="login-dark-register.html" className="menu">
                <div className="menu__icon"> <i data-feather="activity" /> </div>
                <div className="menu__title"> Register </div>
              </Link>
            </li>
            <li>
              <Link to="main-dark-error-page.html" className="menu">
                <div className="menu__icon"> <i data-feather="activity" /> </div>
                <div className="menu__title"> Error Page </div>
              </Link>
            </li>
            <li>
              <Link to="side-menu-dark-update-profile.html" className="menu">
                <div className="menu__icon"> <i data-feather="activity" /> </div>
                <div className="menu__title"> Update profile </div>
              </Link>
            </li>
            <li>
              <Link to="side-menu-dark-change-password.html" className="menu">
                <div className="menu__icon"> <i data-feather="activity" /> </div>
                <div className="menu__title"> Change Password </div>
              </Link>
            </li>
          </ul>
        </li>
        <li className="menu__devider my-6" />
        <li>
          <Link to="javascript:;" className="menu">
            <div className="menu__icon"> <i data-feather="inbox" /> </div>
            <div className="menu__title"> Components <i data-feather="chevron-down" className="menu__sub-icon" /> </div>
          </Link>
          <ul className>
            <li>
              <Link to="javascript:;" className="menu">
                <div className="menu__icon"> <i data-feather="activity" /> </div>
                <div className="menu__title"> Grid <i data-feather="chevron-down" className="menu__sub-icon" /> </div>
              </Link>
              <ul className>
                <li>
                  <Link to="side-menu-dark-regular-table.html" className="menu">
                    <div className="menu__icon"> <i data-feather="zap" /> </div>
                    <div className="menu__title">Regular Table</div>
                  </Link>
                </li>
                <li>
                  <Link to="side-menu-dark-tabulator.html" className="menu">
                    <div className="menu__icon"> <i data-feather="zap" /> </div>
                    <div className="menu__title">Tabulator</div>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="side-menu-dark-accordion.html" className="menu">
                <div className="menu__icon"> <i data-feather="activity" /> </div>
                <div className="menu__title"> Accordion </div>
              </Link>
            </li>
            <li>
              <Link to="side-menu-dark-button.html" className="menu">
                <div className="menu__icon"> <i data-feather="activity" /> </div>
                <div className="menu__title"> Button </div>
              </Link>
            </li>
            <li>
              <Link to="side-menu-dark-modal.html" className="menu">
                <div className="menu__icon"> <i data-feather="activity" /> </div>
                <div className="menu__title"> Modal </div>
              </Link>
            </li>
            <li>
              <Link to="side-menu-dark-alert.html" className="menu">
                <div className="menu__icon"> <i data-feather="activity" /> </div>
                <div className="menu__title"> Alert </div>
              </Link>
            </li>
            <li>
              <Link to="side-menu-dark-progress-bar.html" className="menu">
                <div className="menu__icon"> <i data-feather="activity" /> </div>
                <div className="menu__title"> Progress Bar </div>
              </Link>
            </li>
            <li>
              <Link to="side-menu-dark-tooltip.html" className="menu">
                <div className="menu__icon"> <i data-feather="activity" /> </div>
                <div className="menu__title"> Tooltip </div>
              </Link>
            </li>
            <li>
              <Link to="side-menu-dark-dropdown.html" className="menu">
                <div className="menu__icon"> <i data-feather="activity" /> </div>
                <div className="menu__title"> Dropdown </div>
              </Link>
            </li>
            <li>
              <Link to="side-menu-dark-toast.html" className="menu">
                <div className="menu__icon"> <i data-feather="activity" /> </div>
                <div className="menu__title"> Toast </div>
              </Link>
            </li>
            <li>
              <Link to="side-menu-dark-typography.html" className="menu">
                <div className="menu__icon"> <i data-feather="activity" /> </div>
                <div className="menu__title"> Typography </div>
              </Link>
            </li>
            <li>
              <Link to="side-menu-dark-icon.html" className="menu">
                <div className="menu__icon"> <i data-feather="activity" /> </div>
                <div className="menu__title"> Icon </div>
              </Link>
            </li>
            <li>
              <Link to="side-menu-dark-loading-icon.html" className="menu">
                <div className="menu__icon"> <i data-feather="activity" /> </div>
                <div className="menu__title"> Loading Icon </div>
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="javascript:;" className="menu">
            <div className="menu__icon"> <i data-feather="sidebar" /> </div>
            <div className="menu__title"> Forms <i data-feather="chevron-down" className="menu__sub-icon" /> </div>
          </Link>
          <ul className>
            <li>
              <Link to="side-menu-dark-regular-form.html" className="menu">
                <div className="menu__icon"> <i data-feather="activity" /> </div>
                <div className="menu__title"> Regular Form </div>
              </Link>
            </li>
            <li>
              <Link to="side-menu-dark-datepicker.html" className="menu">
                <div className="menu__icon"> <i data-feather="activity" /> </div>
                <div className="menu__title"> Datepicker </div>
              </Link>
            </li>
            <li>
              <Link to="side-menu-dark-tail-select.html" className="menu">
                <div className="menu__icon"> <i data-feather="activity" /> </div>
                <div className="menu__title"> Tail Select </div>
              </Link>
            </li>
            <li>
              <Link to="side-menu-dark-file-upload.html" className="menu">
                <div className="menu__icon"> <i data-feather="activity" /> </div>
                <div className="menu__title"> File Upload </div>
              </Link>
            </li>
            <li>
              <Link to="side-menu-dark-wysiwyg-editor.html" className="menu">
                <div className="menu__icon"> <i data-feather="activity" /> </div>
                <div className="menu__title"> Wysiwyg Editor </div>
              </Link>
            </li>
            <li>
              <Link to="side-menu-dark-validation.html" className="menu">
                <div className="menu__icon"> <i data-feather="activity" /> </div>
                <div className="menu__title"> Validation </div>
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="javascript:;" className="menu">
            <div className="menu__icon"> <i data-feather="hard-drive" /> </div>
            <div className="menu__title"> Widgets <i data-feather="chevron-down" className="menu__sub-icon" /> </div>
          </Link>
          <ul className>
            <li>
              <Link to="side-menu-dark-chart.html" className="menu">
                <div className="menu__icon"> <i data-feather="activity" /> </div>
                <div className="menu__title"> Chart </div>
              </Link>
            </li>
            <li>
              <Link to="side-menu-dark-slider.html" className="menu">
                <div className="menu__icon"> <i data-feather="activity" /> </div>
                <div className="menu__title"> Slider </div>
              </Link>
            </li>
            <li>
              <Link to="side-menu-dark-image-zoom.html" className="menu">
                <div className="menu__icon"> <i data-feather="activity" /> </div>
                <div className="menu__title"> Image Zoom </div>
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    {/* END: Mobile Menu */}
 
      {/* BEGIN: Side Menu */}
      <nav className="side-nav">
        <Link to className="intro-x flex items-center pl-5 pt-4">
        <img alt="Dititizer" className="w-6" src={process.env.PUBLIC_URL+'/Assets1/dist/images/logo.svg'} />

       
    { 
    //   <span className="hidden xl:block text-white text-lg ml-3"> Digitizer<span className="font-medium"></span> </span>
    // 
  }
        </Link>
        <div className="side-nav__devider my-6" />
        <ul>
          <li>
            <Link to="/dashboard" className="side-menu">
              <div className="side-menu__icon"> <i data-feather="home" /> </div>
              <div className="side-menu__title"> Dashboard </div>
            </Link>
          </li>
          <li>
            <Link to="/users" className="side-menu">
              <div className="side-menu__icon"> <i data-feather="box" /> </div>
              <div className="side-menu__title"> Users <i data-feather="chevron-down" className="side-menu__sub-icon" /> </div>
            </Link>
           
          </li>
          <li>
          <Link to="/luggers" className="side-menu">
            <div className="side-menu__icon"> <i data-feather="box" /> </div>
            <div className="side-menu__title"> Orders <i data-feather="chevron-down" className="side-menu__sub-icon" /> </div>
          </Link>
         
        </li>
    
   

        </ul>
      </nav>
      {/* END: Side Menu */}
      {/* BEGIN: Content */}
      {/* END: Content */}
 
  </div>


  )

  return (
    <div>
   
{!loading && (<Fragment>{isAuthenticated?authLinks:<Redirect to="/" />}</Fragment>)}

   
    </div>
    
  );
};

DasboardActions.propTypes = {
  logout:PropTypes.func.isRequired,
  getNotifications:PropTypes.func.isRequired,
  auth:PropTypes.object.isRequired
};


const mapStateToProps=state=>({
  auth:state.auth,
  profile: state.profile
})

export default connect(mapStateToProps,{logout,getNotifications})(DasboardActions)

