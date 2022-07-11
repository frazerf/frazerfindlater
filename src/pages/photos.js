import * as React from "react"
import { graphql } from 'gatsby'
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

class SecondPage extends React.Component {
  render() {
    const photoItem = this.props.data.allContentfulPhotoPage.edges

    return (
      <Layout>
        <Seo title="Photos" />
        <section className="hero hero--simple">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-9">
                <p className="large mb-0">Moments</p>
                <h2>A snapshot of life</h2>
                <p className="large">Sometimes words but more often photos. Here you’ll get a small glimpse into the exciting and mundane moments of my life.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="spacer-section">
          <div className="container">
            <div className="row">
            {photoItem.map(({ node }) => {
              return (
                <div className="col-12 col-md-3" key={node.slug}>
                  <div className="img-rec">
                    <Link to={'/photos/' + node.slug}>
                      <GatsbyImage image={node.photo.gatsbyImageData} alt={'Picture of ' + node.location} />
                    </Link>
                  </div>
                  <div className="content-meta">
                    <p className="large mb-8 bold">
                      <Link to={'/photos/' + node.slug}>{node.date}</Link>
                    </p>
                    <p className="small">{node.location}</p>
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
  query allPhotoQuery {
    allContentfulPhotoPage(sort: { fields: [createdAt], order: DESC }) {
      edges {
        node {
          slug
          date
          location
          photo {
            gatsbyImageData
          }
        }
      }
    }
  }
`