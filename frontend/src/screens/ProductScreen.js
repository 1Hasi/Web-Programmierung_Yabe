import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { detailsProduct, bieten } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { PRODUCT_BIETEN_RESET } from '../constants/productConstants';


export default function ProductScreen(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const {id: productId} = params;
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const [gebot, setGebot] = useState('');

  const productBieten = useSelector((state) => state.productBieten);
  const {
    loading: loadingBieten,
    error: errorBieten,
    success: successBieten,
  } = productBieten;

  useEffect(() => {
    if (successBieten) {
      dispatch({ type: PRODUCT_BIETEN_RESET });
      navigate('/');
    }
    dispatch(detailsProduct(productId));
 }, 
    [dispatch, productId, successBieten ]);

    const gebotHandler = (e) => {
      e.preventDefault();
        if (userInfo) {
          if (gebot >= product.preis + product.minErhöhung) {
          dispatch(
            bieten(productId, {gebot, userInfo}),
          );
          } else {
            alert(`Das Gebot muss mindestens ${product.minErhöhung}€ höher sein als der momentane Preis.`)
          }
        } else {alert('Sie müssen sich anmelden, um zu bieten.')}
    };


  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div>
          <Link to="/">← Zur Übersicht</Link>
          <div className="row top">
            <div className="col-13">
              <img
                className="small"
                src={product.bild}
                alt={product.name}
              ></img>
            </div>
            <div className="col-13">
              <ul>
                <li>
                  <h1>{product.name}</h1>
                </li>
                <li>
                </li>
                <li><h3> Startreis: {product.startpreis}€</h3></li>
                <li><h3> Aktueller Preis: {product.preis}€</h3></li>
                <li>
                  <h3>Beschreibung:</h3>
                  <p>{product.beschreibung}</p>
                </li>
                <li>
                  <h3>erstellt von:</h3>
                  <p>{product.user}</p>
                </li>
              </ul>
            </div>
            
            <div className="col-13">
              <div className="card card-body" >
              <form  onSubmit={gebotHandler}>
                <ul>
                  <li>
                    <div className="row">
                      <div>Aktueller Preis</div>
                      <div className="price">{product.preis}€</div>
                    </div>
                  </li>
                  <li>
                        <div className="row">
                          <div>Mindestgebot</div>
                          <div>
                          <input
                            type='number'
                            placeholder={`${(
                              (product.preis + product.minErhöhung)
                              )}€`}
                            name='gebot'
                            value={gebot}
                            step='0.01'
                            onChange={e => setGebot(e.target.value)}
                            disabled={!product.active}
                            required
                          />
                          
                          </div>
                        </div>
                      </li>
                      <li>
                      <button className="primary block" type="submit">
                        Bieten
                      </button>
                      </li>
                </ul>
                </form>
              </div>
            </div>
            
          </div>
        </div>
      )}
    </div>
  );
}