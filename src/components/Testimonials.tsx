import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Benali',
    role: 'CEO, TechAlgeria',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&h=200&q=80',
    content: 'BledNet Connect has transformed how we network in Algeria. We\'ve found invaluable partnerships that helped scale our business.',
  },
  {
    name: 'Karim Hadj',
    role: 'Founder, StartupDZ',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&h=200&q=80',
    content: 'The platform made it incredibly easy to connect with potential investors and partners. It\'s a game-changer for Algerian startups.',
  },
  {
    name: 'Amira Rahal',
    role: 'Director, Innovation Hub',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&h=200&q=80',
    content: 'As a business hub, we\'ve seen countless successful partnerships form through BledNet Connect. It\'s truly connecting Algeria\'s business ecosystem.',
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Trusted by Leading Businesses
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Hear from our community members who have transformed their businesses
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300"
            >
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">{testimonial.content}</p>
              <div className="flex items-center">
                <img
                  className="h-12 w-12 rounded-full object-cover"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}