import React from "react"
import AllProjects from "../components/AllProjects"
import Layout from "../components/Layout"

const projects = () => {
  // const newProjects = setupProjects(data.allContentfulProjects.nodes)

  return (
    <Layout>
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
