import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import { GatsbyImage } from "gatsby-plugin-image"
import Seo from "../components/seo"

const Project = ({ pageContext, data }) => {
    const { next, previous } = pageContext
    return (
        <Layout>
            <Seo title={data.project.projectName} />
            <section className="hero hero--simple">
                <div className="container">
                    <div className="row">
                    <div className="col-12 col-md-9">
                        <p className="large mb-0">{data.project.parentCompany}</p>
                        <h2>{data.project.projectName}</h2>
                        <p className="large">{data.project.projectOpeningText.projectOpeningText}</p>
                    </div>
                    </div>
                </div>
            </section>

            {data.project.projectMeta !== null && (
                <section className="spacer-section--small">
                    <div className="container">
                        <div className="row">
                            {data.project.projectMeta.map(node => (
                                <div className="col-12 col-md-2" key={node.id}>
                                    <p className="large mb-8 bold">{node.projectMetaTitle}</p>
                                    <p className="small">{node.projectMetaContent.projectMetaContent}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <section className="spacer-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <GatsbyImage image={data.project.primaryImage.gatsbyImageData} alt={data.project.projectName + ' primary project image'} />
                        </div>
                    </div>
                </div>
            </section>

            <section className="spacer-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-8 offset-md-2 t-center">
                            <h3>Project background</h3>
                            <p>{data.project.projectBackground.projectBackground}</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="spacer-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <GatsbyImage image={data.project.secondaryImage.gatsbyImageData} alt={data.project.projectName + ' secondary project image'} />
                        </div>
                        <div className="col-12 col-md-5 offset-md-1 align-self-center sm-spacer">
                            <h3>Technology stack</h3>
                            {data.project.technologyStack.technologyStack}
                        </div>
                    </div>
                </div>
            </section>

            <section className="spacer-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-8">
                            <h3>About the build</h3>
                            {data.project.aboutTheBuild.aboutTheBuild}
                        </div>
                    </div>
                </div>
            </section>

            <section className="spacer-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <GatsbyImage image={data.project.tertiaryImage.gatsbyImageData} alt={data.project.projectName + ' secondary project image'} />
                        </div>
                    </div>
                </div>
            </section>

            <section className="spacer-section--small">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="project-nextprev"></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="spacer-section">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            {previous !== null && (
                                <div className="section-next">
                                    <p className="large mb-0">Previous Project</p>
                                    <h2><Link to={'/projects/' + previous.slug}>{previous.projectName}</Link></h2>
                                </div>
                            )}
                        </div>
                        <div className="col-6">
                            {next !== null && (
                                <div className="section-next t-right">
                                    <p className="large mb-0">Next Project</p>
                                    <h2><Link to={'/projects/' + next.slug}>{next.projectName}</Link></h2>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Project

export const pageQuery = graphql`
    query($slug: String!) {
        project: contentfulProjectPage(slug: {eq: $slug}) {
            slug
            parentCompany
            projectName
            slug
            aboutTheBuild {
            aboutTheBuild
            }
            projectOpeningText {
            projectOpeningText
            }
            primaryImage {
            gatsbyImageData
            }
            projectBackground {
            projectBackground
            }
            secondaryImage {
            gatsbyImageData
            }
            technologyStack {
            technologyStack
            }
            tertiaryImage {
            gatsbyImageData
            }
            projectMeta {
                id
                projectMetaTitle
                projectMetaContent {
                    projectMetaContent
                }
            }
        }
    }
`