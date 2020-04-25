import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import styled from "@emotion/styled";

const ListadoIconos = styled.ul`
  display: flex;
  justify-content: space-between;
  flex: 1;
  max-width: 500px;
  margin: 3rem auto 0 auto;

  li {
    display: flex;
    img {
      margin-right: 1rem;
    }
  }
`;

const Iconos = ({ wc, estacionamiento, habitaciones }) => {
  const { iconos } = useStaticQuery(graphql`
    {
      iconos: allFile(filter: { relativeDirectory: { eq: "iconos" } }) {
        edges {
          node {
            id
            publicURL
          }
        }
      }
    }
  `);

  console.log(iconos);
  const imagenesIcons = iconos.edges;

  return (
    <ListadoIconos>
      <li>
        <img src={imagenesIcons[2].node.publicURL} alt="icono wc" />
        {wc}
      </li>
      <li>
        <img
          src={imagenesIcons[1].node.publicURL}
          alt="icono estacionamiento"
        />
        {estacionamiento}
      </li>
      <li>
        <img src={imagenesIcons[0].node.publicURL} alt="icono habitaciones" />
        {habitaciones}
      </li>
    </ListadoIconos>
  );
};

export default Iconos;
