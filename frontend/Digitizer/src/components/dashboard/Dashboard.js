import React,{useEffect, Fragment, useState} from 'react'
import {Link,withRouter} from 'react-router-dom'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { Bar } from "react-chartjs-2";
const data = {
  labels: ['Jan', 'Feb', 'Mar', 'April', 'May' ,'june' ,'july','august','september','october','november','december'],
  datasets: [
    {
      label: 'No of Requests',
      data: [3, 2, 2, 6, 4,5,4,5,4,8,4,6,4],
      borderColor: [
        'rgba(0, 0, 0, 0.7)',
        'rgba(0, 0, 0, 0.7)'
        
],
      backgroundColor: [
        'rgba(51, 51, 51)',
       ' rgb(75,0,130)',
       'rgba(51, 51, 51)',
       ' rgb(75,0,130)',
       'rgba(51, 51, 51)',
       ' rgb(75,0,130)',
       'rgba(51, 51, 51)',
       ' rgb(75,0,130)',
       'rgba(51, 51, 51)',
       ' rgb(75,0,130)',
       'rgba(51, 51, 51)',
       ' rgb(75,0,130)'
        
      ]
    }
    // {
    //   label: '',
    //   data: [4, 3, 2, 2, 3],
    //   borderColor: [
    //     'rgba(54, 162, 235, 0.2)',
    //     'rgba(54, 162, 235, 0.2)',
    //     'rgba(54, 162, 235, 0.2)',
    //     'rgba(54, 162, 235, 0.2)',
    //     'rgba(54, 162, 235, 0.2)'
    //   ],
    //   backgroundColor: [
    //     'rgba(54, 162, 235, 0.2)',
    //     'rgba(54, 162, 235, 0.2)',
    //     'rgba(54, 162, 235, 0.2)',
    //     'rgba(54, 162, 235, 0.2)',
    //     'rgba(54, 162, 235, 0.2)'
    //   ]
    // }
  ]
}

const options = {
  title: {
    display: true,
    text: 'Bar Chart'
  },
  scales: {
    yAxes: [
      {
        ticks: {
          min: 0,
          max: 6,
          stepSize: 1
        }
      }
    ]
  }
}

const Dashboard = () => {

    return(
   
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 xxl:col-span-9 grid grid-cols-12 gap-6">
          {/* BEGIN: General Report */}
          <div className="col-span-12 mt-8">
            <div className="intro-y flex items-center h-10">
              <h2 className="text-lg font-medium truncate mr-5">
                General Report
              </h2>
              <a href className="ml-auto flex text-theme-1 dark:text-theme-10"> <i data-feather="refresh-ccw" className="w-4 h-4 mr-3" /> Reload Data </a>
            </div>
            <div className="grid grid-cols-12 gap-6 mt-5">
              <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                <div className="report-box zoom-in">
                  <div className="box p-5">
                    <div className="flex">
                      <i data-feather="shopping-cart" className="report-box__icon text-theme-10" /> 
                      <div className="ml-auto">
                        <div className="report-box__indicator bg-theme-9 tooltip cursor-pointer" title="33% Higher than last month"> 33% <i data-feather="chevron-up" className="w-4 h-4" /> </div>
                      </div>
                    </div>
                    <div className="text-3xl font-bold leading-8 mt-6">4.510</div>
                    <div className="text-base text-gray-600 mt-1">Item Sales</div>
                  </div>
                </div>
              </div>
              <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                <div className="report-box zoom-in">
                  <div className="box p-5">
                    <div className="flex">
                      <i data-feather="credit-card" className="report-box__icon text-theme-11" /> 
                      <div className="ml-auto">
                        <div className="report-box__indicator bg-theme-6 tooltip cursor-pointer" title="2% Lower than last month"> 2% <i data-feather="chevron-down" className="w-4 h-4" /> </div>
                      </div>
                    </div>
                    <div className="text-3xl font-bold leading-8 mt-6">3.521</div>
                    <div className="text-base text-gray-600 mt-1">New Orders</div>
                  </div>
                </div>
              </div>
              <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                <div className="report-box zoom-in">
                  <div className="box p-5">
                    <div className="flex">
                      <i data-feather="monitor" className="report-box__icon text-theme-12" /> 
                      <div className="ml-auto">
                        <div className="report-box__indicator bg-theme-9 tooltip cursor-pointer" title="12% Higher than last month"> 12% <i data-feather="chevron-up" className="w-4 h-4" /> </div>
                      </div>
                    </div>
                    <div className="text-3xl font-bold leading-8 mt-6">2.145</div>
                    <div className="text-base text-gray-600 mt-1">Total Products</div>
                  </div>
                </div>
              </div>
              <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                <div className="report-box zoom-in">
                  <div className="box p-5">
                    <div className="flex">
                      <i data-feather="user" className="report-box__icon text-theme-9" /> 
                      <div className="ml-auto">
                        <div className="report-box__indicator bg-theme-9 tooltip cursor-pointer" title="22% Higher than last month"> 22% <i data-feather="chevron-up" className="w-4 h-4" /> </div>
                      </div>
                    </div>
                    <div className="text-3xl font-bold leading-8 mt-6">152.000</div>
                    <div className="text-base text-gray-600 mt-1">Unique Visitor</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END: General Report */}
          {/* BEGIN: Sales Report */}
          <div className="col-span-12 lg:col-span-6 mt-8">
            <div className="intro-y block sm:flex items-center h-10">
              <h2 className="text-lg font-medium truncate mr-5">
                Sales Report
              </h2>
              <div className="sm:ml-auto mt-3 sm:mt-0 relative text-gray-700 dark:text-gray-300">
                <i data-feather="calendar" className="w-4 h-4 z-10 absolute my-auto inset-y-0 ml-3 left-0" /> 
                <input type="text" className="datepicker input w-full sm:w-56 box pl-10" />
              </div>
            </div>
            <div className="intro-y box p-5 mt-12 sm:mt-5">
              <div className="flex flex-col xl:flex-row xl:items-center">
                <div className="flex">
                  <div>
                    <div className="text-theme-20 dark:text-gray-300 text-lg xl:text-xl font-bold">$15,000</div>
                    <div className="text-gray-600 dark:text-gray-600">This Month</div>
                  </div>
                  <div className="w-px h-12 border border-r border-dashed border-gray-300 dark:border-dark-5 mx-4 xl:mx-6" />
                  <div>
                    <div className="text-gray-600 dark:text-gray-600 text-lg xl:text-xl font-medium">$10,000</div>
                    <div className="text-gray-600 dark:text-gray-600">Last Month</div>
                  </div>
                </div>
                <div className="dropdown xl:ml-auto mt-5 xl:mt-0">
                  <button className="dropdown-toggle button font-normal border dark:border-dark-5 text-white dark:text-gray-300 relative flex items-center text-gray-700"> Filter by Category <i data-feather="chevron-down" className="w-4 h-4 ml-2" /> </button>
                  <div className="dropdown-box w-40">
                    <div className="dropdown-box__content box dark:bg-dark-1 p-2 overflow-y-auto h-32"> <a href className="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md">PC &amp; Laptop</a> <a href className="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md">Smartphone</a> <a href className="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md">Electronic</a> <a href className="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md">Photography</a> <a href className="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md">Sport</a> </div>
                  </div>
                </div>
              </div>
              <div className="report-chart">
                <canvas id="report-line-chart" height={160} className="mt-6" />
              </div>
            </div>
          </div>
          {/* END: Sales Report */}
          {/* BEGIN: Weekly Top Seller */}
          <div className="col-span-12 sm:col-span-6 lg:col-span-3 mt-8">
            <div className="intro-y flex items-center h-10">
              <h2 className="text-lg font-medium truncate mr-5">
                Weekly Top Seller
              </h2>
              <a href className="ml-auto text-theme-1 dark:text-theme-10 truncate">See all</a> 
            </div>
            <div className="intro-y box p-5 mt-5">
              <canvas className="mt-3" id="report-pie-chart" height={280} />
              <div className="mt-8">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-theme-11 rounded-full mr-3" />
                  <span className="truncate">17 - 30 Years old</span> 
                  <div className="h-px flex-1 border border-r border-dashed border-gray-300 mx-3 xl:hidden" />
                  <span className="font-medium xl:ml-auto">62%</span> 
                </div>
                <div className="flex items-center mt-4">
                  <div className="w-2 h-2 bg-theme-1 rounded-full mr-3" />
                  <span className="truncate">31 - 50 Years old</span> 
                  <div className="h-px flex-1 border border-r border-dashed border-gray-300 mx-3 xl:hidden" />
                  <span className="font-medium xl:ml-auto">33%</span> 
                </div>
                <div className="flex items-center mt-4">
                  <div className="w-2 h-2 bg-theme-12 rounded-full mr-3" />
                  <span className="truncate">&gt;= 50 Years old</span> 
                  <div className="h-px flex-1 border border-r border-dashed border-gray-300 mx-3 xl:hidden" />
                  <span className="font-medium xl:ml-auto">10%</span> 
                </div>
              </div>
            </div>
          </div>
          {/* END: Weekly Top Seller */}
          {/* BEGIN: Sales Report */}
          <div className="col-span-12 sm:col-span-6 lg:col-span-3 mt-8">
            <div className="intro-y flex items-center h-10">
              <h2 className="text-lg font-medium truncate mr-5">
                Sales Report
              </h2>
              <a href className="ml-auto text-theme-1 dark:text-theme-10 truncate">See all</a> 
            </div>
            <div className="intro-y box p-5 mt-5">
              <canvas className="mt-3" id="report-donut-chart" height={280} />
              <div className="mt-8">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-theme-11 rounded-full mr-3" />
                  <span className="truncate">17 - 30 Years old</span> 
                  <div className="h-px flex-1 border border-r border-dashed border-gray-300 mx-3 xl:hidden" />
                  <span className="font-medium xl:ml-auto">62%</span> 
                </div>
                <div className="flex items-center mt-4">
                  <div className="w-2 h-2 bg-theme-1 rounded-full mr-3" />
                  <span className="truncate">31 - 50 Years old</span> 
                  <div className="h-px flex-1 border border-r border-dashed border-gray-300 mx-3 xl:hidden" />
                  <span className="font-medium xl:ml-auto">33%</span> 
                </div>
                <div className="flex items-center mt-4">
                  <div className="w-2 h-2 bg-theme-12 rounded-full mr-3" />
                  <span className="truncate">&gt;= 50 Years old</span> 
                  <div className="h-px flex-1 border border-r border-dashed border-gray-300 mx-3 xl:hidden" />
                  <span className="font-medium xl:ml-auto">10%</span> 
                </div>
              </div>
            </div>
          </div>
          {/* END: Sales Report */}
          {/* BEGIN: Official Store */}
          <div className="col-span-12 xl:col-span-8 mt-6">
            <div className="intro-y block sm:flex items-center h-10">
              <h2 className="text-lg font-medium truncate mr-5">
                Official Store
              </h2>
              <div className="sm:ml-auto mt-3 sm:mt-0 relative text-gray-700 dark:text-gray-300">
                <i data-feather="map-pin" className="w-4 h-4 z-10 absolute my-auto inset-y-0 ml-3 left-0" /> 
                <input type="text" className="input w-full sm:w-40 box pl-10" placeholder="Filter by city" />
              </div>
            </div>
            <div className="intro-y box p-5 mt-12 sm:mt-5">
              <div>250 Official stores in 21 countries, click the marker to see location details.</div>
              <div className="report-maps mt-5 bg-gray-200 rounded-md" data-center="-6.2425342, 106.8626478" data-sources="/dist/json/location.json" />
            </div>
          </div>
          {/* END: Official Store */}
          {/* BEGIN: Weekly Best Sellers */}
          <div className="col-span-12 xl:col-span-4 mt-6">
            <div className="intro-y flex items-center h-10">
              <h2 className="text-lg font-medium truncate mr-5">
                Weekly Best Sellers
              </h2>
            </div>
            <div className="mt-5">
              <div className="intro-y">
                <div className="box px-4 py-4 mb-3 flex items-center zoom-in">
                  <div className="w-10 h-10 flex-none image-fit rounded-md overflow-hidden">
                    <img alt="Midone Tailwind HTML Admin Template" src={process.env.PUBLIC_URL+"/Assets1/dist/images/profile-15.jpg"} />
                  </div>
                  <div className="ml-4 mr-auto">
                    <div className="font-medium">Brad Pitt</div>
                    <div className="text-gray-600 text-xs">23 March 2021</div>
                  </div>
                  <div className="py-1 px-2 rounded-full text-xs bg-theme-9 text-white cursor-pointer font-medium">137 Sales</div>
                </div>
              </div>
              <div className="intro-y">
                <div className="box px-4 py-4 mb-3 flex items-center zoom-in">
                  <div className="w-10 h-10 flex-none image-fit rounded-md overflow-hidden">
                    <img alt="Midone Tailwind HTML Admin Template" src={process.env.PUBLIC_URL+"/Assets1/daist/images/profile-10.jpg"} />
                  </div>
                  <div className="ml-4 mr-auto">
                    <div className="font-medium">Brad Pitt</div>
                    <div className="text-gray-600 text-xs">20 June 2020</div>
                  </div>
                  <div className="py-1 px-2 rounded-full text-xs bg-theme-9 text-white cursor-pointer font-medium">137 Sales</div>
                </div>
              </div>
              <div className="intro-y">
                <div className="box px-4 py-4 mb-3 flex items-center zoom-in">
                  <div className="w-10 h-10 flex-none image-fit rounded-md overflow-hidden">
                    <img alt="Midone Tailwind HTML Admin Template" src="dist/images/profile-13.jpg" />
                  </div>
                  <div className="ml-4 mr-auto">
                    <div className="font-medium">Angelina Jolie</div>
                    <div className="text-gray-600 text-xs">27 June 2021</div>
                  </div>
                  <div className="py-1 px-2 rounded-full text-xs bg-theme-9 text-white cursor-pointer font-medium">137 Sales</div>
                </div>
              </div>
              <div className="intro-y">
                <div className="box px-4 py-4 mb-3 flex items-center zoom-in">
                  <div className="w-10 h-10 flex-none image-fit rounded-md overflow-hidden">
                    <img alt="Midone Tailwind HTML Admin Template" src="dist/images/profile-11.jpg" />
                  </div>
                  <div className="ml-4 mr-auto">
                    <div className="font-medium">Kate Winslet</div>
                    <div className="text-gray-600 text-xs">20 April 2021</div>
                  </div>
                  <div className="py-1 px-2 rounded-full text-xs bg-theme-9 text-white cursor-pointer font-medium">137 Sales</div>
                </div>
              </div>
              <a href className="intro-y w-full block text-center rounded-md py-4 border border-dotted border-theme-15 dark:border-dark-5 text-theme-16 dark:text-gray-600">View More</a> 
            </div>
          </div>
          {/* END: Weekly Best Sellers */}
          {/* BEGIN: General Report */}
          <div className="col-span-12 grid grid-cols-12 gap-6 mt-8">
            <div className="col-span-12 sm:col-span-6 xxl:col-span-3 intro-y">
              <div className="mini-report-chart box p-5 zoom-in">
                <div className="flex items-center">
                  <div className="w-2/4 flex-none">
                    <div className="text-lg font-medium truncate">Target Sales</div>
                    <div className="text-gray-600 mt-1">300 Sales</div>
                  </div>
                  <div className="flex-none ml-auto relative">
                    <canvas id="report-donut-chart-1" width={90} height={90} />
                    <div className="font-medium absolute w-full h-full flex items-center justify-center top-0 left-0">20%</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6 xxl:col-span-3 intro-y">
              <div className="mini-report-chart box p-5 zoom-in">
                <div className="flex">
                  <div className="text-lg font-medium truncate mr-3">Social Media</div>
                  <div className="py-1 px-2 rounded-full text-xs bg-gray-200 dark:bg-dark-5 text-gray-600 dark:text-gray-300 cursor-pointer ml-auto truncate">320 Followers</div>
                </div>
                <div className="mt-4">
                  <canvas className="simple-line-chart-1 -ml-1" height={60} />
                </div>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6 xxl:col-span-3 intro-y">
              <div className="mini-report-chart box p-5 zoom-in">
                <div className="flex items-center">
                  <div className="w-2/4 flex-none">
                    <div className="text-lg font-medium truncate">New Products</div>
                    <div className="text-gray-600 mt-1">1450 Products</div>
                  </div>
                  <div className="flex-none ml-auto relative">
                    <canvas id="report-donut-chart-2" width={90} height={90} />
                    <div className="font-medium absolute w-full h-full flex items-center justify-center top-0 left-0">45%</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6 xxl:col-span-3 intro-y">
              <div className="mini-report-chart box p-5 zoom-in">
                <div className="flex">
                  <div className="text-lg font-medium truncate mr-3">Posted Ads</div>
                  <div className="py-1 px-2 rounded-full text-xs bg-gray-200 dark:bg-dark-5 text-gray-600 dark:text-gray-300 cursor-pointer ml-auto truncate">180 Campaign</div>
                </div>
                <div className="mt-4">
                  <canvas className="simple-line-chart-1 -ml-1" height={60} />
                </div>
              </div>
            </div>
          </div>
          {/* END: General Report */}
          {/* BEGIN: Weekly Top Products */}
          <div className="col-span-12 mt-6">
            <div className="intro-y block sm:flex items-center h-10">
              <h2 className="text-lg font-medium truncate mr-5">
                Weekly Top Products
              </h2>
              <div className="flex items-center sm:ml-auto mt-3 sm:mt-0">
                <button className="button box flex items-center text-gray-700 dark:text-gray-300"> <i data-feather="file-text" className="hidden sm:block w-4 h-4 mr-2" /> Export to Excel </button>
                <button className="ml-3 button box flex items-center text-gray-700 dark:text-gray-300"> <i data-feather="file-text" className="hidden sm:block w-4 h-4 mr-2" /> Export to PDF </button>
              </div>
            </div>
            <div className="intro-y overflow-auto lg:overflow-visible mt-8 sm:mt-0">
              <table className="table table-report sm:mt-2">
                <thead>
                  <tr>
                    <th className="whitespace-no-wrap">IMAGES</th>
                    <th className="whitespace-no-wrap">PRODUCT NAME</th>
                    <th className="text-center whitespace-no-wrap">STOCK</th>
                    <th className="text-center whitespace-no-wrap">STATUS</th>
                    <th className="text-center whitespace-no-wrap">ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="intro-x">
                    <td className="w-40">
                      <div className="flex">
                        <div className="w-10 h-10 image-fit zoom-in">
                          <img alt="Midone Tailwind HTML Admin Template" className="tooltip rounded-full" src="dist/images/preview-2.jpg" title="Uploaded at 23 March 2021" />
                        </div>
                        <div className="w-10 h-10 image-fit zoom-in -ml-5">
                          <img alt="Midone Tailwind HTML Admin Template" className="tooltip rounded-full" src="dist/images/preview-14.jpg" title="Uploaded at 14 September 2020" />
                        </div>
                        <div className="w-10 h-10 image-fit zoom-in -ml-5">
                          <img alt="Midone Tailwind HTML Admin Template" className="tooltip rounded-full" src="dist/images/preview-14.jpg" title="Uploaded at 7 May 2022" />
                        </div>
                      </div>
                    </td>
                    <td>
                      <a href className="font-medium whitespace-no-wrap">Dell XPS 13</a> 
                      <div className="text-gray-600 text-xs whitespace-no-wrap">PC &amp; Laptop</div>
                    </td>
                    <td className="text-center">88</td>
                    <td className="w-40">
                      <div className="flex items-center justify-center text-theme-9"> <i data-feather="check-square" className="w-4 h-4 mr-2" /> Active </div>
                    </td>
                    <td className="table-report__action w-56">
                      <div className="flex justify-center items-center">
                        <a className="flex items-center mr-3" href> <i data-feather="check-square" className="w-4 h-4 mr-1" /> Edit </a>
                        <a className="flex items-center text-theme-6" href> <i data-feather="trash-2" className="w-4 h-4 mr-1" /> Delete </a>
                      </div>
                    </td>
                  </tr>
                  <tr className="intro-x">
                    <td className="w-40">
                      <div className="flex">
                        <div className="w-10 h-10 image-fit zoom-in">
                          <img alt="Midone Tailwind HTML Admin Template" className="tooltip rounded-full" src="dist/images/preview-5.jpg" title="Uploaded at 20 June 2020" />
                        </div>
                        <div className="w-10 h-10 image-fit zoom-in -ml-5">
                          <img alt="Midone Tailwind HTML Admin Template" className="tooltip rounded-full" src="dist/images/preview-9.jpg" title="Uploaded at 1 August 2020" />
                        </div>
                        <div className="w-10 h-10 image-fit zoom-in -ml-5">
                          <img alt="Midone Tailwind HTML Admin Template" className="tooltip rounded-full" src="dist/images/preview-10.jpg" title="Uploaded at 5 January 2022" />
                        </div>
                      </div>
                    </td>
                    <td>
                      <a href className="font-medium whitespace-no-wrap">Sony A7 III</a> 
                      <div className="text-gray-600 text-xs whitespace-no-wrap">Photography</div>
                    </td>
                    <td className="text-center">50</td>
                    <td className="w-40">
                      <div className="flex items-center justify-center text-theme-9"> <i data-feather="check-square" className="w-4 h-4 mr-2" /> Active </div>
                    </td>
                    <td className="table-report__action w-56">
                      <div className="flex justify-center items-center">
                        <a className="flex items-center mr-3" href> <i data-feather="check-square" className="w-4 h-4 mr-1" /> Edit </a>
                        <a className="flex items-center text-theme-6" href> <i data-feather="trash-2" className="w-4 h-4 mr-1" /> Delete </a>
                      </div>
                    </td>
                  </tr>
                  <tr className="intro-x">
                    <td className="w-40">
                      <div className="flex">
                        <div className="w-10 h-10 image-fit zoom-in">
                          <img alt="Midone Tailwind HTML Admin Template" className="tooltip rounded-full" src="dist/images/preview-12.jpg" title="Uploaded at 27 June 2021" />
                        </div>
                        <div className="w-10 h-10 image-fit zoom-in -ml-5">
                          <img alt="Midone Tailwind HTML Admin Template" className="tooltip rounded-full" src="dist/images/preview-10.jpg" title="Uploaded at 15 August 2021" />
                        </div>
                        <div className="w-10 h-10 image-fit zoom-in -ml-5">
                          <img alt="Midone Tailwind HTML Admin Template" className="tooltip rounded-full" src="dist/images/preview-10.jpg" title="Uploaded at 13 May 2022" />
                        </div>
                      </div>
                    </td>
                    <td>
                      <a href className="font-medium whitespace-no-wrap">Nikon Z6</a> 
                      <div className="text-gray-600 text-xs whitespace-no-wrap">Photography</div>
                    </td>
                    <td className="text-center">72</td>
                    <td className="w-40">
                      <div className="flex items-center justify-center text-theme-6"> <i data-feather="check-square" className="w-4 h-4 mr-2" /> Inactive </div>
                    </td>
                    <td className="table-report__action w-56">
                      <div className="flex justify-center items-center">
                        <a className="flex items-center mr-3" href> <i data-feather="check-square" className="w-4 h-4 mr-1" /> Edit </a>
                        <a className="flex items-center text-theme-6" href> <i data-feather="trash-2" className="w-4 h-4 mr-1" /> Delete </a>
                      </div>
                    </td>
                  </tr>
                  <tr className="intro-x">
                    <td className="w-40">
                      <div className="flex">
                        <div className="w-10 h-10 image-fit zoom-in">
                          <img alt="Midone Tailwind HTML Admin Template" className="tooltip rounded-full" src="dist/images/preview-5.jpg" title="Uploaded at 20 April 2021" />
                        </div>
                        <div className="w-10 h-10 image-fit zoom-in -ml-5">
                          <img alt="Midone Tailwind HTML Admin Template" className="tooltip rounded-full" src="dist/images/preview-8.jpg" title="Uploaded at 26 May 2020" />
                        </div>
                        <div className="w-10 h-10 image-fit zoom-in -ml-5">
                          <img alt="Midone Tailwind HTML Admin Template" className="tooltip rounded-full" src="dist/images/preview-10.jpg" title="Uploaded at 9 September 2022" />
                        </div>
                      </div>
                    </td>
                    <td>
                      <a href className="font-medium whitespace-no-wrap">Nike Tanjun</a> 
                      <div className="text-gray-600 text-xs whitespace-no-wrap">Sport &amp; Outdoor</div>
                    </td>
                    <td className="text-center">50</td>
                    <td className="w-40">
                      <div className="flex items-center justify-center text-theme-6"> <i data-feather="check-square" className="w-4 h-4 mr-2" /> Inactive </div>
                    </td>
                    <td className="table-report__action w-56">
                      <div className="flex justify-center items-center">
                        <a className="flex items-center mr-3" href> <i data-feather="check-square" className="w-4 h-4 mr-1" /> Edit </a>
                        <a className="flex items-center text-theme-6" href> <i data-feather="trash-2" className="w-4 h-4 mr-1" /> Delete </a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="intro-y flex flex-wrap sm:flex-row sm:flex-no-wrap items-center mt-3">
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
          </div>
          {/* END: Weekly Top Products */}
        </div>
        <div className="col-span-12 xxl:col-span-3 xxl:border-l border-theme-5 -mb-10 pb-10">
          <div className="xxl:pl-6 grid grid-cols-12 gap-6">
            {/* BEGIN: Transactions */}
            <div className="col-span-12 md:col-span-6 xl:col-span-4 xxl:col-span-12 mt-3 xxl:mt-8">
              <div className="intro-x flex items-center h-10">
                <h2 className="text-lg font-medium truncate mr-5">
                  Transactions
                </h2>
              </div>
              <div className="mt-5">
                <div className="intro-x">
                  <div className="box px-5 py-3 mb-3 flex items-center zoom-in">
                    <div className="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                      <img alt="Midone Tailwind HTML Admin Template" src="dist/images/profile-15.jpg" />
                    </div>
                    <div className="ml-4 mr-auto">
                      <div className="font-medium">Brad Pitt</div>
                      <div className="text-gray-600 text-xs">23 March 2021</div>
                    </div>
                    <div className="text-theme-9">+$48</div>
                  </div>
                </div>
                <div className="intro-x">
                  <div className="box px-5 py-3 mb-3 flex items-center zoom-in">
                    <div className="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                      <img alt="Midone Tailwind HTML Admin Template" src="dist/images/profile-10.jpg" />
                    </div>
                    <div className="ml-4 mr-auto">
                      <div className="font-medium">Brad Pitt</div>
                      <div className="text-gray-600 text-xs">20 June 2020</div>
                    </div>
                    <div className="text-theme-9">+$190</div>
                  </div>
                </div>
                <div className="intro-x">
                  <div className="box px-5 py-3 mb-3 flex items-center zoom-in">
                    <div className="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                      <img alt="Midone Tailwind HTML Admin Template" src="dist/images/profile-13.jpg" />
                    </div>
                    <div className="ml-4 mr-auto">
                      <div className="font-medium">Angelina Jolie</div>
                      <div className="text-gray-600 text-xs">27 June 2021</div>
                    </div>
                    <div className="text-theme-6">-$120</div>
                  </div>
                </div>
                <div className="intro-x">
                  <div className="box px-5 py-3 mb-3 flex items-center zoom-in">
                    <div className="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                      <img alt="Midone Tailwind HTML Admin Template" src="dist/images/profile-11.jpg" />
                    </div>
                    <div className="ml-4 mr-auto">
                      <div className="font-medium">Kate Winslet</div>
                      <div className="text-gray-600 text-xs">20 April 2021</div>
                    </div>
                    <div className="text-theme-6">-$144</div>
                  </div>
                </div>
                <div className="intro-x">
                  <div className="box px-5 py-3 mb-3 flex items-center zoom-in">
                    <div className="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                      <img alt="Midone Tailwind HTML Admin Template" src="dist/images/profile-7.jpg" />
                    </div>
                    <div className="ml-4 mr-auto">
                      <div className="font-medium">Russell Crowe</div>
                      <div className="text-gray-600 text-xs">13 November 2020</div>
                    </div>
                    <div className="text-theme-9">+$218</div>
                  </div>
                </div>
                <a href className="intro-x w-full block text-center rounded-md py-3 border border-dotted border-theme-15 dark:border-dark-5 text-theme-16 dark:text-gray-600">View More</a> 
              </div>
            </div>
            {/* END: Transactions */}
            {/* BEGIN: Recent Activities */}
            <div className="col-span-12 md:col-span-6 xl:col-span-4 xxl:col-span-12 mt-3">
              <div className="intro-x flex items-center h-10">
                <h2 className="text-lg font-medium truncate mr-5">
                  Recent Activities
                </h2>
                <a href className="ml-auto text-theme-1 dark:text-theme-10 truncate">See all</a> 
              </div>
              <div className="report-timeline mt-5 relative">
                <div className="intro-x relative flex items-center mb-3">
                  <div className="report-timeline__image">
                    <div className="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                      <img alt="Midone Tailwind HTML Admin Template" src="dist/images/profile-3.jpg" />
                    </div>
                  </div>
                  <div className="box px-5 py-3 ml-4 flex-1 zoom-in">
                    <div className="flex items-center">
                      <div className="font-medium">Hugh Jackman</div>
                      <div className="text-xs text-gray-500 ml-auto">07:00 PM</div>
                    </div>
                    <div className="text-gray-600 mt-1">Has joined the team</div>
                  </div>
                </div>
                <div className="intro-x relative flex items-center mb-3">
                  <div className="report-timeline__image">
                    <div className="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                      <img alt="Midone Tailwind HTML Admin Template" src="dist/images/profile-3.jpg" />
                    </div>
                  </div>
                  <div className="box px-5 py-3 ml-4 flex-1 zoom-in">
                    <div className="flex items-center">
                      <div className="font-medium">Angelina Jolie</div>
                      <div className="text-xs text-gray-500 ml-auto">07:00 PM</div>
                    </div>
                    <div className="text-gray-600">
                      <div className="mt-1">Added 3 new photos</div>
                      <div className="flex mt-2">
                        <div className="tooltip w-8 h-8 image-fit mr-1 zoom-in" title="Dell XPS 13">
                          <img alt="Midone Tailwind HTML Admin Template" className="rounded-md border border-white" src="dist/images/preview-10.jpg" />
                        </div>
                        <div className="tooltip w-8 h-8 image-fit mr-1 zoom-in" title="Sony A7 III">
                          <img alt="Midone Tailwind HTML Admin Template" className="rounded-md border border-white" src="dist/images/preview-10.jpg" />
                        </div>
                        <div className="tooltip w-8 h-8 image-fit mr-1 zoom-in" title="Nikon Z6">
                          <img alt="Midone Tailwind HTML Admin Template" className="rounded-md border border-white" src="dist/images/preview-3.jpg" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="intro-x text-gray-500 text-xs text-center my-4">12 November</div>
                <div className="intro-x relative flex items-center mb-3">
                  <div className="report-timeline__image">
                    <div className="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                      <img alt="Midone Tailwind HTML Admin Template" src="dist/images/profile-15.jpg" />
                    </div>
                  </div>
                  <div className="box px-5 py-3 ml-4 flex-1 zoom-in">
                    <div className="flex items-center">
                      <div className="font-medium">Al Pacino</div>
                      <div className="text-xs text-gray-500 ml-auto">07:00 PM</div>
                    </div>
                    <div className="text-gray-600 mt-1">Has changed <a className="text-theme-1 dark:text-theme-10" href>Dell XPS 13</a> price and description</div>
                  </div>
                </div>
                <div className="intro-x relative flex items-center mb-3">
                  <div className="report-timeline__image">
                    <div className="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                      <img alt="Midone Tailwind HTML Admin Template" src="dist/images/profile-7.jpg" />
                    </div>
                  </div>
                  <div className="box px-5 py-3 ml-4 flex-1 zoom-in">
                    <div className="flex items-center">
                      <div className="font-medium">Johnny Depp</div>
                      <div className="text-xs text-gray-500 ml-auto">07:00 PM</div>
                    </div>
                    <div className="text-gray-600 mt-1">Has changed <a className="text-theme-1 dark:text-theme-10" href>Oppo Find X2 Pro</a> description</div>
                  </div>
                </div>
              </div>
            </div>
            {/* END: Recent Activities */}
            {/* BEGIN: Important Notes */}
            <div className="col-span-12 md:col-span-6 xl:col-span-12 xxl:col-span-12 xl:col-start-1 xl:row-start-1 xxl:col-start-auto xxl:row-start-auto mt-3">
              <div className="intro-x flex items-center h-10">
                <h2 className="text-lg font-medium truncate mr-auto">
                  Important Notes
                </h2>
                <button data-carousel="important-notes" data-target="prev" className="tiny-slider-navigator button px-2 border border-gray-400 dark:border-dark-5 flex items-center text-gray-700 dark:text-gray-600 mr-2"> <i data-feather="chevron-left" className="w-4 h-4" /> </button>
                <button data-carousel="important-notes" data-target="next" className="tiny-slider-navigator button px-2 border border-gray-400 dark:border-dark-5 flex items-center text-gray-700 dark:text-gray-600"> <i data-feather="chevron-right" className="w-4 h-4" /> </button>
              </div>
              <div className="mt-5 intro-x">
                <div className="box zoom-in">
                  <div className="tiny-slider" id="important-notes">
                    <div className="p-5">
                      <div className="text-base font-medium truncate">Lorem Ipsum is simply dummy text</div>
                      <div className="text-gray-500 mt-1">20 Hours ago</div>
                      <div className="text-gray-600 text-justify mt-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</div>
                      <div className="font-medium flex mt-5">
                        <button type="button" className="button button--sm bg-gray-200 dark:bg-dark-5 text-gray-600 dark:text-gray-300">View Notes</button>
                        <button type="button" className="button button--sm border border-gray-300 dark:border-dark-5 text-gray-600 ml-auto">Dismiss</button>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="font-medium truncate">Lorem Ipsum is simply dummy text</div>
                      <div className="text-gray-500 mt-1">20 Hours ago</div>
                      <div className="text-gray-600 text-justify mt-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</div>
                      <div className="font-medium flex mt-5">
                        <button type="button" className="button button--sm bg-gray-200 dark:bg-dark-5 text-gray-600 dark:text-gray-300">View Notes</button>
                        <button type="button" className="button button--sm border border-gray-300 dark:border-dark-5 text-gray-600 ml-auto">Dismiss</button>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="font-medium truncate">Lorem Ipsum is simply dummy text</div>
                      <div className="text-gray-500 mt-1">20 Hours ago</div>
                      <div className="text-gray-600 text-justify mt-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</div>
                      <div className="font-medium flex mt-5">
                        <button type="button" className="button button--sm bg-gray-200 dark:bg-dark-5 text-gray-600 dark:text-gray-300">View Notes</button>
                        <button type="button" className="button button--sm border border-gray-300 dark:border-dark-5 text-gray-600 ml-auto">Dismiss</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* END: Important Notes */}
            {/* BEGIN: Schedules */}
            <div className="col-span-12 md:col-span-6 xl:col-span-4 xxl:col-span-12 xl:col-start-1 xl:row-start-2 xxl:col-start-auto xxl:row-start-auto mt-3">
              <div className="intro-x flex items-center h-10">
                <h2 className="text-lg font-medium truncate mr-5">
                  Schedules
                </h2>
                <a href className="ml-auto text-theme-1 dark:text-theme-10 truncate flex items-center"> <i data-feather="plus" className="w-4 h-4 mr-1" /> Add New Schedules </a>
              </div>
              <div className="mt-5">
                <div className="intro-x box">
                  <div className="p-5">
                    <div className="flex">
                      <i data-feather="chevron-left" className="w-5 h-5 text-gray-600" /> 
                      <div className="font-medium mx-auto">April</div>
                      <i data-feather="chevron-right" className="w-5 h-5 text-gray-600" /> 
                    </div>
                    <div className="grid grid-cols-7 gap-4 mt-5 text-center">
                      <div className="font-medium">Su</div>
                      <div className="font-medium">Mo</div>
                      <div className="font-medium">Tu</div>
                      <div className="font-medium">We</div>
                      <div className="font-medium">Th</div>
                      <div className="font-medium">Fr</div>
                      <div className="font-medium">Sa</div>
                      <div className="py-1 rounded relative text-gray-600">29</div>
                      <div className="py-1 rounded relative text-gray-600">30</div>
                      <div className="py-1 rounded relative text-gray-600">31</div>
                      <div className="py-1 rounded relative">1</div>
                      <div className="py-1 rounded relative">2</div>
                      <div className="py-1 rounded relative">3</div>
                      <div className="py-1 rounded relative">4</div>
                      <div className="py-1 rounded relative">5</div>
                      <div className="py-1 bg-theme-18 dark:bg-theme-9 rounded relative">6</div>
                      <div className="py-1 rounded relative">7</div>
                      <div className="py-1 bg-theme-1 dark:bg-theme-1 text-white rounded relative">8</div>
                      <div className="py-1 rounded relative">9</div>
                      <div className="py-1 rounded relative">10</div>
                      <div className="py-1 rounded relative">11</div>
                      <div className="py-1 rounded relative">12</div>
                      <div className="py-1 rounded relative">13</div>
                      <div className="py-1 rounded relative">14</div>
                      <div className="py-1 rounded relative">15</div>
                      <div className="py-1 rounded relative">16</div>
                      <div className="py-1 rounded relative">17</div>
                      <div className="py-1 rounded relative">18</div>
                      <div className="py-1 rounded relative">19</div>
                      <div className="py-1 rounded relative">20</div>
                      <div className="py-1 rounded relative">21</div>
                      <div className="py-1 rounded relative">22</div>
                      <div className="py-1 bg-theme-17 dark:bg-theme-11 rounded relative">23</div>
                      <div className="py-1 rounded relative">24</div>
                      <div className="py-1 rounded relative">25</div>
                      <div className="py-1 rounded relative">26</div>
                      <div className="py-1 bg-theme-14 dark:bg-theme-12 rounded relative">27</div>
                      <div className="py-1 rounded relative">28</div>
                      <div className="py-1 rounded relative">29</div>
                      <div className="py-1 rounded relative">30</div>
                      <div className="py-1 rounded relative text-gray-600">1</div>
                      <div className="py-1 rounded relative text-gray-600">2</div>
                      <div className="py-1 rounded relative text-gray-600">3</div>
                      <div className="py-1 rounded relative text-gray-600">4</div>
                      <div className="py-1 rounded relative text-gray-600">5</div>
                      <div className="py-1 rounded relative text-gray-600">6</div>
                      <div className="py-1 rounded relative text-gray-600">7</div>
                      <div className="py-1 rounded relative text-gray-600">8</div>
                      <div className="py-1 rounded relative text-gray-600">9</div>
                    </div>
                  </div>
                  <div className="border-t border-gray-200 p-5">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-theme-11 rounded-full mr-3" />
                      <span className="truncate">UI/UX Workshop</span> 
                      <div className="h-px flex-1 border border-r border-dashed border-gray-300 mx-3 xl:hidden" />
                      <span className="font-medium xl:ml-auto">23th</span> 
                    </div>
                    <div className="flex items-center mt-4">
                      <div className="w-2 h-2 bg-theme-1 dark:bg-theme-10 rounded-full mr-3" />
                      <span className="truncate">VueJs Frontend Development</span> 
                      <div className="h-px flex-1 border border-r border-dashed border-gray-300 mx-3 xl:hidden" />
                      <span className="font-medium xl:ml-auto">10th</span> 
                    </div>
                    <div className="flex items-center mt-4">
                      <div className="w-2 h-2 bg-theme-12 rounded-full mr-3" />
                      <span className="truncate">Laravel Rest API</span> 
                      <div className="h-px flex-1 border border-r border-dashed border-gray-300 mx-3 xl:hidden" />
                      <span className="font-medium xl:ml-auto">31th</span> 
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* END: Schedules */}
          </div>
        </div>
      </div>
    
      
    )


        

}

Dashboard.propTypes = {
   
}

const mapStateToProps =(state)=>({
    
    auth : state.auth,
   
})

export default connect(mapStateToProps,{})(withRouter(Dashboard))
