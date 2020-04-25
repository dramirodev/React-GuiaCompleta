import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const usePropiedades = () => {
  const datos = useStaticQuery(graphql`
    {
      allStrapiPropiedades {
        nodes {
          nombre
          id
          habitaciones
          descripcion
          estacionamiento
          precio
          wc
          categoria {
            nombre
          }
          agente {
            email
            nombre
            telefono
          }
          imagen {
            sharp: childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `);

  return datos.allStrapiPropiedades.nodes;
};

export default usePropiedades;
