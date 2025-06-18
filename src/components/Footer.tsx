import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: 'https://www.instagram.com/medhadentalcare_hyd?utm_source=qr&igsh=ZnF3MHRnNGEzemZz', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
    { name: 'Emergency Care', href: '#emergency' },
    { name: 'Insurance', href: '#insurance' }
  ];

  const services = [
    { name: 'General Dentistry', href: '#' },
    { name: 'Cosmetic Dentistry', href: '#' },
    { name: 'Restorative Care', href: '#' },
    { name: 'Pediatric Dentistry', href: '#' },
    { name: 'Orthodontics', href: '#' },
    { name: 'Emergency Care', href: '#' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4 lg:space-y-6 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 lg:space-x-3">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-600 to-teal-500 rounded-lg lg:rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg lg:text-xl">DC</span>
              </div>
              <div>
                <h3 className="text-xl lg:text-2xl font-bold">DentalCare</h3>
                <p className="text-gray-400 text-xs lg:text-sm">Excellence in Dental Health</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm lg:text-base">
              Providing exceptional dental care with state-of-the-art technology and a compassionate approach. 
              Your smile is our priority.
            </p>
            <div className="flex space-x-3 lg:space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-8 h-8 lg:w-10 lg:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-600 hover:to-teal-500 transition-all duration-300 transform hover:scale-110"
                  >
                    <Icon className="w-4 h-4 lg:w-5 lg:h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg lg:text-xl font-bold mb-4 lg:mb-6">Quick Links</h4>
            <ul className="space-y-2 lg:space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group text-sm lg:text-base"
                  >
                    <span className="w-0 h-0.5 bg-blue-500 transition-all duration-200 group-hover:w-3 lg:group-hover:w-4 mr-0 group-hover:mr-2"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg lg:text-xl font-bold mb-4 lg:mb-6">Our Services</h4>
            <ul className="space-y-2 lg:space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group text-sm lg:text-base"
                  >
                    <span className="w-0 h-0.5 bg-teal-500 transition-all duration-200 group-hover:w-3 lg:group-hover:w-4 mr-0 group-hover:mr-2"></span>
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg lg:text-xl font-bold mb-4 lg:mb-6">Contact Info</h4>
            <div className="space-y-3 lg:space-y-4">
              <div className="flex items-start space-x-2 lg:space-x-3">
                <MapPin className="w-4 h-4 lg:w-5 lg:h-5 text-blue-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm lg:text-base">123 Dental Street</p>
                  <p className="text-gray-400 text-sm lg:text-base">City, State 12345</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 lg:space-x-3">
                <Phone className="w-4 h-4 lg:w-5 lg:h-5 text-green-500 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm lg:text-base">+91 9491944467</p>
                  <p className="text-gray-400 text-xs lg:text-sm">Emergency: +91 94919 44467</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 lg:space-x-3">
                <Mail className="w-4 h-4 lg:w-5 lg:h-5 text-purple-500 flex-shrink-0" />
                <p className="text-gray-400 text-sm lg:text-base">medhadentalhyd@gmail.com</p>
              </div>
              <div className="flex items-start space-x-2 lg:space-x-3">
                <Clock className="w-4 h-4 lg:w-5 lg:h-5 text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm lg:text-base">Mon-Fri: 8:00 AM - 6:00 PM</p>
                  <p className="text-gray-400 text-sm lg:text-base">Sat: 9:00 AM - 3:00 PM</p>
                  <p className="text-gray-400 text-sm lg:text-base">Sun: Emergency Only</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 lg:mt-12 pt-6 lg:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-xs lg:text-sm text-center md:text-left">
              © 2024 DentalCare. All rights reserved. | Designed with care for your smile.
            </p>
            <div className="flex flex-wrap justify-center space-x-4 lg:space-x-6 text-xs lg:text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">HIPAA Compliance</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;