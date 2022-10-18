import React from "react"
import projectImg from "../assets/images/project-img.jpeg"
import emailImg from "../assets/images/email-img.png"
import linkedinImg from "../assets/images/linkedin-img.png"
import githubImg from "../assets/images/github-img.png"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <footer>
      <ul>
        <li className="footer-li">
          <Link to="/projects">
            <img className="footer-img" src={projectImg} alt="" />
            projects
          </Link>
        </li>
        <li className="footer-li">
          <a className="nav-link" href="#">
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
    </footer>
  )
}

export default Footer
