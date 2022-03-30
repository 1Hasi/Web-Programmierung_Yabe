import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
   
  name: {type: String, required: true},

  bild: {type: String, required: true },

  preis: {type: Number},
  
  startpreis: {type: Number, required: true, default: 0},
  
  beschreibung: {type: String, required: true, },

  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },

  createdAt: { type: Date, default: Date.now() },

  //startedAt: {},

  endDate: { type: Date, required: true, default: Date.now() + 900000  },

  winner: { type: mongoose.Schema.ObjectId, ref: 'User' },

  gebote: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
      },
      gebot: {
        type: Number,
        required: true
      },
      createdAt: {
        type: Date,
        default: Date.now()
      }
    }
  ],

  minErhöhung: { type: Number, required: true, default: 5 },
  
  active: { type: Boolean, default: true },


});

productSchema.pre('save', function(next) {
  if (!this.preis) {
    this.preis = this.startpreis;
  }
  next();
});

const Product = mongoose.model('Product', productSchema);
export default Product;