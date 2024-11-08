import React from 'react';
import { Building2, Users, Briefcase, TrendingUp, MessageSquare, Network } from 'lucide-react';

const features = [
  {
    name: 'Enterprise Networking',
    description: 'Connect with leading companies and decision-makers across Algeria.',
    icon: Building2,
  },
  {
    name: 'Startup Ecosystem',
    description: 'Join a thriving community of innovative startups and entrepreneurs.',
    icon: TrendingUp,
  },
  {
    name: 'Business Opportunities',
    description: 'Discover partnerships, contracts, and growth opportunities.',
    icon: Briefcase,
  },
  {
    name: 'Professional Network',
    description: 'Build your professional network with industry leaders and experts.',
    icon: Network,
  },
  {
    name: 'Talent Pool',
    description: 'Access a diverse pool of skilled professionals and opportunities.',
    icon: Users,
  },
  {
    name: 'Direct Communication',
    description: 'Engage directly with potential partners and collaborators.',
    icon: MessageSquare,
  },
];

export default function Features() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Everything you need to succeed
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Comprehensive tools and features to power your business growth
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="relative group">
                <div className="h-full bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition duration-300">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-blue-50 rounded-md">
                      <feature.icon className="h-6 w-6 text-blue-600" />
                    </span>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                    <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}