import * as React from "react"
import { graphql } from 'gatsby'
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

class SecondPage extends React.Component {
  render() {
    const projectsItems = this.props.data.allContentfulProjectPage.edges

    return (
      <Layout>
        <Seo title="Projects" />
        <section className="hero hero--simple">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-9">
                <p className="large mb-0">Projects</p>
                <h2>Case studies, side projects &amp; learnings.</h2>
                <p className="large">A selection of projects and side projects I've led  and been involved with over the years. Here you'll get a deeper understanding of the background and technology behind these projects.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="spacer-section">
          <div className="container">
            <div className="row">
            {projectsItems.map(({ node }) => {
              return (
                <div className="col-12 col-md-6" key={node.slug}>
                  <div className="img-square">
                    <Link to={'/projects/' + node.slug}>
                      <GatsbyImage image={node.coverImage.gatsbyImageData} alt={node.projectName + ' project image'} />
                    </Link>
                  </div>
                  <div className="content-meta">
                    <p className="large mb-8 bold"><Link to={'/projects/' + node.slug}>{node.projectName}</Link></p>
                  </div>
                </div>
                )
              })}
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default SecondPage

export const pageQuery = graphql`
  query allProjectsQuery {
    allContentfulProjectPage(sort: { fields: [createdAt], order: DESC }) {
      edges {
        node {
          projectName
          slug
          coverImage {
            gatsbyImageData
          }
        }
      }
    }
  }
`