import React from 'react';
import { Network } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center">
              <Network className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold text-white">BledNet Connect</span>
            </div>
            <p className="mt-4 text-gray-400 max-w-md">
              Empowering Algerian businesses through meaningful connections and collaboration.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Platform</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Network</a></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Companies</a></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Jobs</a></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Resources</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#" className="text-base text-gray-300 hover:text-white">About</a></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Contact</a></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Privacy</a></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Terms</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 text-center">
            © {new Date().getFullYear()} BledNet Connect. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}