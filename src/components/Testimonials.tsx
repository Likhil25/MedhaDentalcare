import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Marketing Manager',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'The team at DentalCare is absolutely amazing! They made my dental anxiety disappear with their gentle approach and state-of-the-art equipment. My smile has never looked better!'
    },
    {
      name: 'Michael Chen',
      role: 'Software Engineer',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'Professional, efficient, and caring. The entire staff goes above and beyond to ensure comfort and quality care. I highly recommend DentalCare to anyone looking for exceptional dental services.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Teacher',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'I\'ve been coming here for 5 years and the service is consistently outstanding. The modern facility and friendly staff make every visit pleasant. Thank you for taking such great care of my family!'
    },
    {
      name: 'David Thompson',
      role: 'Business Owner',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'From emergency care to routine cleanings, DentalCare has always been there for me. Their 24/7 emergency service saved me during a dental crisis. Truly grateful for their dedication.'
    }
  ];

  return (
    <section id="testimonials" className="py-12 lg:py-20 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center px-3 py-1.5 lg:px-4 lg:py-2 bg-blue-100 text-blue-800 rounded-full text-xs lg:text-sm font-medium mb-4">
            Patient Reviews
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
            What Our Patients Say
          </h2>
          <p className="text-base lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied patients have to say about their experience with us.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 mb-8 lg:mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl lg:rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative"
            >
              <div className="absolute -top-3 left-6 lg:-top-4 lg:left-8">
                <div className="w-6 h-6 lg:w-8 lg:h-8 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full flex items-center justify-center">
                  <Quote className="w-3 h-3 lg:w-4 lg:h-4 text-white" />
                </div>
              </div>
              
              <div className="flex items-center mb-4 lg:mb-6 pt-3 lg:pt-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 lg:w-16 lg:h-16 rounded-full object-cover mr-3 lg:mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-base lg:text-lg">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm lg:text-base">{testimonial.role}</p>
                  <div className="flex items-center mt-1 lg:mt-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 lg:w-4 lg:h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700 leading-relaxed italic text-sm lg:text-base">"{testimonial.text}"</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8 bg-white rounded-xl lg:rounded-2xl p-6 lg:p-8 shadow-lg">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">4.9/5</div>
              <div className="flex items-center justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 lg:w-5 lg:h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <div className="text-gray-600 text-sm lg:text-base">Average Rating</div>
            </div>
            <div className="w-full h-px sm:w-px sm:h-16 bg-gray-200"></div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">500+</div>
              <div className="text-gray-600 text-sm lg:text-base">Happy Reviews</div>
            </div>
            <div className="w-full h-px sm:w-px sm:h-16 bg-gray-200"></div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">98%</div>
              <div className="text-gray-600 text-sm lg:text-base">Recommend Us</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;