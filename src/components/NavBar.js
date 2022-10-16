import React, { useState } from "react"
import { Link } from "gatsby"
import logo from "../assets/images/logo.png"
import hamburgerImg from "../assets/images/hamburger.png"

import emailImg from "../assets/images/email-img.png"
import linkedinImg from "../assets/images/linkedin-img.png"
import githubImg from "../assets/images/github-img.jpg"

const NavBar = () => {
  const [hamburger, setHamburger] = useState(false)
  const hamburgerHandler = () => {
    setHamburger(!hamburger)
  }

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
              onClick={hamburgerHandler}
            />
          </li>
        </ul>
      </nav>
      {hamburger === true ? (
        <section className="nav-mobile">
          <Link className="mobile-page-tab" to="/projects">
            <h2>Projects</h2>
          </Link>
          <ul className="mobile-nav-menu">
            <li>
              <a className="nav-link" href="#">
                <img
                  className="mobile-img"
                  src={emailImg}
                  alt="linkedin logo"
                />
              </a>
            </li>
            <li>
              <a
                className="nav-link"
                href="https://www.linkedin.com/in/bobmerullo/"
              >
                <img
                  className="mobile-img"
                  src={linkedinImg}
                  alt="linkedin logo"
                />
              </a>
            </li>
            <li>
              <a className="nav-link" href="https://github.com/BMerullo">
                <img className="mobile-img" src={githubImg} alt="github logo" />
              </a>
            </li>
          </ul>
        </section>
      ) : null}
    </header>
  )
}

export default NavBar
