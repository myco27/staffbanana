import React, { useEffect, useRef } from "react";
import { IoCloseSharp } from "react-icons/io5";

const AttendanceLog = ({ isVisible, onClose }) => {
  const modalContentRef = useRef(null);

  const handleClose = () => {
    onClose();
  };

  useEffect(() => {
    if (!isVisible) return;

    const handleClickOutside = (event) => {
      if (
        modalContentRef.current &&
        !modalContentRef.current.contains(event.target)
      ) {
        handleClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 text-black flex justify-center items-center ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
      <div
        ref={modalContentRef}
        className={`h-full w-full md:h-3/4 md:w-3/4 bg-white backdrop-blur-sm relative p-4 md:p-0 flex flex-col md:flex-row transition-opacity duration-300 ease-in-out`}
      >
        {/* Your modal content */}
        
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-700 hover:text-gray-900 md:hidden"
          onClick={handleClose}
        >
          <IoCloseSharp className="text-3xl" />
        </button>
        <button
          className="hidden md:block absolute top-4 right-4 text-gray-700 hover:text-gray-900"
          onClick={handleClose}
        >
          <IoCloseSharp className="text-3xl" />
        </button>
      </div>
    </div>
  );
};

export default AttendanceLog;
