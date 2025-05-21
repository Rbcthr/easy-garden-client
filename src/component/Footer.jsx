import React from "react";
import { Link } from "react-router";
import {
  FaAddressBook,
  FaFacebook,
  FaInstagram,
  FaMobile,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-green-500">
      <div className="w-11/12 mx-auto px-4 divide-y text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-8">
          <div className="space-y-3">
            <h3 className="tracking-wide font-bold uppercase text-white">
              Contact info
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <FaMobile size={20}></FaMobile>
                <span>+880 1872243808</span>
              </li>
              <li className="flex items-center gap-2">
                <FaAddressBook size={20}></FaAddressBook>
                <span>Tongi, Gazipur</span>
              </li>
              <li className="space-y-2">
                <div className="flex items-center gap-2">
                  <FaLocationPin size={20}></FaLocationPin>
                  <span>Location</span>
                </div>
                <div>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6600.995446127483!2d90.4003733!3d23.91907935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c4efb52c6e19%3A0x62c5fd45a44c2f6!2sErshadnagar%2C%20Tongi!5e1!3m2!1sen!2sbd!4v1747822715287!5m2!1sen!2sbd"
                    width="300"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="tracking-wide uppercase text-white font-bold">
              Terms
            </h3>
            <ul className="space-y-1">
              <li>
                <a rel="noopener noreferrer" href="#">
                  Privacy
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <div className="uppercase font-bold text-white">Social media</div>
            <div className="flex justify-start space-x-3">
              <a
                rel="noopener noreferrer"
                href="#"
                title="Facebook"
                className="flex items-center p-1"
              >
                <FaFacebook size={25}></FaFacebook>
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                title="Twitter"
                className="flex items-center p-1"
              >
                <FaTwitter size={25}></FaTwitter>
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                title="Instagram"
                className="flex items-center p-1"
              >
                <FaInstagram size={25}></FaInstagram>
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                title="Instagram"
                className="flex items-center p-1"
              >
                <FaYoutube size={25}></FaYoutube>
              </a>
            </div>
          </div>
        </div>
        <div className="py-6 text-sm text-center text-white">
          © 2025 Company Co. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
