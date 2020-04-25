import React, { useState, useEffect } from "react";
import { css } from "@emotion/core";
import usePropiedades from "../Hooks/usePropiedades";
import PropiedadPreview from "./PropiedadPreview.js";
import listadoPropiedadesCss from "../css/listadoPropiedades.module.css";



const ListadoPropiedades = () => {
  const propiedadesBD = usePropiedades();
  const [propiedades, setPropiedades] = useState([]);

  useEffect(() => {
    setPropiedades(propiedadesBD);
  }, []);

  return (
    <>
      <h2
        css={css`
          margin-top: 5rem;
        `}
      >
        Listado Propiedades
      </h2>

      <ul className={listadoPropiedadesCss.propiedades}>
        {propiedades.map(propiedad => (
          <PropiedadPreview propiedad={propiedad} key={propiedad.id} />
        ))}
      </ul>
    </>
  );
};

export default ListadoPropiedades;
