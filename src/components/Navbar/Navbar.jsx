import { useContext } from "react"
import { AuthContext } from "../../providers/AuthProvider"
import Logo from "/elogo.png"
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {

  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  // Nav Links
  const navLinks = <>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/about">About</NavLink></li>
    <li><NavLink to="/services">Services</NavLink></li>
    <li><NavLink to="/contact">Contact</NavLink></li>
  </>

  // Login/Logout Button
  const handleLogOutBtn = () => {
    user ?
      logOut()
        .then()
        .catch()
      : navigate("/login")

  }

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navLinks}
          </ul>
        </div>
        <img className="h-12 w-fit" src={Logo} alt="Logo" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end">
        <button onClick={handleLogOutBtn} className="btn btn-neutral rounded">{user ? "Logout" : "Login"}</button>
      </div>
    </div>
  )
}

export default Navbar