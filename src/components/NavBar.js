import React from "react"
import { Link } from "gatsby"
import logo from "../assets/images/logo.png"
import hamburgerImg from "../assets/images/hamburger.png"

const NavBar = () => {
  return (
    <header>
      <nav className="navbar">
        <Link to="/">
          <img className="logo" src={logo} alt="logo" />
        </Link>
        <ul className="nav-desktop">
          <li className="nav-li">connect</li>
          <li className="nav-li">
            <Link to="/projects">projects</Link>
          </li>
          <li className="nav-li">
            <label className="switch">
              <input type="checkbox"></input>
              <span className="slider round"></span>
            </label>
          </li>
        </ul>
        <ul className="nav-mobile">
          <li className="nav-li-mobile">
            <label className="switch">
              <input type="checkbox"></input>
              <span className="slider round"></span>
            </label>
          </li>
          <li className="nav-li-mobile">
            <input
              className="menu-btn-img"
              type="image"
              src={hamburgerImg}
              alt="menu"
            />
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar
