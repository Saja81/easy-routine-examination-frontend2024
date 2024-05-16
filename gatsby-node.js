const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define the template for individual projects
  // const projectTemplate = path.resolve("./src/templates/ProjectPosts.js")

  // Define the template for individual menyv1 posts
  // const menyTemplateV1 = path.resolve("./src/templates/MenyPostsv1.js")

  // Define the template for individual menyv2 posts
  // const menyTemplateV2 = path.resolve("./src/templates/MenyPostsv2.js")

  // // Define the template for individual menyv2 posts
  // const menyTemplateV3 = path.resolve("./src/templates/MenyPostsv3.js")

  // // Define the template for individual menyv2 posts
  // const menyTemplateV4 = path.resolve("./src/templates/MenyPostsv4.js")

  // Fetch data from Contentful for projects
  // const projectsResult = await graphql(`
  //   {
  //     allContentfulProjekt {
  //       nodes {
  //         titel
  //         slug
  //         kategori
  //       }
  //     }
  //   }
  // `)

  // if (projectsResult.errors) {
  //   reporter.panicOnBuild(
  //     `There was an error loading your Contentful projects`,
  //     projectsResult.errors
  //   )
  //   return
  // }

  // const projects = projectsResult.data.allContentfulProjekt.nodes

  // if (projects.length > 0) {
  //   projects.forEach(project => {
  //     createPage({
  //       path: `/${project.slug}/`,
  //       component: projectTemplate,
  //       context: {
  //         slug: project.slug,
  //       },
  //     })

  //     createPage({
  //       path: `/${project.kategori.toLowerCase()}/`, // Lägg till kategori i sökvägen
  //       component: projectTemplate,
  //       context: {
  //         slug: project.slug,
  //         kategori: project.kategori, // Skicka med kategorin som en del av context
  //       },
  //     })
  //   })
  // }

  // Fetch data from Contentful for menyv1 posts
  const menyResultV1 = await graphql(`
    {
      allContentfulMenyV1 {
        nodes {
          dag
          slug
        }
      }
    }
  `)

  if (menyResultV1.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Contentful menyv1 posts`,
      menyResultV1.errors
    )
    return
  }

  // const menyPostsV1 = menyResultV1.data.allContentfulMenyV1.nodes

  // if (menyPostsV1.length > 0) {
  //   menyPostsV1.forEach(post => {
  //     createPage({
  //       path: `/menyv1/${post.slug}/`,
  //       component: menyTemplateV1,
  //       context: {
  //         slug: post.slug,
  //       },
  //     })
  //   })
  // }

  // Fetch data from Contentful for menyv2 posts
  const menyResultV2 = await graphql(`
    {
      allContentfulMenyV2 {
        nodes {
          dag
          slug
        }
      }
    }
  `)

  if (menyResultV2.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Contentful menyv2 posts`,
      menyResultV2.errors
    )
    return
  }

  // const menyPostsV2 = menyResultV2.data.allContentfulMenyV2.nodes

  // if (menyPostsV2.length > 0) {
  //   menyPostsV2.forEach(post => {
  //     createPage({
  //       path: `/menyv2/${post.slug}/`,
  //       component: menyTemplateV2,
  //       context: {
  //         slug: post.slug,
  //       },
  //     })
  //   })
  // }

  // Fetch data from Contentful for menyv3 posts
  const menyResultV3 = await graphql(`
    {
      allContentfulMenyV3 {
        nodes {
          dag
          slug
        }
      }
    }
  `)

  if (menyResultV3.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Contentful menyv3 posts`,
      menyResultV3.errors
    )
    return
  }

  // const menyPostsV3 = menyResultV3.data.allContentfulMenyV3.nodes

  // if (menyPostsV3.length > 0) {
  //   menyPostsV3.forEach(post => {
  //     createPage({
  //       path: `/menyv3/${post.slug}/`,
  //       component: menyTemplateV3,
  //       context: {
  //         slug: post.slug,
  //       },
  //     })
  //   })
  // }

  // Fetch data from Contentful for menyv3 posts
  const menyResultV4 = await graphql(`
    {
      allContentfulMenyV4 {
        nodes {
          dag
          slug
        }
      }
    }
  `)

  if (menyResultV4.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Contentful menyv4 posts`,
      menyResultV4.errors
    )
    return
  }

  // const menyPostsV4 = menyResultV4.data.allContentfulMenyV4.nodes

  // if (menyPostsV4.length > 0) {
  //   menyPostsV4.forEach(post => {
  //     createPage({
  //       path: `/menyv4/${post.slug}/`,
  //       component: menyTemplateV4,
  //       context: {
  //         slug: post.slug,
  //       },
  //     })
  //   })
  // }
}
