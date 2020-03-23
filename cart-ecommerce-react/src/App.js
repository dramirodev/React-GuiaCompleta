import React, { useState } from 'react';
import TopMenu from './components/TopMenu/';
import useFetch from './utils/customHooks/useFetch';
import { URL_API_PRODUCTS } from './utils/constants';
import Products from './components/Products/Products';
import Loading from './components/Loading';
import { STORAGE_PRODUCT_CART } from './utils/constants';

function App() {
    const [productCart, setProductCart] = useState([]);
    const { data, loading } = useFetch(URL_API_PRODUCTS, null);

    const addProductCart = (idProducto, nameProducto) => {
        const idsProducts = productCart;
        idsProducts.push(idProducto);
        setProductCart(idsProducts);

        localStorage.setItem(STORAGE_PRODUCT_CART, idsProducts);
    };
    return (
        <>
            <TopMenu />
            {loading ? (
                <Loading />
            ) : (
                <Products products={data} addProductCart={addProductCart} />
            )}
        </>
    );
}

export default App;
