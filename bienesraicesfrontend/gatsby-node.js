const urlSlug = require("url-slug");
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async ({ actions, graphql, reporter }) => {
  const resultado = await graphql(`
    query {
      allStrapiPropiedades {
        nodes {
          nombre
          id
        }
      }
    }
  `);
  if (resultado.errors) {
    reporter.panic("No hubo resultado", resultado.errors);
  }

  // Si hay resultados generar los archivos estaticos

  const propiedades = resultado.data.allStrapiPropiedades.nodes;

  propiedades.forEach(propiedad => {
    actions.createPage({
      path: urlSlug(propiedad.nombre),
      component: require.resolve("./src/components/Propiedades.js"),
      context: {
        id: propiedad.id,
      },
    });
  });
};
