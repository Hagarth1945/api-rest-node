import { db } from "./firebase.js";

import { 
    collection, 
    getDocs, 
    doc, 
    getDoc, 
    addDoc, 
    deleteDoc,
    setDoc,
    query,
    where
} from "firebase/firestore";

const productosCollection = collection(db, "productos");

export const getAllProductos = async () => {
    try {
        const snapshot = await getDocs(productosCollection);
        return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
        console.error(error);
    }
}

export const getProductoById = async (id) => {
    try {
        const productRef = doc(productosCollection, id);
        const snapshot = await getDoc(productRef);
        return snapshot.exists() ? { id: snapshot.id, ...snapshot.data() } : null;
    } catch (error) {
        console.error(error);
    }
}

export const getProductoByCategory = async (category) => {
    try {
        const q = query(
            productosCollection, 
            where("categoria", "array-contains", category));
        
        const snapshot = await getDocs(q);
        return snapshot.docs.map((doc) => ({ 
            id: doc.id, ...doc.data() }));
    } catch (error) {
        console.error(error);
    }
}

export const createProducto = async (data) => {
    try {
const docRef = await addDoc(productosCollection, data);
return { id: docRef.id, ...data };
    } catch (error) {
        console.error(error);
    }
}

export const updateProducto = async (id, productData) => {
    try {
        const productRef = doc(productosCollection, id);
        const snapshot = await getDoc(productRef);

        if (!snapshot.exists()) {
            return false;
        }

        await setDoc(productRef, productData);
        return { id, ...productData };

    } catch (error) {
        console.error(error);
    }
}

export const updatePatchProducto = async (id, productData) => {
    try {
        const productRef = doc(productosCollection, id);
        const snapshot = await getDoc(productRef);

        if (!snapshot.exists()) {
            return false;
        }

        await setDoc(productRef, productData, { merge: true });
        return { id, ...productData };

    } catch (error) {
        console.error(error);
    }
}

export const deleteProducto = async (id) => {
    try {
        const productRef = doc(productosCollection, id);
        const snapshot = await getDoc(productRef);

        if (!snapshot.exists()) {
            return false;
        }

        await deleteDoc(productRef);
        return true;
    } catch (error) {
        console.error(error);
    }
}   