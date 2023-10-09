import { FaFacebook, FaGithub, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa"
import { Link } from "react-router-dom";
import Logo from "/favicon.png";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-screen-xl mx-auto px-3 py-8">
        <div className="footer py-10 text-white hidden lg:flex justify-between">
          <nav>
            <header className="footer-title">Services</header>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <header className="footer-title">Company</header>
            <Link className="link link-hover">About us</Link>
            <Link className="link link-hover">Contact</Link>
            <Link className="link link-hover">Career</Link>
          </nav>
          <nav>
            <header className="footer-title">Legal</header>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </div>
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-5 py-10 lg:border-t bg-slate-900 text-white lg:border-base-300">
          <aside className="items-center flex gap-2">
            <img className="w-10" src={Logo} alt="" />
            <div className="flex lg:block gap-1">
              <p>Copyright eManage&trade; 2023</p><p>All right reserved.</p>
            </div>
          </aside>
          <nav className="md:place-self-center md:justify-self-end">
            <p className="mb-2 text-center lg:text-left">Find us on</p>
            <ul className="grid grid-flow-col gap-4 text-xl">
              <Link className="hover:text-primary duration-300"><FaFacebook /></Link>
              <Link className="hover:text-primary duration-300"><FaYoutube /></Link>
              <Link className="hover:text-primary duration-300"><FaGithub /></Link>
              <Link className="hover:text-primary duration-300"><FaInstagram /></Link>
              <Link className="hover:text-primary duration-300"><FaTwitter /></Link>
            </ul>
          </nav>
          <nav className="grid grid-flow-col gap-4 lg:hidden">
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/career">Career</Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer
