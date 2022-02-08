import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
 
    //name: String,
    //completed: Boolean,

  //  name: {
  //  type: String,
  //  required: [true, 'must provide name'],
  //  trim: true,
  //  maxlength: [20, 'name can not be more than 20 characters'],
  //  },
  //  completed: {
  //  type: Boolean,
  //  default: false,
  //  },

  //Produkte: ProduktID, UserID produkt_ersteller (Ersteller), Bezeichnung produkt_bezeichnung, produkt_mindestwert, Beschreibung produkt_beschreibung, Bild produkt_bild
   
  name: {type: String, required: true},

  bild: {type: String, required: true },

  startpreis: {type: Number, required: true},

  beschreibung: {type: String, required: true},

  kategorie: {type: String, required: true},

  rating: {type: Number, required: true},

});

const Product = mongoose.model('Product', productSchema);
export default Product;