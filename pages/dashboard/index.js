import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'


const Dashboard = () => {
  return (
      <>
          <div className="flex flex-wrap">
            <Sidebar />
            <div className="flex-1 flex flex-col w-full md:ml-64">
                <Navbar />
                <div className="px-10 my-10">Dashbaord</div>
            </div>
        </div>
      </>
  )
}

export default Dashboard