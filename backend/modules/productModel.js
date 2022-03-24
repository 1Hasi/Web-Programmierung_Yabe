import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
   
  name: {type: String, required: true},

  bild: {type: String, required: true },

  preis: {type: Number, required: true},

  beschreibung: {type: String, required: true},

});

const Product = mongoose.model('Product', productSchema);
export default Product;