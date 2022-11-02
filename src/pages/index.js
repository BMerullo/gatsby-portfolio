import React from "react"
import FeaturedProjects from "../components/FeaturedProjects"
import Layout from "../components/Layout"
import computer from "../assets/images/computer.png"
import SEO from "../components/SEO"

export default function Home() {
  return (
    <Layout>
      <SEO title="Home" description="This is the home page" />
      <main id="home-page">
        <section className="about-txt">
          <h1>Hello there,</h1>
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </h3>
          <div className="color-box-container">
            <div className="color-box">
              <img src={computer} alt="computer" className="computer-img" />
            </div>
          </div>
        </section>
        <aside className="featured-scroll">
          <FeaturedProjects />
        </aside>
      </main>
    </Layout>
  )
}
