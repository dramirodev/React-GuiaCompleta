import React from 'react';
import TopMenu from './components/TopMenu/';
import useFetch from './utils/customHooks/useFetch';
import { URL_API_PRODUCTS } from './utils/constants';

function App() {
    const { data, loading } = useFetch(URL_API_PRODUCTS, null);

    return <TopMenu />;
}

export default App;
