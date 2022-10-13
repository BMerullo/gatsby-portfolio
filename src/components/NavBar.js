import React from "react"
import { Link } from "@reach/router"
import logo from "../assets/images/logo.png"

const NavBar = () => {
  return (
    <header>
      <navbar className="navbar">
        <Link to="/">
          <img className="logo" src={logo} alt="logo" />
        </Link>
        <ul>
          <li className="nav-li">connect</li>
          <li className="nav-li">projects</li>
          <li className="nav-li">
            <label className="switch">
              <input type="checkbox"></input>
              <span className="slider round"></span>
            </label>
          </li>
        </ul>
      </navbar>
    </header>
  )
}

export default NavBar
