import { useContext } from "react"
import { AuthContext } from "../../providers/AuthProvider"
import Logo from "/favicon.png"
import { NavLink, useNavigate } from "react-router-dom";
import { FaCartArrowDown, FaHeart, FaUserAlt } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";

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

  // Protected Links
  const profilLinks = <>
    <li><NavLink to="/profile"><FaUserAlt /> Profile</NavLink></li>
    <li><NavLink to="/wishlist"><FaHeart /> Wishlist</NavLink></li>
    <li><NavLink to="/cart"><FaCartArrowDown /> Cart</NavLink></li>
    <li><NavLink to="/settings"><AiFillSetting /> Settings</NavLink></li>
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
        <span className="text-4xl text-neutral font-bold ml-2 hidden md:block">Manage</span>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end">
        {user && <span className="text-lg text-neutral-600">{user.displayName}</span>}
        {user && <>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user.photoURL} alt="" />
              </div>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-md w-52 text-xl">
              {profilLinks}
            </ul>
          </div>
        </>}

        <button onClick={handleLogOutBtn} className="btn btn-neutral rounded">{user ? "Logout" : "Login"}</button>
      </div>
    </div>
  )
}

export default Navbar
