import { Router } from "express";
import auth from "../middlewares/verify-token.js";
import verifyToken from '../middlewares/verify-token.js';

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

router.put('/productos/:id', auth, updateProducto)
router.patch('/productos/:id', auth, updatePatchProducto)

router.delete('/productos/:id', auth, deleteProducto)

export default router;