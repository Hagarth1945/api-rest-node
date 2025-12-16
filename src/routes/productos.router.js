import { Router } from "express";

const router = Router();

import { 
    getAllProductos, 
    getProductoById, 
    searchAllProductos,
    createProducto
} from "../controllers/productos.controller.js";

router.get('/productos', getAllProductos)
router.get('/productos/search', searchAllProductos)
router.get('/productos/:id', getProductoById)

router.post('/productos', createProducto)

export default router;