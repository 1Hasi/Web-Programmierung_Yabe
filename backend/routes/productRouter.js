import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import Product from '../modules/productModel.js';
import { isAdmin, isAuth } from '../utils.js';

const productRouter = express.Router();

productRouter.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.send(products);
  })
);

productRouter.get(
  '/mine',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const products = await Product.find({ user: req.user._id,});
    res.send(products);
  })
);

productRouter.get(
  '/seed',
  expressAsyncHandler(async (req, res) => {
    // await Product.remove({});
    const createdProducts = await Product.insertMany(data.products);
    res.send({ createdProducts });
  })
);

productRouter.get(
  '/:id',
  expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.send(product);
    } else {
      res.status(404).send({ message: 'Product Not Found' });
    }
  })
);

productRouter.post(
  '/',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const product = new Product({
      name : req.body.name,
      bild : req.body.bild,
      preis : req.body.preis,
      beschreibung : req.body.beschreibung,
      user: req.user._id,
    });
    const createdProduct = await product.save();
    res.send({
      _id: createdProduct._id,
      name: createdProduct.name,
      bild: createdProduct.bild,
      preis: createdProduct.preis,
      beschreibung: createdProduct.beschreibung,
      user: req.user._id,
    }, 
      { message: 'Produkt angelegt', product: createdProduct });
  })
);
productRouter.put(
  '/:id',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    if (product) {
      product.name = req.body.name;
      product.bild = req.body.bild;
      product.preis = req.body.preis;
      product.beschreibung = req.body.beschreibung;
      const updatedProduct = await product.save();
      res.send({ message: 'Produkt wurde aktualisiert ', product: updatedProduct });
    } else {
      res.status(404).send({ message: 'Produkt nicht gefunden' });
    }
  })
);

productRouter.delete(
  '/:id',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      const deleteProduct = await product.remove();
      res.send({ message: 'Produkt gelöscht', product: deleteProduct });
    } else {
      res.status(404).send({ message: 'Produkt nicht gefunden' });
    }
  })
);

export default productRouter;