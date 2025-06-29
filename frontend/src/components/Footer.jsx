import React from 'react';
import { Link } from 'react-router-dom';

const Footer = ({ variant = 'light' }) => {
  const currentYear = new Date().getFullYear();

  const colorConfig = {
    light: {
      bg: 'bg-gradient-to-b from-white to-gray-50',
      border: 'border-gray-100',
      bottomBorder: 'border-gray-200',
      heading: 'text-gray-900',
      text: 'text-gray-600',
      link: 'text-gray-500 hover:text-pigmentgreen-500',
      socialLink: 'text-gray-400 hover:text-pigmentgreen-500',
      inputBg: 'border-gray-300 focus:ring-pigmentgreen-500'
    },
    dark: {
      bg: 'bg-black',
      border: 'border-t border-transparent',
      bottomBorder: 'border-gray-800',
      heading: 'text-white',
      text: 'text-gray-400',
      link: 'text-gray-400 hover:text-pigmentgreen-400',
      socialLink: 'text-gray-500 hover:text-pigmentgreen-400',
      inputBg: 'bg-gray-800 border-gray-700 focus:ring-pigmentgreen-500 text-white'
    }
  };

  const colors = colorConfig[variant];

  return (
    <footer className={`${colors.bg} ${colors.border}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 text-center md:text-left">
          {/* Brand Section */}
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <h2 className="text-xl font-bold bg-gradient-to-r from-pigmentgreen-600 to-malachite-600 bg-clip-text text-transparent inline-block">
              Excel Analytics Platform
            </h2>
            <p className={`${colors.text} text-sm leading-relaxed max-w-xs`}>
              Transform your Excel data into actionable insights with our powerful analytics platform.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={`${colors.socialLink} transition-colors`}>
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={`${colors.socialLink} transition-colors`}>
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={`${colors.socialLink} transition-colors`}>
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links Sections Wrapper */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-4 gap-8">
            {/* Product Links */}
            <div className="text-center sm:text-left sm:col-span-1">
              <h3 className={`text-sm font-semibold ${colors.heading} uppercase tracking-wider mb-4`}>Product</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/features" className={`text-base ${colors.link} hover:text-pigmentgreen-500 transition-colors`}>
                    Features
                  </Link>
                </li>
                <li>
                  <Link to="/pricing" className={`text-base ${colors.link} hover:text-pigmentgreen-500 transition-colors`}>
                    Pricing
                  </Link>
                </li>
                <li>
                  <a href="#tutorials" className={`text-base ${colors.link} hover:text-pigmentgreen-500 transition-colors`}>
                    Tutorials
                  </a>
                </li>
                <li>
                  <Link to="/releases" className={`text-base ${colors.link} hover:text-pigmentgreen-500 transition-colors`}>
                    Releases
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company Links */}
            <div className="text-center sm:text-left sm:col-span-1">
              <h3 className={`text-sm font-semibold ${colors.heading} uppercase tracking-wider mb-4`}>Company</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/about" className={`text-base ${colors.link} hover:text-pigmentgreen-500 transition-colors`}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className={`text-base ${colors.link} hover:text-pigmentgreen-500 transition-colors`}>
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className={`text-base ${colors.link} hover:text-pigmentgreen-500 transition-colors`}>
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className={`text-base ${colors.link} hover:text-pigmentgreen-500 transition-colors`}>
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Newsletter Section (moved here for better alignment) */}
            <div className="col-span-1 sm:col-span-2 text-center sm:text-left">
              <h3 className={`text-sm font-semibold ${colors.heading} uppercase tracking-wider mb-4`}>Stay Updated</h3>
              <p className={`text-base ${colors.text} mb-4`}>
                Subscribe to our newsletter for the latest updates.
              </p>
              <form className="flex flex-col sm:flex-row gap-2 items-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className={`w-full px-4 py-2 border rounded-lg focus:border-transparent outline-none flex-grow ${colors.inputBg}`}
                />
                <button
                  type="submit"
                  className="bg-pigmentgreen-500 text-white px-4 py-2 rounded-lg hover:bg-pigmentgreen-600 transition-colors duration-200"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`border-t ${colors.bottomBorder} pt-8`}>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className={`text-sm ${colors.text}`}>
              © {currentYear} Excel Analytics Platform. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6">
              <Link to="/privacy" className={`text-sm ${colors.link} transition-colors`}>
                Privacy Policy
              </Link>
              <Link to="/terms" className={`text-sm ${colors.link} transition-colors`}>
                Terms of Service
              </Link>
              <Link to="/cookies" className={`text-sm ${colors.link} transition-colors`}>
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 