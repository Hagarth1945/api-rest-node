import { Router } from "express";

const router = Router();

import { getAllProductos, getProductoById, searchAllProductos } from "../controllers/productos.controller.js";

router.get('/productos', getAllProductos)
router.get('/productos/search', searchAllProductos)
router.get('/productos/:id', getProductoById)

export default router;