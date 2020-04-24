import app from 'firebase/app';
import firebaseConfig from './config';
import 'firebase/auth';

class Firebase {
    constructor() {
        if (!app.apps.length) {
            app.initializeApp(firebaseConfig);
        }
        this.auth = app.auth();
    }

    async registrar(nombre, email, password) {
        const nuevoUsuario = await this.auth.createUserWithEmailAndPassword(
            email,
            password,
        );

        return await nuevoUsuario.user.updateProfile({
            displayName: nombre,
        });
    }

    async iniciarSesion(email, password) {
        try {
            return this.auth.signInWithEmailAndPassword(email, password);
        } catch (error) {
            throw new Error(error.message);
        }
    }
    
    async cerrarSesion(){
        await this.auth.signOut();
    }
}


const firebase = new Firebase();

export default firebase;
