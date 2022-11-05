import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import codeImg from "../assets/images/code.ico"
import linkImg from "../assets/images/link.png"

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
          const linkPic = linkImg

          return (
            <div className="featured-img-container">
              <GatsbyImage
                image={siteImage.gatsbyImageData}
                alt={title}
                className="featured-img"
              />
              <div className="project-info">
                <h2>{title}</h2>
                <p>{description}</p>
                <div className="tool-box-container">
                  {tools.map((tool, index) => {
                    return <div className="tool-box">{tool}</div>
                  })}
                </div>
                <div className="project-flex">
                  {code ? (
                    <a href={code} className="info-link">
                      <img src={codePic} alt="code" className="code-img" />
                      Code
                    </a>
                  ) : null}
                  {url ? (
                    <a href={url} className="info-link">
                      <img src={linkPic} alt="link" className="code-img" />
                      Visit
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </article>
  )
}

export default FeaturedProjects
