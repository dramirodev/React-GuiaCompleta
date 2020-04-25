import React, { useState, useEffect } from "react";
import { css } from "@emotion/core";
import usePropiedades from "../Hooks/usePropiedades";
import useFiltro from "../Hooks/useFiltro";
import PropiedadPreview from "./PropiedadPreview.js";
import listadoPropiedadesCss from "../css/listadoPropiedades.module.css";

const ListadoPropiedades = () => {
  const propiedadesBD = usePropiedades();
  const { categoria, FiltroUi } = useFiltro();
  const [propiedades] = useState(propiedadesBD);
  const [propiedadesFiltradas, setPropiedadesFiltradas] = useState([]);

  useEffect(() => {
    if (categoria) {
      const filtro = propiedades.filter(
        propiedad => propiedad.categoria.nombre === categoria
      );
      setPropiedadesFiltradas(filtro);
    } else {
      setPropiedadesFiltradas(propiedades);
    }
  }, [categoria, propiedades]);

  return (
    <>
      <h2
        css={css`
          margin-top: 5rem;
        `}
      >
        Listado Propiedades
      </h2>
      {<FiltroUi />}
      <ul className={listadoPropiedadesCss.propiedades}>
        {propiedadesFiltradas.map(propiedad => (
          <PropiedadPreview propiedad={propiedad} key={propiedad.id} />
        ))}
      </ul>
    </>
  );
};

export default ListadoPropiedades;
