import React from 'react';
import { Smile, Shield, Zap, Heart, Eye, Sparkles } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Smile,
      title: 'General Dentistry',
      description: 'Comprehensive dental care including cleanings, fillings, and preventive treatments.',
      features: ['Regular Checkups', 'Dental Cleanings', 'Cavity Fillings', 'Oral Health Education'],
      color: 'blue'
    },
    {
      icon: Sparkles,
      title: 'Cosmetic Dentistry',
      description: 'Transform your smile with our advanced cosmetic dental procedures.',
      features: ['Teeth Whitening', 'Veneers', 'Bonding', 'Smile Makeovers'],
      color: 'purple'
    },
    {
      icon: Shield,
      title: 'Restorative Dentistry',
      description: 'Restore function and beauty to damaged or missing teeth.',
      features: ['Dental Implants', 'Crowns & Bridges', 'Dentures', 'Root Canal Therapy'],
      color: 'green'
    },
    {
      icon: Zap,
      title: 'Emergency Care',
      description: '24/7 emergency dental services for urgent dental problems.',
      features: ['Pain Relief', 'Trauma Care', 'Urgent Repairs', 'After-hours Service'],
      color: 'red'
    },
    {
      icon: Heart,
      title: 'Pediatric Dentistry',
      description: 'Specialized dental care designed specifically for children.',
      features: ['Child-Friendly Environment', 'Preventive Care', 'Education', 'Gentle Approach'],
      color: 'pink'
    },
    {
      icon: Eye,
      title: 'Orthodontics',
      description: 'Straighten teeth and correct bite issues with modern orthodontic solutions.',
      features: ['Traditional Braces', 'Clear Aligners', 'Retainers', 'Bite Correction'],
      color: 'indigo'
    }
  ];

  const colorClasses = {
    blue: 'from-blue-500 to-blue-600',
    purple: 'from-purple-500 to-purple-600',
    green: 'from-green-500 to-green-600',
    red: 'from-red-500 to-red-600',
    pink: 'from-pink-500 to-pink-600',
    indigo: 'from-indigo-500 to-indigo-600'
  };

  return (
    <section id="services" className="py-12 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center px-3 py-1.5 lg:px-4 lg:py-2 bg-blue-100 text-blue-800 rounded-full text-xs lg:text-sm font-medium mb-4">
            Our Services
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
            Comprehensive Dental Care
          </h2>
          <p className="text-base lg:text-xl text-gray-600 max-w-3xl mx-auto">
            From routine cleanings to complex procedures, we offer a full range of dental services 
            using the latest technology and techniques.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-xl lg:rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r ${colorClasses[service.color]} rounded-xl lg:rounded-2xl flex items-center justify-center mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                </div>
                
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 lg:mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-4 lg:mb-6 leading-relaxed text-sm lg:text-base">{service.description}</p>
                
                <ul className="space-y-2 lg:space-y-3 mb-4 lg:mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700 text-sm lg:text-base">
                      <div className={`w-1.5 h-1.5 lg:w-2 lg:h-2 bg-gradient-to-r ${colorClasses[service.color]} rounded-full mr-2 lg:mr-3`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full bg-gradient-to-r ${colorClasses[service.color]} text-white py-2.5 lg:py-3 rounded-lg lg:rounded-xl font-semibold text-sm lg:text-base hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
                  Learn More
                </button>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12 lg:mt-16">
          <button className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-6 py-3 lg:px-8 lg:py-4 rounded-full font-semibold text-base lg:text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;