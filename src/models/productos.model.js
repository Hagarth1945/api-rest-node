import { db } from "./firebase.js";

import { collection, getDocs, doc, getDoc } from "firebase/firestore";

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