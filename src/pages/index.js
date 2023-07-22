import React from "react"
import FeaturedProjects from "../components/FeaturedProjects"
import Layout from "../components/Layout"
import computer from "../assets/images/computer.png"
import SEO from "../components/SEO"
import SkillsSection from "../components/SkillsSection"

export default function Home() {
  return (
    <Layout>
      <SEO title="Home" description="This is the home page" />
      <main id="home-page">
        <section className="about-txt">
          <article className="color-box-container">
            <div className="color-box">
              <img src={computer} alt="computer" className="computer-img" />
            </div>
          </article>
          <h2 className="skill-title">Skills</h2>
          <article className="skills">
            <SkillsSection />
          </article>
        </section>
        <aside className="featured-scroll">
          <FeaturedProjects />
        </aside>
      </main>
    </Layout>
  )
}
