import styled from '@emotion/styled';

export const Contenedor = styled.h1`
    max-width: 600px;
    margin: 0 auto;
`;

export const ContenedorFormulario = styled.div`
    text-align: center;
    background-color: #fff;
    padding: 3rem;
`;

export const Campo = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`;

export const Label = styled.label`
    flex: 0 0 100px;
`;

export const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    -webkit-appearance: none;
`;

export const InputRadio = styled.input`
    margin: 0 1rem;
`;

export const Boton = styled.button`
    background-color: #00838f;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: #fff;
    text-transform: uppercase;
    font-weight: none;
    border: none;
    transition: background-color 0.3s ease;
    margin-top: 2rem;

    &:hover {
        cursor: pointer;
        background-color: #26c6da;
    }
`;

export const Error = styled.div`
    background-color: red;
    color: white;
    padding: 1rem;
    text-align: center;
    margin-bottom: 2rem;
`;

export const ContenedorHeader = styled.header`
    background-color: #26c6da;
    padding: 10px;
    font-weight: bold;
    color: #fff;
`;

export const TextoHeader = styled.h1`
    font-size: 2rem;
    margin: 0;
    font-family: 'Slabo 27px', serif;
    text-align: center;
`;

export const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838f;
    color: #fff;
    margin-top: 1rem;
`;

export const ContenedorResultado = styled.div`
    text-align: center;
    padding: 0.5rem;
    border: 1px solid #26c6da;
    background-color: rgb(127, 224, 237);
    margin-top: 1rem;
    position: relative;
`;

export const TextoResultado = styled.p`
    color: #00838f;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;
`;
