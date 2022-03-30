import React from 'react';
import { Link } from 'react-router-dom';


export default function Product(props) {
  const { product } = props;
  return (
    <div key={product._id} className="card">
      <Link to={`/products/${product._id}`}>
        <img className="medium" src={product.bild} alt={product.name} />
      </Link>
      <div className="card-bodyAng">
      <Link to={`/products/${product._id}`}>
          <h2>{product.name}</h2>
       </Link>
        <div className="price">{product.preis}€</div>
        <div className= "endDate">{product.endDate} </div>
      </div>
    </div>
  );
}