import React from 'react';
import styled from '@emotion/styled';
import Layout from '../components/layout/Layout';

const Heading = styled.h1`
    color: red;
`;

const NuevoProducto = () => {
    return (
        <div>
            <Layout>
                <Heading>NuevoProducto</Heading>
            </Layout>
        </div>
    );
};

export default NuevoProducto;
