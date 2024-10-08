import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="bg-white py-8 border-t border-gray-200">
      <div className="container px-4 gap-4 sm:px-8 mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left section */}
        <div className="text-center md:text-left mb-6 md:mb-0">
          <div className="flex items-center justify-center md:justify-start mb-4">
            {/* <img src="your-logo.png" alt="Logo" className="h-8 w-8 mr-2" /> */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Design To Develop</h2>
              <p className="text-sm text-gray-600">The best choice for tech founders</p>
            </div>
          </div>
          <a href="/pricing" className="bg-red-600 text-white py-2 px-4 rounded-full inline-flex items-center hover:bg-red-700 transition duration-300">
            View pricing <span className="ml-2">&rarr;</span>
          </a>
        </div>

        {/* Middle section */}
        <div className="flex justify-center gap-4 sm:flex-row flex-col w-full md:justify-between text-gray-900 text-sm mb-6 md:mb-0">
          <div className="mr-16">
            <h3 className="font-semibold mb-3">Services</h3>
            <ul>
              <li><a href="/" className="hover:underline">Early stage startups</a></li>
              <li><a href="/" className="hover:underline">Growth stage startups</a></li>
              <li><a href="/" className="hover:underline">Jobs</a></li>
            </ul>
          </div>
          <div className="mr-16">
           <Link to="pricing"> <h3 className="font-semibold mb-3">Pricing</h3></Link>
            <ul>
              <li><a href="/" className="hover:underline">Blog</a></li>
              <li><a href="/" className="hover:underline">Imprint</a></li>
              <li><a href="/" className="hover:underline">About</a></li>
            </ul>
          </div>
          <div className="flex flex-col justify-center md:justify-end mb-4">
          <h3 className="font-semibold mb-3">Social Media</h3>

            <a href="https://www.linkedin.com/in/tuseef-ahmed-286a9521b/" className="text-gray-600 hover:text-gray-900 "><i className="fab fa-linkedin"></i> Linkedin</a>
            <a href="https://www.instagram.com/design.to.develop/" className="text-gray-600 hover:text-gray-900"><i className="fab fa-facebook"></i> Facebook</a>
            <a href="https://www.instagram.com/design.to.develop/" className="text-gray-600 hover:text-gray-900"><i className="fab fa-instagram"></i> Instagram</a>
          </div>
        </div>

        {/* Right section */}
        
      </div>
      <div className="border-t border-gray-200 mt-8 pt-4 text-center text-gray-600 text-sm">
        <div className="flex justify-center space-x-8">
          <a href="/" className="hover:underline">Terms & Conditions</a>
          <a href="/" className="hover:underline">Privacy Policy</a>
          <a href="/" className="hover:underline">Website Disclaimer</a>
        </div>
        <p className="mt-4">Design To Develop GmbH &copy; 2024. All rights reserved.</p>
      </div>
      <div className="fixed bottom-4 right-4">
        <a href="https://www.linkedin.com/in/tuseef-ahmed-286a9521b/" target='_blank' className="bg-red-600 text-white py-3 px-6 rounded-full inline-flex items-center hover:bg-red-700 transition duration-300">
          Send message
        </a>
      </div>
    </footer>
  );
};

export default Footer;
