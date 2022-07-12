const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
    return graphql(
      `
        {
          allContentfulProjectPage(sort: { fields: [createdAt], order: DESC }) {
            edges {
              node {
                slug
              }
              next {
                projectName
                slug
              }
              previous {
                projectName
                slug
              }
            }
          }
          allContentfulPhotoPage {
            edges {
              node {
                slug
              }
            }
          }
        }
      `
    ).then((result) => {
      if (result.errors) {
        console.log("Error with contenful data", result.errors)
      }

      const projectTemplate = path.resolve('./src/templates/project.js')

      result.data.allContentfulProjectPage.edges.forEach(project => {
        createPage({
          path: `/projects/${project.node.slug}/`,
          component: projectTemplate,
          context: {
            slug: project.node.slug,
            next: project.next,
            previous: project.previous
          }
        })
      })

      const photoTemplate = path.resolve('./src/templates/photo.js')

      result.data.allContentfulPhotoPage.edges.forEach(photo => {
        createPage({
          path: `/photos/${photo.node.slug}/`,
          component: photoTemplate,
          context: {
            slug: photo.node.slug
          }
        })
      })

    }).catch(error => console.log("Error with contentful data", error))
}
