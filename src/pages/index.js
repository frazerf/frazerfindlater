import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { GatsbyImage } from "gatsby-plugin-image"
import Helmet from 'react-helmet'

class IndexPage extends React.Component {
  render() {
    const photoItem = this.props.data.allContentfulPhotoPage.edges
    const homepageMeta = this.props.data.allContentfulHomepage.nodes
    const projectItem = this.props.data.allContentfulProjectPage.edges
    const totalItem = this.props.data.allContentfulProjectPage

    return (
      <Layout>
        <Seo title="Welcome" />
        <Helmet>
          <body className="home" />
        </Helmet>
          <section className="hero hero--home t-light spacer-section">
            <article className="heading">
              <div className="container">
                <div className="row">
                    <div className="col-12">
                      <div className="subline d-flex align-items-center justify-content-center t-center">
                        <h1>{homepageMeta[0].homeHeroBannerText}</h1>
                      </div>
                    </div>
                </div>
              </div>
            </article>
            
            {photoItem.map(({ node }) => {
              return (
                <article key={node.slug}>
                  <Link to={'/photos/' + node.slug}></Link>
                  <div className="img">
                    <GatsbyImage image={node.photo.gatsbyImageData} alt={'Picture of ' + node.location} />
                    <div className="overlay"></div>
                  </div>
                  <div className="content">
                    <p className="mb-4">{node.date}</p>
                    <p className="large bold mb-0">{node.location}</p>
                  </div>
                </article>
              )
            })}
          </section>

          <section className="spacer-section">
            <div className="container">
              <div className="row">
                <div className="col-12 col-md-5 align-self-center">
                    {homepageMeta[0].aboutByline !== null && (
                      <p className="large mb-4">{homepageMeta[0].aboutByline}</p>
                    )}
                    <h2>{homepageMeta[0].aboutHeading}</h2>
                    <p className="large">{homepageMeta[0].aboutContent.aboutContent}</p>
                  </div>
                <div className="col-12 offset-md-1 col-md-6">
                  <div className="img-square no-transition sm-spacer">
                    <GatsbyImage image={homepageMeta[0].aboutImage.gatsbyImageData} alt={projectItem[0].node.projectName + ' project image'} />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="spacer-section bg-project">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="d-flex justify-content-between align-items-center">
                    <h2>Projects</h2>
                    <p><Link className="t-underline" to="/projects/">View {totalItem.totalCount - 3} more projects</Link></p>
                  </div>
                </div>
              </div>
              <div className="row project-dashboard">
                <div className="col-12 col-md-6">
                  <div className="img-square">
                    <Link to={'/projects/' + projectItem[0].node.slug}>
                      <GatsbyImage image={projectItem[0].node.coverImage.gatsbyImageData} alt={projectItem[0].node.projectName + ' project image'} />
                    </Link>
                  </div>
                  <div className="content-meta">
                    <h3><Link to={'/projects/' + projectItem[1].node.slug}>{projectItem[0].node.projectName}</Link></h3>
                  </div>
                </div>
                <div className="col-12 col-md-3 align-self-end">
                  <div className="img-square">
                    <Link to={'/projects/' + projectItem[1].node.slug}>
                      <GatsbyImage image={projectItem[1].node.coverImage.gatsbyImageData} alt={projectItem[1].node.projectName + ' project image'} />
                    </Link>
                  </div>
                  <div className="content-meta">
                    <h3><Link to={'/projects/' + projectItem[1].node.slug}>{projectItem[1].node.projectName}</Link></h3>
                  </div>
                </div>
                <div className="col-12 col-md-3 align-self-end">
                  <div className="img-square">
                    <Link to={'/projects/' + projectItem[2].node.slug}>
                      <GatsbyImage image={projectItem[2].node.coverImage.gatsbyImageData} alt={projectItem[2].node.projectName + ' project image'} />
                    </Link>
                  </div>
                  <div className="content-meta">
                    <h3><Link to={'/projects/' + projectItem[2].node.slug}>{projectItem[2].node.projectName}</Link></h3>
                  </div>
                </div>
              </div>
            </div>
          </section>
      </Layout>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query pageQuery {
    allContentfulPhotoPage(sort: { fields: [createdAt], order: DESC }, limit: 3) {
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
    allContentfulHomepage {
      nodes {
        aboutByline
        aboutHeading
        homeHeroBannerText
        aboutImage {
          gatsbyImageData
        }
        aboutContent {
          aboutContent
        }
      }
    }
    allContentfulProjectPage(sort: { fields: [createdAt], order: DESC }, limit: 3) {
      totalCount
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
