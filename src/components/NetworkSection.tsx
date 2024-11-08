import React from 'react';

const categories = [
  { name: 'Entrepreneurs', count: '2,000+' },
  { name: 'Enterprises', count: '500+' },
  { name: 'Startups', count: '1,000+' },
  { name: 'Job Opportunities', count: '5,000+' },
];

export default function NetworkSection() {
  return (
    <div className="bg-blue-600 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Join Algeria's Largest B2B Network
          </h2>
          <p className="mt-4 text-xl text-blue-100">
            Connect with thousands of professionals and businesses across the country
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {categories.map((category) => (
              <div key={category.name} className="text-center">
                <p className="text-5xl font-extrabold text-white">{category.count}</p>
                <p className="mt-2 text-xl font-medium text-blue-100">{category.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <button className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition">
            Join the Network
          </button>
        </div>
      </div>
    </div>
  );
}