import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CallToAction() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="relative max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
                  Ready to grow your business?
                </h2>
                <p className="mt-4 text-lg text-gray-500 max-w-3xl">
                  Join thousands of Algerian businesses already benefiting from our network. 
                  Start connecting, collaborating, and growing today.
                </p>
                <div className="mt-8 flex space-x-4">
                  <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                  <button className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                    Contact Sales
                  </button>
                </div>
              </div>
              <div className="relative">
                <img
                  className="rounded-lg shadow-xl"
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80"
                  alt="Business meeting"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}