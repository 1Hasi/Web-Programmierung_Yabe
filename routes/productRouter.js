import express from 'express';
import Product from '../modules/productModel.js';
import data from '../data.js';

const productRouter = express.Router();

productRouter.get('/api/products', (req, res) => {
    res.send(data.products);
});


export default productRouter;