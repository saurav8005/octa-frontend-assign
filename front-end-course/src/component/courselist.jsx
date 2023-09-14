import React from 'react'
import { Fragment } from 'react'
import '../App.css'
import logo from '../image/Logo.png'
import home from '../image/mdi_view-dashboard-outline.png'
import courses from '../image/ic_outline-queue-music.png'
import search from '../image/mdi_magnify.png'
import data from '../data.json'

function DisplayList() {


  return (
    <>
      <div className='container'>
        <div className='left-sidebar'>
          <div className='logo'>
            <img src={logo} alt="logo" />
          </div>
          <div className='home'>
            <img src={home} alt='home' />
          </div>
          <div className='course'>
            <img src={courses} alt="courses" />
          </div>
        </div>

        <div className='right-sidebar'>
          <h1 className='heading'>Courses</h1>
          <div className='heading2'>
            <p className='p1'>COURSELIST</p>
            <input className="search" type="text" placeholder="Search.." name="search" />
            <img className="searchicon" src={search} alt='search' />
          </div>

          <div>
           
              <div className="flex flex-col ">


                <div className="overflow-hidden">
                  <table className="text-left text-sm font-light table">
                    <thead className="border-b font-medium dark:border-neutral-500">
                      <tr>
                        <th scope="col" className="px-6 py-4">Name</th>
                        <th scope="col" className="px-6 py-4">Description</th>
                        <th scope="col" className="px-6 py-4">Instructor</th>
                        <th scope="col" className="px-6 py-4">Instrument</th>
                        <th scope="col" className="px-6 py-4">Day of Week</th>
                        <th scope="col" className="px-6 py-4">No. of Student</th>
                        <th scope="col" className="px-6 py-4">Price</th>
                        <th scope="col" className="px-6 py-4">Status</th>
                        <th scope="col" className="px-6 py-4">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">saurav</td>
                        <td className="whitespace-nowrap px-6 py-4">col</td>
                        <td className="whitespace-nowrap px-6 py-4">col</td>
                        <td className="whitespace-nowrap px-6 py-4">col</td>
                        <td className="whitespace-nowrap px-6 py-4">col</td>
                        <td className="whitespace-nowrap px-6 py-4">col</td>
                        <td className="whitespace-nowrap px-6 py-4">col</td>
                        <td className="whitespace-nowrap px-6 py-4">col</td>
                        <td className="whitespace-nowrap px-6 py-4">col</td>
                      </tr>
                      <tr className="border-b dark:border-neutral-500">
                      <td className="whitespace-nowrap px-6 py-4 font-medium">saurav</td>
                        <td className="whitespace-nowrap px-6 py-4">col</td>
                        <td className="whitespace-nowrap px-6 py-4">col</td>
                        <td className="whitespace-nowrap px-6 py-4">col</td>
                        <td className="whitespace-nowrap px-6 py-4">col</td>
                        <td className="whitespace-nowrap px-6 py-4">col</td>
                        <td className="whitespace-nowrap px-6 py-4">col</td>
                        <td className="whitespace-nowrap px-6 py-4">col</td>
                        <td className="whitespace-nowrap px-6 py-4">col</td>
                      </tr>
                      <tr className="border-b dark:border-neutral-500">
                      <td className="whitespace-nowrap px-6 py-4 font-medium">saurav</td>
                        <td className="whitespace-nowrap px-6 py-4">col</td>
                        <td className="whitespace-nowrap px-6 py-4">col</td>
                        <td className="whitespace-nowrap px-6 py-4">col</td>
                        <td className="whitespace-nowrap px-6 py-4">col</td>
                        <td className="whitespace-nowrap px-6 py-4">col</td>
                        <td className="whitespace-nowrap px-6 py-4">col</td>
                        <td className="whitespace-nowrap px-6 py-4">col</td>
                        <td className="whitespace-nowrap px-6 py-4">col</td>
                      </tr>
                      <tr className="border-b dark:border-neutral-500">
                      <td className="whitespace-nowrap px-6 py-4 font-medium">saurav</td>
                        <td className="whitespace-nowrap px-6 py-4">col</td>
                        <td className="whitespace-nowrap px-6 py-4">col</td>
                        <td className="whitespace-nowrap px-6 py-4">col</td>
                        <td className="whitespace-nowrap px-6 py-4">col</td>
                        <td className="whitespace-nowrap px-6 py-4">col</td>
                        <td className="whitespace-nowrap px-6 py-4">col</td>
                        <td className="whitespace-nowrap px-6 py-4">col</td>
                        <td className="whitespace-nowrap px-6 py-4">col</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              
           
          </div>
              <button
                type="button"
                className="addcourse">
                 + Add course
              </button>
        </div>
              
      </div>


    </>
  )
}

export default DisplayList