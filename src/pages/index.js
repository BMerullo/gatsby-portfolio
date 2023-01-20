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
            Hello, My name is Bob Merullo and I am a Web Developer based in
            Denver Colorado. My most recent professional career has been as a
            freelance developer. As a web developer I have a passion for
            bringing ideas to life through intuitive and esthetically pleasing
            applications. Throughout my professional career I have valued
            achieving goals and completing projects in collaboration with the
            people around me. My creative interests and collaborative nature
            extends beyond Web Development in many ways, most of all in my
            interest in music as a guitar and piano player. This site is a
            collection of some of my professional works and personal projects.
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
