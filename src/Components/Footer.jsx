import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="main-foot-container bg-gray-900 text-gray-300 py-10 mt-10">
      {/* Footer Container */}
      <div className="foot-container max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-8">
        
        {/* Column 1 - About / Newsletter */}
        <div>
          <h4 className="text-xl font-semibold text-white mb-4">Galaxy Travel</h4>
          <p className="text-sm mb-3">Embark on cosmic adventures across the stars — Moon, Mars & beyond!</p>
          <h5 className="text-white font-medium mb-2">Subscribe</h5>
          <p className="text-sm mb-3">Get 10% off your first interstellar journey ✨</p>
          <div className="flex items-center bg-gray-800 rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent w-full text-sm outline-none text-white"
            />
            <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 text-sm text-white font-medium transition">
              Subscribe
            </button>
          </div>
        </div>

        {/* Column 2 - Support */}
        <div className="support">
          <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
          <p className="text-sm">Galaxy HQ, Dimna Road, Mango, Jamshedpur, Jharkhand</p>
          <p className="text-sm">galaxytravel@support.com</p>
          <p className="text-sm">+91 1800-180-2223</p>
        </div>

        {/* Column 3 - Account */}
        <div className="Account">
          <h4 className="text-lg font-semibold text-white">Account</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-blue-400">My Account</Link></li>
            <li><Link to="/" className="hover:text-blue-400">Login / Register</Link></li>
            <li><Link to="/" className="hover:text-blue-400">My Bookings</Link></li>
            <li><Link to="/" className="hover:text-blue-400">Wish List</Link></li>
            <li><Link to="/" className="hover:text-blue-400">Travel Packages</Link></li>
          </ul>
        </div>

        {/* Column 4 - Quick Links */}
        <div className="Quick-Links">
          <h4 className="text-lg font-semibold text-white">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-blue-400">Privacy Policy</Link></li>
            <li><Link to="/" className="hover:text-blue-400">Terms of Use</Link></li>
            <li><Link to="/" className="hover:text-blue-400">FAQ</Link></li>
            <li><Link to="/" className="hover:text-blue-400">Contact Us</Link></li>
          </ul>
        </div>

        {/* Column 5 - Socials */}
        <div className="Socials">
          <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
          <p className="text-sm mb-3">Stay connected through our social media:</p>
          <div className="Socials-cont flex space-x-4 text-xl">
            <Link to="/" className="hover:text-blue-500 transition"><FaFacebookF /></Link>
            <Link to="/" className="hover:text-blue-400 transition"><FaTwitter /></Link>
            <Link to="/" className="hover:text-pink-500 transition"><FaInstagram /></Link>
            <Link to="/" className="hover:text-blue-600 transition"><FaLinkedin /></Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className=" Bottom-Bar border-t border-gray-700 mt-10 pt-5 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Galaxy Travel. All rights reserved. 🚀
      </div>
    </footer>
  );
};

export default Footer;
