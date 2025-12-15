import * as Model from "../models/productos.model.js";

export const getAllProductos = async (req, res) => {
    const { categoria } = req.query;

    const productos = await Model.getAllProductos();

    if (categoria) {
        const productosFiltrados = productos.filter((item) => item.categoria.toLowerCase().includes(categoria.toLowerCase())
        );
        res.json(productosFiltrados);
        return;
    }
    res.json(productos);
}

export const searchAllProductos = (req, res) => {
    const { nombre } = req.query;
    if (!nombre) {
        return res.status(400).json ({ error: 'No se proporcionó el parámetro "nombre"' });
    }
    const productos = Model.getAllProductos();

    const productosFiltrados = productos.filter((item) => item.nombre.toLowerCase().includes(nombre.toLowerCase()));
    if (productosFiltrados.length == 0) {
        return res.status(404).json ({ error: 'No se encontraron productos' });
    }
    res.json(productosFiltrados);
}

export const getProductoById = async (req, res) => {
        const id = req.params.id;

    const producto = await Model.getProductoById(id);
    
    if (!producto) {
        res.status(404).json({ error: 'Producto no encontrado' });
    }
    res.json(producto);
}