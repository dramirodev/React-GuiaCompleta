import React from "react";
import styled from "@emotion/styled";
import Image from "gatsby-image";
import Layout from "./Layout";
import { graphql } from "gatsby";
import ListadoPropiedades from "./ListaadoPropiedades";

export const query = graphql`
  query($id: String!) {
    allStrapiPaginas(filter: { id: { eq: $id } }) {
      nodes {
        contenido
        nombre
        imagen {
          sharp: childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;

const Contenido = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 95%;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    column-gap: 5rem;
  }
`;

const Propiedades = ({ data }) => {
  const { nombre, contenido, imagen } = data.allStrapiPaginas.nodes[0];

  return (
    <Layout>
      <main className="contenedor">
        <Contenido>
          <h1>{nombre}</h1>
          <Image fluid={imagen.sharp.fluid} />
          <p>{contenido}</p>
        </Contenido>
      </main>
      {nombre === "Nuestras Propiedades" && <ListadoPropiedades />}
    </Layout>
  );
};

export default Propiedades;
