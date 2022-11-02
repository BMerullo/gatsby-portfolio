import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import codeImg from "../assets/images/code.webp"

const query = graphql`
  query {
    allContentfulProjects(
      sort: { fields: title, order: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        siteImage {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
        description {
          description
        }
        tools {
          tools
        }
        url
        code
      }
    }
  }
`

const FeaturedProjects = () => {
  const data = useStaticQuery(query)
  const items = data.allContentfulProjects.nodes
  return (
    <article className="feature-project-container">
      <h2>Featured</h2>
      <div className="featured-projects">
        {items.map((item, index) => {
          const {
            id,
            title,
            siteImage,
            description: { description },
            tools: { tools },
            url,
            code,
          } = item
          const codePic = codeImg
          return (
            <div className="featured-img-container">
              <GatsbyImage
                image={siteImage.gatsbyImageData}
                alt={title}
                className="featured-img"
              />
              <a href={url}>
                <div className="project-info">
                  <h2>{title}</h2>
                  <p>{description}</p>
                  <div className="tool-box-container">
                    {tools.map((tool, index) => {
                      return <div className="tool-box">{tool}</div>
                    })}
                  </div>
                  {code ? (
                    <a href={code}>
                      <img src={codePic} alt="code" className="code-img" />
                    </a>
                  ) : null}
                </div>
              </a>
            </div>
          )
        })}
      </div>
    </article>
  )
}

export default FeaturedProjects
