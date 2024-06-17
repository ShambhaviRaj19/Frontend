// Import React
import React from 'react';

// Import Font Awesome components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Import specific icons
import { faFacebook, faTwitter, faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons';

// Import your CSS for styling
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>About Us</h5>
            <p> Empowering VTU Engineering students through a <br/>
              groundbreaking edtech revolution. Our platform harnesses <br/>
              the power of dynamic peer-to-peer collaboration,<br/>
               advanced study materials, and engaging video content<br/>
                to seamlessly address the key challenges in exam preparation.</p>
          </div>
        </div>
       
        <div className="row">
          <div className="col-md-12">
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Help</p>
            <ul className="footer-links mt-6 space-y-4">
              <li>
                <a href="#" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Customer Support </a>
              </li>
              <li>
                <a href="#" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Terms & Conditions </a>
              </li>
              <li>
                <a href="#" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Privacy Policy </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <footer className="footer-bottom">
        <p>Copyright © LearnyHive.com 2024. All rights reserved.</p>
        <ul className="footer-icons">
          <li><FontAwesomeIcon icon={faFacebook} className="grow" /></li>
          <li><FontAwesomeIcon icon={faTwitter} className="grow" /></li>
          <li><FontAwesomeIcon icon={faGoogle} className="grow" /></li>
          <li><FontAwesomeIcon icon={faGithub} className="grow" /></li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
