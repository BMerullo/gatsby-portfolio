import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import SEO from "../components/SEO"

const Error = () => {
  return (
    <Layout>
      <SEO title="404" description="404 not found" />
      <main>
        <StaticImage
          src="../assets/images/tired-link.jpeg"
          alt="koholint island"
          className="hero-img"
          placeholder="blurred"
          layout="fullWidth"
        ></StaticImage>
        <div className="error-container">
          <div className="hero-text">
            <h1>404</h1>
            <h4>Page Not Found</h4>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Error
