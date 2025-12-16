import { Router } from "express";
import auth from "../middlewares/verify-token.js";

const router = Router();

import { 
    getAllProductos, 
    getProductoById, 
    searchAllProductos,
    createProducto,
    updateProducto,
    updatePatchProducto,
    deleteProducto
} from "../controllers/productos.controller.js";

router.get('/productos', getAllProductos)
router.get('/productos/search', searchAllProductos)
router.get('/productos/:id', getProductoById)

router.post('/productos', auth, createProducto)

router.put('/productos/:id', updateProducto)
router.patch('/productos/:id', updatePatchProducto)

router.delete('/productos/:id', deleteProducto)

export default router;