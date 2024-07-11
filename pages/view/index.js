import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'
import TimeTracker from './timeTracker'

const View = () => {
  return (
      <>
      <div className="flex">
            <Sidebar />
            <div className="flex flex-col w-full">
                <Navbar />
                  <div className="px-10 my-10">
                      <TimeTracker />
                      
                </div>
            </div>
        </div>
      </>
  )
}

export default View
