import { FaTwitterSquare } from "react-icons/fa";
import { FaSquareFacebook, FaSquareInstagram } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-base-200 font-semibold mt-20">
      <div
        className="
          footer
          p-10
          mx-auto
          w-full
          max-w-[1290px]

          flex flex-col
          gap-10
          text-center

          md:grid md:grid-cols-2 md:text-left
          
          lg:flex lg:flex-row lg:justify-between
        "
      >
        {/* Services */}
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover block">Event Hosting</a>
          <a className="link link-hover block">Volunteer Matching</a>
          <a className="link link-hover block">Donation Drives</a>
        </nav>

        {/* Company */}
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover block">About us</a>
          <a className="link link-hover block">Contact</a>
          <a className="link link-hover block">Projects</a>
        </nav>

        {/* Legal */}
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover block">Terms of use</a>
          <a className="link link-hover block">Privacy policy</a>
        </nav>

        {/* Social */}
        <nav>
          <h6 className="footer-title">Connect With Us</h6>
          <div className="flex justify-center md:justify-start gap-4 mt-2">
            <FaSquareFacebook size={24} />
            <FaTwitterSquare size={24} />
            <FaSquareInstagram size={24} />
            <IoLogoYoutube size={24} />
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
