import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "@emotion/styled";

const Formulario = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  border: 1px solid #e1e1e1;
  padding: 1rem;
`;

const Select = styled.select`
  flex: 1;
  padding: 1rem;
  appearance: none;
  border: none;
  font-family: "Lato", sans-serif;
  max-width: 1200px;
`;

const useFiltro = () => {
  const [categoria, setCategoria] = useState("");

  const resultado = useStaticQuery(graphql`
    query {
      allStrapiCategorias(sort: { fields: nombre }) {
        nodes {
          nombre
          id
        }
      }
    }
  `);
  const categorias = resultado.allStrapiCategorias.nodes;
  const FiltroUi = () => (
    <Formulario>
      <Select onChange={e => setCategoria(e.target.value)} value={categoria}>
        <option value="">-- Filtrar --</option>
        {categorias.map(option => (
          <option value={option.nombre} key={option.id}>
            {option.nombre}
          </option>
        ))}
      </Select>
    </Formulario>
  );
  return {
      FiltroUi,
      categoria
  };
};

export default useFiltro;
