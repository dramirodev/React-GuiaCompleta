import React, { useState, useEffect, useCallback } from 'react';
import TopMenu from './components/TopMenu/';
import useFetch from './utils/customHooks/useFetch';
import { URL_API_PRODUCTS } from './utils/constants';
import Products from './components/Products/Products';
import Loading from './components/Loading';
import { STORAGE_PRODUCT_CART } from './utils/constants';
import { ToastContainer, toast } from 'react-toastify';

function App() {
    const [productCart, setProductCart] = useState([]);
    const [productos, , loading] = useFetch(URL_API_PRODUCTS, null);

    const getProductsCart = useCallback(() => {
        const idProducts = localStorage.getItem(STORAGE_PRODUCT_CART);
        setProductCart(idProducts ? idProducts.split(',') : []);
    }, []);

    const addProductCart = (idProducto, nameProducto) => {
        const idsProducts = productCart;
        idsProducts.push(idProducto);
        setProductCart(idsProducts);
        localStorage.setItem(STORAGE_PRODUCT_CART, idsProducts);
        getProductsCart();
        toast.success(`${nameProducto} añadido al carrito correctamente`);
    };
    useEffect(() => {
        getProductsCart();
    }, [getProductsCart]);
    return (
        <>
            <TopMenu
                productCart={productCart}
                getProductsCart={getProductsCart}
                productos={productos}
            />
            {loading ? (
                <Loading />
            ) : (
                <>
                    <Products
                        products={productos}
                        addProductCart={addProductCart}
                    />
                    <ToastContainer
                        position='bottom-right'
                        autoClose={2000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnVisibilityChange
                        draggable
                        pauseOnHover
                    />
                </>
            )}
        </>
    );
}

export default App;
