import React from 'react'
import {Link} from 'react-router-dom'

export const Topbar = () => {
    return (
        <div>
        <div className="top-bar">
        {/* BEGIN: Breadcrumb */}
        <div className="-intro-x breadcrumb mr-auto hidden sm:flex"> <a href className>Application</a> <i data-feather="chevron-right" className="breadcrumb__icon" /> <a href className="breadcrumb--active">Dashboard</a> </div>
        {/* END: Breadcrumb */}
        {/* BEGIN: Search */}
        <div className="intro-x relative mr-3 sm:mr-6">
          <div className="search hidden sm:block">
            <input type="text" className="search__input input placeholder-theme-13" placeholder="Search..." />
            <i data-feather="search" className="search__icon dark:text-gray-300" /> 
          </div>
          <a className="notification sm:hidden" href> <i data-feather="search" className="notification__icon dark:text-gray-300" /> </a>
          <div className="search-result">
            <div className="search-result__content">
              <div className="search-result__content__title">Pages</div>
              <div className="mb-5">
                <a href className="flex items-center">
                  <div className="w-8 h-8 bg-theme-18 text-theme-9 flex items-center justify-center rounded-full"> <i className="w-4 h-4" data-feather="inbox" /> </div>
                  <div className="ml-3">Mail Settings</div>
                </a>
                <a href className="flex items-center mt-2">
                  <div className="w-8 h-8 bg-theme-17 text-theme-11 flex items-center justify-center rounded-full"> <i className="w-4 h-4" data-feather="users" /> </div>
                  <div className="ml-3">Users &amp; Permissions</div>
                </a>
                <a href className="flex items-center mt-2">
                  <div className="w-8 h-8 bg-theme-14 text-theme-10 flex items-center justify-center rounded-full"> <i className="w-4 h-4" data-feather="credit-card" /> </div>
                  <div className="ml-3">Transactions Report</div>
                </a>
              </div>
              <div className="search-result__content__title">Users</div>
              <div className="mb-5">
                <a href className="flex items-center mt-2">
                  <div className="w-8 h-8 image-fit">
                    <img alt="Midone Tailwind HTML Admin Template" className="rounded-full" src="dist/images/profile-6.jpg" />
                  </div>
                  <div className="ml-3">Russell Crowe</div>
                  <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">russellcrowe@left4code.com</div>
                </a>
                <a href className="flex items-center mt-2">
                  <div className="w-8 h-8 image-fit">
                    <img alt="Midone Tailwind HTML Admin Template" className="rounded-full" src="dist/images/profile-1.jpg" />
                  </div>
                  <div className="ml-3">Denzel Washington</div>
                  <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">denzelwashington@left4code.com</div>
                </a>
                <a href className="flex items-center mt-2">
                  <div className="w-8 h-8 image-fit">
                    <img alt="Midone Tailwind HTML Admin Template" className="rounded-full" src="dist/images/profile-5.jpg" />
                  </div>
                  <div className="ml-3">Tom Cruise</div>
                  <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">tomcruise@left4code.com</div>
                </a>
                <a href className="flex items-center mt-2">
                  <div className="w-8 h-8 image-fit">
                    <img alt="Midone Tailwind HTML Admin Template" className="rounded-full" src="dist/images/profile-11.jpg" />
                  </div>
                  <div className="ml-3">Al Pacino</div>
                  <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">alpacino@left4code.com</div>
                </a>
              </div>
              <div className="search-result__content__title">Products</div>
              <a href className="flex items-center mt-2">
                <div className="w-8 h-8 image-fit">
                  <img alt="Midone Tailwind HTML Admin Template" className="rounded-full" src="dist/images/preview-11.jpg" />
                </div>
                <div className="ml-3">Samsung Q90 QLED TV</div>
                <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">Electronic</div>
              </a>
              <a href className="flex items-center mt-2">
                <div className="w-8 h-8 image-fit">
                  <img alt="Midone Tailwind HTML Admin Template" className="rounded-full" src="dist/images/preview-15.jpg" />
                </div>
                <div className="ml-3">Samsung Galaxy S20 Ultra</div>
                <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">Smartphone &amp; Tablet</div>
              </a>
              <a href className="flex items-center mt-2">
                <div className="w-8 h-8 image-fit">
                  <img alt="Midone Tailwind HTML Admin Template" className="rounded-full" src="dist/images/preview-14.jpg" />
                </div>
                <div className="ml-3">Samsung Galaxy S20 Ultra</div>
                <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">Smartphone &amp; Tablet</div>
              </a>
              <a href className="flex items-center mt-2">
                <div className="w-8 h-8 image-fit">
                  <img alt="Midone Tailwind HTML Admin Template" className="rounded-full" src="dist/images/preview-8.jpg" />
                </div>
                <div className="ml-3">Sony Master Series A9G</div>
                <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">Electronic</div>
              </a>
            </div>
          </div>
        </div>
        {/* END: Search */}
        {/* BEGIN: Notifications */}
        <div className="intro-x dropdown mr-auto sm:mr-6">
          <div className="dropdown-toggle notification notification--bullet cursor-pointer"> <i data-feather="bell" className="notification__icon dark:text-gray-300" /> </div>
          <div className="notification-content pt-2 dropdown-box">
            <div className="notification-content__box dropdown-box__content box dark:bg-dark-6">
              <div className="notification-content__title">Notifications</div>
              <div className="cursor-pointer relative flex items-center ">
                <div className="w-12 h-12 flex-none image-fit mr-1">
                  <img alt="Midone Tailwind HTML Admin Template" className="rounded-full" src="dist/images/profile-6.jpg" />
                  <div className="w-3 h-3 bg-theme-9 absolute right-0 bottom-0 rounded-full border-2 border-white" />
                </div>
                <div className="ml-2 overflow-hidden">
                  <div className="flex items-center">
                    <a href="javascript:;" className="font-medium truncate mr-5">Russell Crowe</a> 
                    <div className="text-xs text-gray-500 ml-auto whitespace-no-wrap">05:09 AM</div>
                  </div>
                  <div className="w-full truncate text-gray-600">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 20</div>
                </div>
              </div>
              <div className="cursor-pointer relative flex items-center mt-5">
                <div className="w-12 h-12 flex-none image-fit mr-1">
                  <img alt="Midone Tailwind HTML Admin Template" className="rounded-full" src="dist/images/profile-1.jpg" />
                  <div className="w-3 h-3 bg-theme-9 absolute right-0 bottom-0 rounded-full border-2 border-white" />
                </div>
                <div className="ml-2 overflow-hidden">
                  <div className="flex items-center">
                    <a href="javascript:;" className="font-medium truncate mr-5">Denzel Washington</a> 
                    <div className="text-xs text-gray-500 ml-auto whitespace-no-wrap">06:05 AM</div>
                  </div>
                  <div className="w-full truncate text-gray-600">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 20</div>
                </div>
              </div>
              <div className="cursor-pointer relative flex items-center mt-5">
                <div className="w-12 h-12 flex-none image-fit mr-1">
                  <img alt="Midone Tailwind HTML Admin Template" className="rounded-full" src="dist/images/profile-5.jpg" />
                  <div className="w-3 h-3 bg-theme-9 absolute right-0 bottom-0 rounded-full border-2 border-white" />
                </div>
                <div className="ml-2 overflow-hidden">
                  <div className="flex items-center">
                    <a href="javascript:;" className="font-medium truncate mr-5">Tom Cruise</a> 
                    <div className="text-xs text-gray-500 ml-auto whitespace-no-wrap">06:05 AM</div>
                  </div>
                  <div className="w-full truncate text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500</div>
                </div>
              </div>
              <div className="cursor-pointer relative flex items-center mt-5">
                <div className="w-12 h-12 flex-none image-fit mr-1">
                  <img alt="Midone Tailwind HTML Admin Template" className="rounded-full" src="dist/images/profile-11.jpg" />
                  <div className="w-3 h-3 bg-theme-9 absolute right-0 bottom-0 rounded-full border-2 border-white" />
                </div>
                <div className="ml-2 overflow-hidden">
                  <div className="flex items-center">
                    <a href="javascript:;" className="font-medium truncate mr-5">Al Pacino</a> 
                    <div className="text-xs text-gray-500 ml-auto whitespace-no-wrap">01:10 PM</div>
                  </div>
                  <div className="w-full truncate text-gray-600">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 20</div>
                </div>
              </div>
              <div className="cursor-pointer relative flex items-center mt-5">
                <div className="w-12 h-12 flex-none image-fit mr-1">
                  <img alt="Midone Tailwind HTML Admin Template" className="rounded-full" src="dist/images/profile-13.jpg" />
                  <div className="w-3 h-3 bg-theme-9 absolute right-0 bottom-0 rounded-full border-2 border-white" />
                </div>
                <div className="ml-2 overflow-hidden">
                  <div className="flex items-center">
                    <a href="javascript:;" className="font-medium truncate mr-5">Kevin Spacey</a> 
                    <div className="text-xs text-gray-500 ml-auto whitespace-no-wrap">01:10 PM</div>
                  </div>
                  <div className="w-full truncate text-gray-600">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomi</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* END: Notifications */}
        {/* BEGIN: Account Menu */}
        <div className="intro-x dropdown w-8 h-8">
          <div className="dropdown-toggle w-8 h-8 rounded-full overflow-hidden shadow-lg image-fit zoom-in">
            <img alt="Midone Tailwind HTML Admin Template" src="dist/images/profile-10.jpg" />
          </div>
          <div className="dropdown-box w-56">
            <div className="dropdown-box__content box bg-theme-38 dark:bg-dark-6 text-white">
              <div className="p-4 border-b border-theme-40 dark:border-dark-3">
                <div className="font-medium">Russell Crowe</div>
                <div className="text-xs text-theme-41 dark:text-gray-600">DevOps Engineer</div>
              </div>
              <div className="p-2">
              <Link to="" className="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 dark:hover:bg-dark-3 rounded-md"> <i data-feather="user" className="w-4 h-4 mr-2" /> Profile</Link>
              <Link to="" className="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 dark:hover:bg-dark-3 rounded-md"> <i data-feather="edit" className="w-4 h-4 mr-2" /> Add Account</Link>
              <Link to="" className="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 dark:hover:bg-dark-3 rounded-md"> <i data-feather="lock" className="w-4 h-4 mr-2" /> Reset Password</Link>
              <Link to="" className="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 dark:hover:bg-dark-3 rounded-md"> <i data-feather="help-circle" className="w-4 h-4 mr-2" /> Help</Link>
              </div>
              <div className="p-2 border-t border-theme-40 dark:border-dark-3">
              <Link to="" className="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 dark:hover:bg-dark-3 rounded-md"> <i data-feather="toggle-right" className="w-4 h-4 mr-2" /> Logout</Link>
              </div>
            </div>
          </div>
        </div>
        {/* END: Account Menu */}
      </div>
      {/* END: Top Bar */}
        </div>
    )
}
