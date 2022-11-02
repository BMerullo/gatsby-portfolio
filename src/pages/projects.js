import React from "react"
import AllProjects from "../components/AllProjects"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const projects = () => {
  // const newProjects = setupProjects(data.allContentfulProjects.nodes)

  return (
    <Layout>
      <SEO title="Projects" description="This is the project page" />
      <main id="projects">
        <h2>Projects</h2>
        <section className="project-container">
          <AllProjects />
        </section>
      </main>
    </Layout>
  )
}

export default projects
