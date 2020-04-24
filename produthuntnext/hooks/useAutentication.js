import React, { useEffect, useState } from 'react';
import firebase from '../firebase';

function useAutentication() {
    const [usuario, setUsuario] = useState(null);

    useEffect(() => {
        const unsubscribe = firebase.auth.onAuthStateChanged((usuario) => {
            if (usuario) {
                setUsuario(usuario);
            } else {
                setUsuario(null);
            }
        });

        return () => unsubscribe();
    }, []);

    return usuario;
}

export default useAutentication;
