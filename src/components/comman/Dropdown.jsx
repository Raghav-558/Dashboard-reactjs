import React, { useState } from 'react';

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative text-left">
            <div>
                <button onClick={toggleDropdown} className="rounded-md shadow-sm px-2 py-2 text-white text-bold text-lg">
                    Raghav
                </button>
            </div>
            {isOpen && (<div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md bg-gray-300">
                <div className="py-1">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-all duration-100">
                        About
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-all duration-100" >
                        Notifications
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-all duration-100" >
                        Setting
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-all duration-100" >
                        Edit profile
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-all duration-100" >
                        Contact Us
                    </a>
                </div>
            </div>
            )}
        </div>
    );
};

export default Dropdown;
