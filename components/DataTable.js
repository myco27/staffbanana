import React, { useState, useEffect, useRef } from 'react';

import DatePicker from 'react-datepicker'; 
import 'react-datepicker/dist/react-datepicker.css';

// import react-icons
import { HiUser, HiOutlineLogout, HiDotsHorizontal } from "react-icons/hi";
import { FaCalendarAlt, FaRegCheckCircle } from "react-icons/fa";
import { GrView } from "react-icons/gr";
import AttendanceLog from './Modal/AttendanceLog';

const DataTable = () => {
    const [activeItemId, setActiveItemId] = useState(null);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const menuRef = useRef(null);



  const handleOpenModal = (item) => {
    setShowModal(true);
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedItem(null);
  };

    // Function to toggle the action menu for a specific record id
    const toggleActionMenu = (id) => {
        setActiveItemId(prevId => (prevId === id ? null : id));
    };

    // Sample time tracker data
    const timeTrackerData = [
    {
        id: 1,
        date: '2024-07-10',
        timeIn: '09:00 AM',
        breakIn: '11:00 AM',
        breakOut: '11:30 AM',
        timeOut: '05:00 PM',
        status: 'active',
        action: {
        editUrl: '#',
        deleteUrl: '#',
        },
        image: '/image/profile/luffy.png',
    },
    {
        id: 2,
        date: '2024-07-11',
        timeIn: '08:30 AM',
        breakIn: '10:45 AM',
        breakOut: '11:15 AM',
        timeOut: '04:45 PM',
        status: 'inactive',
        action: {
        editUrl: '#',
        deleteUrl: '#',
        },
        image: '/image/profile/luffy.png',
    },
    {
        id: 3,
        date: '2024-07-12',
        timeIn: '09:15 AM',
        breakIn: '11:30 AM',
        breakOut: '12:00 PM',
        timeOut: '05:30 PM',
        status: 'active',
        action: {
        editUrl: '#',
        deleteUrl: '#',
        },
        image: '/image/profile/luffy.png',
    },
    {
        id: 4,
        date: '2024-07-13',
        timeIn: '08:45 AM',
        breakIn: '10:45 AM',
        breakOut: '11:15 AM',
        timeOut: '05:15 PM',
        status: 'inactive',
        action: {
        editUrl: '#',
        deleteUrl: '#',
        },
        image: '/image/profile/luffy.png',
    },
    {
        id: 5,
        date: '2024-07-14',
        timeIn: '09:30 AM',
        breakIn: '12:00 PM',
        breakOut: '12:30 PM',
        timeOut: '06:00 PM',
        status: 'active',
        action: {
        editUrl: '#',
        deleteUrl: '#',
        },
        image: '/image/profile/luffy.png',
    },
    {
        id: 6,
        date: '2024-07-15',
        timeIn: '08:00 AM',
        breakIn: '11:00 AM',
        breakOut: '11:30 AM',
        timeOut: '04:30 PM',
        status: 'inactive',
        action: {
        editUrl: '#',
        deleteUrl: '#',
        },
        image: '/image/profile/luffy.png',
    },
    {
        id: 7,
        date: '2024-07-16',
        timeIn: '09:00 AM',
        breakIn: '12:00 PM',
        breakOut: '12:30 PM',
        timeOut: '05:30 PM',
        status: 'active',
        action: {
        editUrl: '#',
        deleteUrl: '#',
        },
        image: '/image/profile/luffy.png',
    },
    {
        id: 8,
        date: '2024-07-17',
        timeIn: '08:30 AM',
        breakIn: '10:45 AM',
        breakOut: '11:15 AM',
        timeOut: '04:45 PM',
        status: 'inactive',
        action: {
        editUrl: '#',
        deleteUrl: '#',
        },
        image: '/image/profile/luffy.png',
    },
    {
        id: 9,
        date: '2024-07-18',
        timeIn: '09:15 AM',
        breakIn: '11:30 AM',
        breakOut: '12:00 PM',
        timeOut: '05:30 PM',
        status: 'active',
        action: {
        editUrl: '#',
        deleteUrl: '#',
        },
        image: '/image/profile/jimbea.png',
    },
    {
        id: 10,
        date: '2024-07-19',
        timeIn: '08:45 AM',
        breakIn: '10:45 AM',
        breakOut: '11:15 AM',
        timeOut: '05:15 PM',
        status: 'inactive',
        action: {
        editUrl: '#',
        deleteUrl: '#',
        },
        image: '/image/profile/luffy.png',
    },
  ];
  
  useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setActiveItemId(null); // Close the menu if clicked outside
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Function to determine status color based on 'status' property
    const getStatusColor = (status) => {
    switch (status) {
        case 'online':
            return 'bg-green-500'; // Green for 'online'
        case 'offline':
            return 'bg-red-500'; // Red for 'offline'
        case 'manual':
            return 'bg-yellow-500'; // Yellow for 'manual'
        default:
            return 'bg-gray-500'; // Gray as a fallback color for unknown statuses
    }
};


    // Function to format date into "Month Day, Year" format
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };

    // Function to filter records based on start and end date
    const filterByDate = () => {
        return timeTrackerData.filter(record => {
            const recordDate = new Date(record.date);
            const start = startDate ? new Date(startDate) : null;
            const end = endDate ? new Date(endDate) : null;

            if (start && end) {
                return recordDate >= start && recordDate <= end;
            } else if (start) {
                return recordDate >= start;
            } else if (end) {
                return recordDate <= end;
            }
            return true; // If no filters applied, return all records
        });
    };

    // Get the filtered data based on dates
    const filteredData = filterByDate();
  return (
      <>
                     <div className="px-10 my-8 flex space-x-4">
                       <div id="date-range-picker" className="flex items-center space-x-4">
                            {/* Start Date Input */}
                            <div className="relative">
                                <label htmlFor="startDate" className="block text-[11px] font-medium text-gray-700">FROM</label>
                                <div className="mt-1 relative">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <FaCalendarAlt className="text-gray-400" />
                                    </div>
                                    <DatePicker
                                        id="startDate"
                                        selected={startDate}
                                        onChange={(date) => setStartDate(date)}
                                        className="bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 pr-2.5 py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholderText="Select start date"
                                    />
                                </div>
                            </div>

                            {/* End Date Input */}
                            <div className="relative">
                                <label htmlFor="endDate" className="block text-[11px] font-medium text-gray-700">TO</label>
                                <div className="mt-1 relative">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <FaCalendarAlt className="text-gray-400" />
                                    </div>
                                    <DatePicker
                                        id="endDate"
                                        selected={endDate}
                                        onChange={(date) => setEndDate(date)}
                                        className="bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 pr-2.5 py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholderText="Select end date"
                                    />
                                </div>
                            </div>

                            {/* Download Button */}
                            <div className="relative md:mt-5">
                                <button className="border-2 border-blue-400 text-blue-400 font-bold py-2 px-4 rounded inline-flex items-center" onClick={() => handleOpenModal("")}>
                                <GrView className="text-lg mr-2" />
                                    <span>View DTR</span>
                                </button>
                            </div>
                            <div className="relative md:mt-5">
                                <button className="border-2 border-green-500 text-green-500 font-bold py-2 px-4 rounded inline-flex items-center uppercase">
                                    <FaRegCheckCircle className="text-green-500 mr-2 text-lg" />
                                    <span>Certify DTR</span>
                                </button>
                            </div>
                            <div className="relative md:mt-5">
                                <button className="border-2 border-black text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center uppercase">
                                    <GrView className="text-lg mr-2" />
                                    <span>View Profile</span>
                                </button>
                            </div>
                        </div>
                    </div>
        
                    <div className="px-10 my-2">
                        <div className="overflow-x-auto">
                            <table className="w-full divide-y divide-gray-200 shadow overflow-hidden sm:rounded-lg">
                                {/* Table header */}
                                <thead className="bg-gray-700 text-white">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">
                                            #
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">
                                            Date
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">
                                            Time In
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">
                                            Break In
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">
                                            Break Out
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">
                                            Time Out
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">
                                            Action
                                        </th>
                                    </tr>
                                </thead>

                                {/* Table body */}
                                <tbody className="bg-gray-200 divide-y divide-gray-200">
                                    {/* Render each row dynamically */}
                                    {filteredData.map((record) => (
                                        <tr key={record.id}>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {record.id}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                <div className="text-center text-md font-semibold">
                                                    {formatDate(record.date)}
                                                </div>
                                                <div className="flex justify-center items-center mt-2">
                                                    <span
                                                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(
                                                            record.status
                                                        )} text-white`}
                                                    >
                                                        {record.status}
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                <img
                                                    src={record.image}
                                                    alt="User"
                                                    className="h-full w-52 mb-2 mr-2"
                                                />
                                                <div className="text-center text-md font-semibold">
                                                    {record.timeIn}
                                                </div>
                                                <div className="flex justify-center items-center mt-2">
                                                    <span
                                                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(
                                                            record.status
                                                        )} text-white`}
                                                    >
                                                        {record.status}
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                <img
                                                    src={record.image}
                                                    alt="User"
                                                    className="h-full w-52 mb-2 mr-2"
                                                />
                                                <div className="text-center text-md font-semibold">
                                                    {record.breakIn}
                                                </div>
                                                <div className="flex justify-center items-center mt-2">
                                                    <span
                                                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(
                                                            record.status
                                                        )} text-white`}
                                                    >
                                                        {record.status}
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                <img
                                                    src={record.image}
                                                    alt="User"
                                                    className="h-full w-52 mb-2 mr-2"
                                                />
                                                <div className="text-center text-md font-semibold">
                                                    {record.breakOut}
                                                </div>
                                                <div className="flex justify-center items-center mt-2">
                                                    <span
                                                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(
                                                            record.status
                                                        )} text-white`}
                                                    >
                                                        {record.status}
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                <img
                                                    src={record.image}
                                                    alt="User"
                                                    className="h-full w-52 mb-2 mr-2"
                                                />
                                                <div className="text-center text-md font-semibold">
                                                    {record.timeOut}
                                                </div>
                                                <div className="flex justify-center items-center mt-2">
                                                    <span
                                                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(
                                                            record.status
                                                        )} text-white`}
                                                    >
                                                        {record.status}
                                                    </span>
                                                </div>
                                            </td>

                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                <div className="relative">
                                                    <a
                                                        onClick={() => toggleActionMenu(record.id)}
                                                        className="text-base font-semibold px-2 cursor-pointer hover:font-bold text-black flex items-center"
                                                    >
                                                        <HiDotsHorizontal className={`h-5 w-5 transition-transform duration-300 ${activeItemId === record.id ? "rotate-0" : ""}`} />
                                                    </a>
                                                    {activeItemId === record.id && (
                                                        <div ref={menuRef} className="absolute right-0 mt-2 w-32 bg-gray-800 border border-gray-200 rounded-md shadow-lg py-1 z-20">
                                                            <a
                                                                href={record.action.editUrl}
                                                                className="flex px-4 py-2 text-sm text-white font-semibold hover:bg-gray-300 hover:text-black"
                                                            >
                                                                <HiUser className="mr-2" />
                                                                Edit
                                                            </a>
                                                            <a
                                                                href={record.action.deleteUrl}
                                                                className="flex px-4 py-2 text-sm text-white font-semibold hover:bg-gray-300 hover:text-black"
                                                            >
                                                                <HiOutlineLogout className="mr-2" />
                                                                Delete
                                                            </a>
                                                        </div>
                                                    )}
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                              </table>
                            <div className="flex justify-center items-center mx-auto text-white px-4 py-16">
                                {/* Rest of your code */}
                                {showModal && (
                                    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
                                        <AttendanceLog isVisible={showModal} onClose={handleCloseModal} item={selectedItem} />
                                    </div>
                                )}
                          </div>
                    </div>
                </div>
              </>
        )
      }

export default DataTable