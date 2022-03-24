import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { detailsProduct } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';


export default function ProductScreen(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const {id: productId} = params;
  const [qty, setQty] = useState(1);
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  useEffect(() => {
    dispatch(detailsProduct(productId));
  }, [dispatch, productId]);
  const addToCartHandler = () => {
    navigate(`/cart/${productId}?qty=${qty}`);
  };

  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div>
          <Link to="/angebote">← Zur Übersicht</Link>
          <div className="flexAngebot">
            <div className="col-4 abstand höhe mitte">
              <img
                className="large"
                src={product.bild}
                alt={product.name}
              ></img>
            </div>
            <div className="breite höhe mitte">
              <ul>
                <li>
                  <h1>{product.name}</h1>
                </li>
                <li>
                </li>
                <li><h3> Preis: {product.preis}€</h3></li>
                <li>
                  <h3>Beschreibung:</h3>
                  <p>{product.beschreibung}</p>
                </li>
              </ul>
            </div>
            <div className="breite höhe mitte">
              <div className="card card-body">
                <ul>
                  <li>
                    <div className="row">
                      <div>Preis</div>
                      <div className="price">{product.preis}€</div>
                    </div>
                  </li>
                  <li>
                        <div className="row">
                          <div>Anzahl</div>
                          <div>
                            <select
                              value={qty}
                              onChange={(e) => setQty(e.target.value)}
                            >
                              {[...Array(10).keys()].map(
                                (x) => (
                                  <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                  </option>
                                )
                              )}
                            </select>
                          </div>
                        </div>
                      </li>
                      <li>
                        <button
                          onClick={addToCartHandler}
                          className="primary block"
                        >
                          Zum Warenkorb
                        </button>
                      </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}