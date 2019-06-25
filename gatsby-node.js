const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({ node, getNode, basePath: "pages" });
    createNodeField({
      node,
      name: "slug",
      value: slug
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              type
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) throw result.errors;

    const { edges } = result.data.allMarkdownRemark;
    const work = edges.filter(({ node }) => node.frontmatter.type.trim() === "work");
    const event = edges.filter(({ node }) => node.frontmatter.type.trim() === "event");

    work.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve("./src/templates/work.jsx"),
        context: {
          slug: node.fields.slug
        }
      });
    });

    event.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve("./src/templates/event.jsx"),
        context: {
          slug: node.fields.slug
        }
      });
    });
  });
};
