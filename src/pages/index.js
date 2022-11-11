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
            My name is Bob Merullo, I am a web developer based in Denver,
            Colorado. This is a collection of my personal projects and freelance
            work.
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
