import React from "react"
import projectImg from "../assets/images/project-img.jpeg"
import emailImg from "../assets/images/email-img.png"
import linkedinImg from "../assets/images/linkedin-img.png"
import githubImg from "../assets/images/github-img.png"
import homeImg from "../assets/images/home.jpeg"
import { Link } from "gatsby"

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer>
      <section className="footer-links">
        <ul>
          <li className="footer-li">
            <Link
              to="/"
              className="nav-link"
              activeClassName="active-footer-link"
            >
              <img className="footer-img" src={homeImg} alt="house" />
              home
            </Link>
          </li>
          <li className="footer-li">
            <Link
              to="/projects"
              className="nav-link"
              activeClassName="active-footer-link"
            >
              <img className="footer-img" src={projectImg} alt="folder" />
              projects
            </Link>
          </li>
          <li className="footer-li">
            <a className="nav-link" href="mailto: bmerullo85@gmail.com">
              <img className="footer-img" src={emailImg} alt="email" />
              email
            </a>
          </li>
        </ul>
        <ul>
          <li className="footer-li">
            <a
              className="nav-link footer-link-flex"
              href="https://github.com/BMerullo"
            >
              <img className="footer-img" src={githubImg} alt="github" />
              github
            </a>
          </li>

          <li className="footer-li">
            <a
              className="nav-link"
              href="https://www.linkedin.com/in/bobmerullo/"
            >
              <img className="footer-img" src={linkedinImg} alt="linkedin" />
              linkedin
            </a>
          </li>
        </ul>
      </section>
      <section>
        <p>
          <span>©{year} </span>Bob Merullo
        </p>
      </section>
    </footer>
  )
}

export default Footer
