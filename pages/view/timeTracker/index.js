import React, { useState } from 'react';
import Sidebar from '../../../components/Sidebar/Sidebar';
import Navbar from '../../../components/Navbar/Navbar';
import BackTop from '../../../components/BackToTop/BackToTop';
import DataTable from '../../../components/DataTable';


const TimeTracker = () => {
    return (
        <>
            <div className="flex">
                <Sidebar />
                <div className="flex flex-col w-full">
                    <Navbar />
                    <BackTop />
                    <DataTable />
                </div>
            </div>
        </>
    );
};

export default TimeTracker;
