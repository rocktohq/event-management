import { FaFacebook, FaGithub, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-gray-800 text-white">
      <nav className="grid grid-flow-col gap-4">
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/career">Career</Link>
      </nav>
      <nav className="text-2xl flex gap-5">
        <Link className="hover:text-primary duration-300"><FaFacebook /></Link>
        <Link className="hover:text-primary duration-300"><FaYoutube /></Link>
        <Link className="hover:text-primary duration-300"><FaGithub /></Link>
        <Link className="hover:text-primary duration-300"><FaInstagram /></Link>
        <Link className="hover:text-primary duration-300"><FaTwitter /></Link>
      </nav>
      <aside>
        <p>Copyright <span className="text-primary">eManage</span>&trade; 2023 - All right reserved.</p>
      </aside>
    </footer>
  )
}

export default Footer
