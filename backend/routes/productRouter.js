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
      startpreis: req.body.startpreis,
      beschreibung : req.body.beschreibung,
      user: req.user._id,
      createdAt: req.body.createdAt,
      endDate: req.body.endDate,
      winner: req.body.winner,
      minErhöhung: req.body.minErhöhung,
      active: req.body.active,
    });
    const createdProduct = await product.save();
    res
    .status(201)
    .send({ message: 'Produkt angelegt', product: createdProduct });
  })
);

productRouter.post(
  '/:id/gebot',
  isAuth,
  expressAsyncHandler(async (req, res) =>{
    const productId = req.params.id;
    const product = await Product.findById(productId); 
    if (product) {
      const gebot = {
        user: req.user._id,
        gebot: req.body.gebot 
      };
      if 
      (req.body.gebot >= product.preis + product.minErhöhung ) {
      product.gebote.push(gebot) ;
      product.preis = req.body.gebot;
    } else {res.send({message: `Das Gebot muss mindestens ${product.minErhöhung}€ höher sein als der momentane Preis`})
  }
      
      const createdGebot = await product.save();
        res
          .status(201)
          .send({ message: 'Gebot erstellt', gebot: createdGebot });


    } else {
        res
          .status(404)
          .send({message: 'Produkt nicht gefunden'})
    }


   /* if (gebot.gebot % 1 !== 0 && !!gebot.gebot) {
      return next(
        new AppError(
          'Money fields are required and must only have two decimal places',
          400
        )
      );
    }*/

  } )
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
      product.startpreis = req.body.startpreis;
      product.beschreibung = req.body.beschreibung;
      product.minErhöhung = req.body.minErhöhung;
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