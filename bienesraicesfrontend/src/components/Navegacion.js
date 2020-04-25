import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  /* padding-bottom: 3rem; */

  @media (min-width: 768px) {
    padding-bottom: 0;
    flex-direction: row;
  }
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-weight: 700;
  font-family: "PT Sans" sans-serif;
  padding: 0.5rem 1rem;

  &.pagina-actual {
    border-bottom: 2px solid white;
  }
`;

const Navegacion = props => {
  return (
    <Nav>
      <NavLink to="/" activeClassName="pagina-actual">
        Inicio
      </NavLink>
      <NavLink to="/propiedades" activeClassName="pagina-actual">
        Propiedades
      </NavLink>
      <NavLink to="/nosotros" activeClassName="pagina-actual">
        Nosotros
      </NavLink>
    </Nav>
  );
};

export default Navegacion;
