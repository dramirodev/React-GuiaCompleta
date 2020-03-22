import React from 'react';
import TopMenu from './components/TopMenu/';
import useFetch from './utils/customHooks/useFetch';
import { URL_API_PRODUCTS } from './utils/constants';
import Products from './components/Products/Products';
import Loading from './components/Loading';

function App() {
    const { data, loading } = useFetch(URL_API_PRODUCTS, null);
    return (
        <>
            <TopMenu />
            {loading ? <Loading /> : <Products products={data} />}
        </>
    );
}

export default App;
