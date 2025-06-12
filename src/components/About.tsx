import React from 'react';
import { Award, Users, Clock, Heart } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, number: '15,000+', label: 'Happy Patients' },
    { icon: Award, number: '25+', label: 'Years Experience' },
    { icon: Clock, number: '24/7', label: 'Emergency Care' },
    { icon: Heart, number: '100%', label: 'Patient Satisfaction' }
  ];

  return (
    <section id="about" className="py-12 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
            <div>
              <div className="inline-flex items-center px-3 py-1.5 lg:px-4 lg:py-2 bg-teal-100 text-teal-800 rounded-full text-xs lg:text-sm font-medium mb-4">
                About DentalCare
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
                Excellence in Dental Care 
              </h2>
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed mb-4 lg:mb-6">
                At DentalCare, we believe that everyone deserves a healthy, beautiful smile. Our team of 
                experienced professionals is dedicated to providing exceptional dental care in a comfortable, 
                modern environment.
              </p>
              <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                We combine cutting-edge technology with personalized care to ensure the best possible 
                outcomes for our patients. From routine cleanings to complex procedures, we're here to 
                support your oral health journey every step of the way.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 lg:gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center p-4 lg:p-6 bg-gray-50 rounded-xl lg:rounded-2xl">
                    <div className="flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full mx-auto mb-3 lg:mb-4">
                      <Icon className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                    </div>
                    <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1 lg:mb-2">{stat.number}</div>
                    <div className="text-gray-600 font-medium text-sm lg:text-base">{stat.label}</div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">
              <button className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-6 py-3 lg:px-8 lg:py-4 rounded-full font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                Meet Our Team
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-6 py-3 lg:px-8 lg:py-4 rounded-full font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300">
                Our Story
              </button>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-4 lg:gap-6">
              <div className="space-y-4 lg:space-y-6">
                <img
                  src="https://images.pexels.com/photos/6812521/pexels-photo-6812521.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Modern dental office"
                  className="rounded-xl lg:rounded-2xl shadow-lg w-full h-32 sm:h-40 lg:h-48 object-cover"
                />
                <img
                  src="https://images.pexels.com/photos/6812544/pexels-photo-6812544.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Dental equipment"
                  className="rounded-xl lg:rounded-2xl shadow-lg w-full h-48 sm:h-56 lg:h-64 object-cover"
                />
              </div>
              <div className="space-y-4 lg:space-y-6 pt-8 lg:pt-12">
                <img
                  src="https://images.pexels.com/photos/6812549/pexels-photo-6812549.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Dental consultation"
                  className="rounded-xl lg:rounded-2xl shadow-lg w-full h-48 sm:h-56 lg:h-64 object-cover"
                />
                <img
                  src="https://images.pexels.com/photos/6812582/pexels-photo-6812582.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Happy patient"
                  className="rounded-xl lg:rounded-2xl shadow-lg w-full h-32 sm:h-40 lg:h-48 object-cover"
                />
              </div>
            </div>
            
            {/* Floating card - Adjusted for mobile */}
            <div className="absolute -bottom-4 left-4 lg:-bottom-6 lg:left-6 bg-white p-4 lg:p-6 rounded-xl lg:rounded-2xl shadow-2xl border">
              <div className="flex items-center space-x-3 lg:space-x-4">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                  <Award className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm lg:text-base">Award Winner</div>
                  <div className="text-xs lg:text-sm text-gray-600">Best Dental Practice 2023</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;