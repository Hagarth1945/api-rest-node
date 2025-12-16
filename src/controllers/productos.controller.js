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

export const createProducto = async (req, res) => {
    const { nombre, precio, categoria } = req.body;

    const producto = await Model.createProducto({ nombre, precio, categoria });

    res.status(201).json(producto);
}

export const updateProducto = async (req, res) => {
    const { id } = req.params;
    const { nombre, precio, categoria } = req.body;

    if (!nombre || !precio || !categoria) {
        return res
        .status(422)
        .json({ error: 'Todos los campos son obligatorios' });
    }

    const updated = await Model.updateProducto(id, { nombre, precio, categoria });

    if (!updated) {
        res.status(404).json({ error: 'Producto no encontrado' });
    }
    res.json(updated);

}

export const updatePatchProducto = async (req, res) => {
    const { id } = req.params;

    const data = {}
    if (req.body.nombre !== undefined) data.nombre = req.body.nombre;
    if (req.body.precio !== undefined) data.precio = req.body.precio;
    if (req.body.categoria !== undefined) data.categoria = req.body.categoria;

    if (Object.keys(data).length === 0) {
        return res
        .status(422)
        .json({ error: 'No se proporcionaron campos para actualizar.' });
    }

    const updated = await Model.updatePatchProducto(id, data);

    if (!updated) {
        res.status(404).json({ error: 'Producto no encontrado' });
    }
    res.json(updated);

}

export const deleteProducto = async (req, res) => {
    const { id } = req.params;

    const deleted = await Model.deleteProducto(id);

    if (!deleted) {
        res.status(404).json({ error: 'Producto no encontrado' });
    }
    res.status(204).send();
}