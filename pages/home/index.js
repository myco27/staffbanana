import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'


const Home = () => {
  return (
      <>
      <div className="flex">
            <Sidebar />
            <div className="flex flex-col w-full">
                <Navbar />
                <div className="px-10 my-10">Home</div>
            </div>
        </div>
      </>
  )
}

export default Home