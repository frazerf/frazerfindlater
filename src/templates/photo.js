import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { GatsbyImage } from "gatsby-plugin-image"
import Seo from "../components/seo"

const Photo = ({ data }) => {
    return (
        <Layout>
            <Seo title={data.photo.date} />
            <section className="hero hero--slim">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-9">
                            <h2 className="mb-8">{data.photo.date}</h2>
                            <p className="large mb-0">{data.photo.location}</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="spacer-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-9">
                            <GatsbyImage image={data.photo.photo.gatsbyImageData} alt={'Picture of ' + data.photo.location} />
                        </div>
                        <div className="col-12 col-md-3 align-self-center">
                            <div className="content-meta ">
                                <p className="large mb-8 bold">{data.photo.title}</p>
                                <p className="small mb-0">{data.photo.cameraMeta}</p>
                                {data.photo.content !== null && (
                                    <div className="mt-20">
                                        <p>{data.photo.content.content}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Photo

export const pageQuery = graphql`
    query($slug: String!) {
        photo: contentfulPhotoPage(slug: {eq: $slug}) {
            slug
            date
            location
            cameraMeta
            title
            photo {
                gatsbyImageData
            }
            content {
                content
            }
        }
    }
`