import React, { useState } from "react"
import { Link } from "gatsby"
import logo from "../assets/images/logo.png"
import hamburgerImg from "../assets/images/hamburger.png"
import emailImg from "../assets/images/email-img.png"
import linkedinImg from "../assets/images/linkedin-img.png"
import githubImg from "../assets/images/github-img.png"

const NavBar = props => {
  const [hamburger, setHamburger] = useState(false)
  const [open, setOpen] = useState(false)

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
          <li>
            <p className="nav-li navbar-link" onClick={() => setOpen(!open)}>
              contacts
            </p>
            {open && (
              <div className="dropdown" onMouseLeave={() => setOpen(!open)}>
                <ul className="dropdown-list">
                  <li className="dropdown-list-item">
                    <a
                      className="nav-link dropdown-link"
                      href="mailto: bmerullo85@gmail.com"
                    >
                      <img className="footer-img" src={emailImg} alt="email" />
                      email
                    </a>
                  </li>
                  <li className="dropdown-list-item">
                    <a
                      className="nav-link  dropdown-link"
                      href="https://github.com/BMerullo"
                    >
                      <img
                        className="footer-img"
                        src={githubImg}
                        alt="github"
                      />
                      github
                    </a>
                  </li>
                  <li className="dropdown-list-item">
                    <a
                      className="nav-link dropdown-link"
                      href="https://www.linkedin.com/in/bobmerullo/"
                    >
                      <img
                        className="footer-img"
                        src={linkedinImg}
                        alt="linkedin"
                      />
                      linkedin
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li className="nav-li" activeClassName="active-link">
            <Link className="navbar-link" to="/" activeClassName="active-link">
              home
            </Link>
          </li>
          <li className="nav-li" activeClassName="active-link">
            <Link
              className="navbar-link"
              to="/projects"
              activeClassName="active-link"
            >
              projects
            </Link>
          </li>
          {/* <li className="nav-li">
            <label className="switch">
              <input type="checkbox"></input>
              <span className="slider round"></span>
            </label>
          </li> */}
        </ul>
        <ul className="nav-mobile">
          {/* <li className="nav-li-mobile">
            <label className="switch">
              <input type="checkbox"></input>
              <span className="slider round"></span>
            </label>
          </li> */}
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
          <mobileNav>
            <Link
              className="mobile-page-tab"
              to="/"
              activeClassName="active-link-mobile"
            >
              home
            </Link>
            <Link
              className="mobile-page-tab"
              to="/projects"
              activeClassName="active-link-mobile"
            >
              projects
            </Link>
          </mobileNav>
          <ul className="mobile-nav-menu">
            <li>
              <a className="nav-link" href="mailto: bmerullo85@gmail.com">
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
