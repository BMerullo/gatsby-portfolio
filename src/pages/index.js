import React from "react"
import AboutModal from "../components/AboutModal"
import FeaturedProjects from "../components/FeaturedProjects"
import Layout from "../components/Layout"
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
              <div className="color-flex">
                <h2>Bob Merullo</h2>
                <h4>JavaScript Developer</h4>
                <div className="modal-container">
                  <AboutModal className="modal" />
                </div>
              </div>
            </div>
          </article>
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
