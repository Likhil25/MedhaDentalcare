import React from 'react';
import { ArrowRight, Shield, Award, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-24 lg:pt-32 pb-12 lg:pb-20 bg-gradient-to-br from-blue-50 via-white to-teal-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1.5 lg:px-4 lg:py-2 bg-blue-100 text-blue-800 rounded-full text-xs lg:text-sm font-medium">
                <Award className="w-3 h-3 lg:w-4 lg:h-4 mr-1 lg:mr-2" />
                Award-Winning Dental Care
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                Your Perfect
                <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent"> Smile</span>
                <br />
                Starts Here
              </h1>
              <p className="text-base lg:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Experience exceptional dental care with our state-of-the-art technology and compassionate team. 
                We're committed to making your dental health journey comfortable and effective.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center lg:justify-start">
              <button className="group bg-gradient-to-r from-blue-600 to-teal-500 text-white px-6 py-3 lg:px-8 lg:py-4 rounded-full font-semibold text-base lg:text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center">
                Schedule Consultation
                <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-6 py-3 lg:px-8 lg:py-4 rounded-full font-semibold text-base lg:text-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300">
                Learn More
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4 lg:gap-8 pt-6 lg:pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 bg-blue-100 rounded-full mx-auto mb-2 lg:mb-3">
                  <Users className="w-5 h-5 lg:w-6 lg:h-6 text-blue-600" />
                </div>
                <div className="text-xl lg:text-2xl font-bold text-gray-900">15K+</div>
                <div className="text-xs lg:text-sm text-gray-600">Happy Patients</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 bg-teal-100 rounded-full mx-auto mb-2 lg:mb-3">
                  <Award className="w-5 h-5 lg:w-6 lg:h-6 text-teal-600" />
                </div>
                <div className="text-xl lg:text-2xl font-bold text-gray-900">25+</div>
                <div className="text-xs lg:text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 bg-green-100 rounded-full mx-auto mb-2 lg:mb-3">
                  <Shield className="w-5 h-5 lg:w-6 lg:h-6 text-green-600" />
                </div>
                <div className="text-xl lg:text-2xl font-bold text-gray-900">100%</div>
                <div className="text-xs lg:text-sm text-gray-600">Safe & Sterile</div>
              </div>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0">
            <div className="relative z-10">
              <img
                src="src\components\main pic.png"
                alt="Professional dental care"
                className="rounded-2xl lg:rounded-3xl shadow-2xl w-full h-64 sm:h-80 lg:h-[600px] object-cover"
              />
              <div className="absolute -bottom-4 -left-4 lg:-bottom-6 lg:-left-6 bg-white p-4 lg:p-6 rounded-xl lg:rounded-2xl shadow-xl">
                <div className="flex items-center space-x-3 lg:space-x-4">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Shield className="w-5 h-5 lg:w-6 lg:h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm lg:text-base">100% Safe</div>
                    <div className="text-xs lg:text-sm text-gray-600">FDA Approved Equipment</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background decorations - Hidden on mobile for cleaner look */}
            <div className="absolute top-10 -right-10 w-24 h-24 lg:w-32 lg:h-32 bg-blue-200 rounded-full opacity-20 animate-pulse hidden lg:block"></div>
            <div className="absolute -bottom-10 right-20 w-16 h-16 lg:w-24 lg:h-24 bg-teal-200 rounded-full opacity-30 animate-bounce hidden lg:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;