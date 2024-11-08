import React, { useState } from 'react';
import { Menu, X, Network } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Network className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">BledNet Connect</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 transition">Home</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition">Network</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition">Companies</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition">Jobs</a>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              Join Now
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Home</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Network</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Companies</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Jobs</a>
            <button className="w-full text-left px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Join Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}