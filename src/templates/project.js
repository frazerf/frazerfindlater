import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import { GatsbyImage } from "gatsby-plugin-image"
import Seo from "../components/seo"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"

const Project = ({ pageContext, data }) => {
    const { next, previous } = pageContext
    const Bold = ({ children }) => <span className="bold">{children}</span>
    const Text = ({ children }) => <p>{children}</p>
    const options = {
    renderMark: {
        [MARKS.BOLD]: text => <Bold>{text}</Bold>,
    },
    renderNode: {
        [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
        [BLOCKS.EMBEDDED_ASSET]: node => {
        return (
            <>
            <h2>Embedded Asset</h2>
            <pre>
                <code>{JSON.stringify(node, null, 2)}</code>
            </pre>
            </>
        )
        },
    },
}
   
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
                                    {node.projectMetaContent !== null && (
                                        <p className="small">{node.projectMetaContent.projectMetaContent}</p>
                                    )}
                                    {node.linkText !== null && (
                                        <p className="small"><a rel="noreferrer" target="_blank" href={node.url}>{node.linkText} →</a></p>
                                    )}
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

            {data.project.aboutTheProject !== null && (
            <section className="spacer-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-8 offset-md-2 t-center">
                            <h3>Project background</h3>
                            {renderRichText(data.project.aboutTheProject, options)}
                        </div>
                    </div>
                </div>
            </section>
            )}

            {data.project.aboutTheTech !== null && (
                <section className="spacer-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <GatsbyImage image={data.project.secondaryImage.gatsbyImageData} alt={data.project.projectName + ' secondary project image'} />
                            </div>
                            <div className="col-12 col-md-5 offset-md-1 align-self-center sm-spacer">
                                <h3>Technology stack</h3>
                                {renderRichText(data.project.aboutTheTech, options)}
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {data.project.aboutTheBuilds !== null && (
                <section className="spacer-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-8">
                                <h3>About the build</h3>
                                {renderRichText(data.project.aboutTheBuilds, options)}
                            </div>
                        </div>
                    </div>
                </section>
            )}

            

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
            projectOpeningText {
                projectOpeningText
            }
            primaryImage {
                gatsbyImageData
            }
            secondaryImage {
                gatsbyImageData
            }
            tertiaryImage {
                gatsbyImageData
            }
            aboutTheTech {
                raw
            }
            aboutTheProject {
                raw
            }
            aboutTheBuilds {
                raw
            }
            projectMeta {
                id
                projectMetaTitle
                linkText
                url
                projectMetaContent {
                    projectMetaContent
                }
            }
        }
    }
`