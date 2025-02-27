import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "These headphones have completely transformed my listening experience. The sound quality is exceptional, and the noise cancellation is the best I've ever experienced.",
    author: {
      name: 'Sarah Johnson',
      role: 'Music Producer',
      imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    rating: 5,
  },
  {
    id: 2,
    content: "I've tried many premium headphones, but these are by far the most comfortable for long listening sessions. The battery life is impressive too!",
    author: {
      name: 'Michael Chen',
      role: 'Software Engineer',
      imageUrl: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    rating: 5,
  },
  {
    id: 3,
    content: "The sound quality is incredible, and the noise cancellation makes these perfect for my daily commute. Worth every penny!",
    author: {
      name: 'Emily Rodriguez',
      role: 'Marketing Director',
      imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    rating: 4,
  },
];

const Testimonials = () => {
  return (
    <div id="testimonials" className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Testimonials</h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Loved by music enthusiasts
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Don't just take our word for it. Here's what our customers have to say.
          </p>
        </div>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="px-6 py-8 sm:p-10 flex-grow">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                        fill={i < testimonial.rating ? 'currentColor' : 'none'}
                      />
                    ))}
                  </div>
                  <p className="mt-4 text-lg text-gray-500">{testimonial.content}</p>
                </div>
                <div className="border-t border-gray-200 px-6 py-4 sm:px-10">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img className="h-10 w-10 rounded-full" src={testimonial.author.imageUrl} alt="" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">{testimonial.author.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.author.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;