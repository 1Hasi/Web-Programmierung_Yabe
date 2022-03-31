import React from 'react';
import { Link } from 'react-router-dom';


export default function Product(props) {
  const { product } = props;
  var endDate = new Date(product.endDate);
  var endDateFormatted = endDate.getHours() + ":" + endDate.getMinutes() + " Uhr am " + endDate.getDate().toString() + "." + endDate.getUTCMonth().toString() + "." + endDate.getFullYear().toString();
  var startDate = new Date(product.startedAt);
  console.log(startDate);
  console.log(endDate);
  if(endDate > Date.now()) {
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
          <p>Auktionsende: {endDateFormatted}</p>
        </div>
      </div>
    );
  } else {
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
          <p>Auktionsende: {endDateFormatted}</p>
          <p>AUKTION BEENDET.</p>
        </div>
      </div>
    );
  }
}