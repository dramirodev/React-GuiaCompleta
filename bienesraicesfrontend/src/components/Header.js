import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

import { css } from "@emotion/core";
import Navegacion from "./Navegacion";

const Header = () => {
  // Consultar el logo.svg

  const { logo } = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.svg" }) {
        publicURL
      }
    }
  `);
  return (
    <header
      css={css`
        background-color: #0d283b;
        padding: 1rem;
        max-width: 120rem;
        margin: 0 auto;
        text-align: center;

        @media (min-width: 768px) {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
      `}
    >
      <Link to="/">
        <img src={logo.publicURL} alt="Logotipo bienes raices" />
      </Link>
      <Navegacion />
    </header>
  );
};

export default Header;
