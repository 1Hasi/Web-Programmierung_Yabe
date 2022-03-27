import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { detailsOrder } from '../actions/orderActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function OrderScreen(props) {
  const params = useParams();
  const {id: orderId} = params;
  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(detailsOrder(orderId));
  }, [dispatch, orderId]);
  return loading ? (
    <LoadingBox></LoadingBox>
  ) : error ? (
    <MessageBox variant="danger">{error}</MessageBox>
  ) : (
    <div>
      <h1>Bestellnummer: {order._id}</h1>
      <div className="flexAngebot">
        <div className="col-6">
          <ul>
            <li>
              <div className="card card-body">
                <h2>Versandadresse:</h2>
                <p>
                  <strong>Name:</strong> {order.shippingAddress.vorname} {' '}
                                         {order.shippingAddress.nachname} <br />
                  <strong>Address: </strong> {order.shippingAddress.adresse}<br />
                  {order.shippingAddress.plz} {' '} {order.shippingAddress.stadt}<br />
                  {order.shippingAddress.land}
                </p>
                {order.isDelivered ? (
                  <MessageBox variant="success">
                    Geliefert am: {order.deliveredAt}
                  </MessageBox>
                ) : (
                  <MessageBox variant="danger">Nicht geliefert</MessageBox>
                )}
              </div>
            </li>
            <li>
              <div className="card card-body">
                <h2>Zahlungsmethode:</h2>
                <p>
                  {order.paymentMethod}
                </p>
                {order.isPaid ? (
                  <MessageBox variant="success">
                    Bezahlt am: {order.paidAt}
                  </MessageBox>
                ) : (
                  <MessageBox variant="danger">Nicht bezahlt</MessageBox>
                )}
              </div>
            </li>
            <li>
              <div className="card card-body">
                <h2>Lieferung:</h2>
                <ul>
                  {order.orderItems.map((item) => (
                    <li key={item.product}>
                       <div className="row">
                        <div className="col-12">
                          <img
                            src={item.bild}
                            alt={item.name}
                            className="small"
                          ></img>
                        </div>
                        <div className="min-30">
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                        </div>
                        <div>
                          {item.qty} x {item.preis}€ = {item.qty * item.preis}€
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-4">
          <div className="card card-body">
            <ul>
              <li>
                <h2>Bestellübersicht</h2>
              </li>
              <li>
                <div className="row">
                  <div>Bestellung</div>
                  <div>{order.itemsPrice.toFixed(2)}€</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Versand</div>
                  <div>{order.shippingPrice.toFixed(2)}€</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>MwSt</div>
                  <div>{order.taxPrice.toFixed(2)}€</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>
                    <strong> Gesamt </strong>
                  </div>
                  <div>
                    <strong>{order.totalPrice.toFixed(2)}€</strong>
                  </div>
                </div>
              </li>
            </ul>
          </div> 
        </div>
      </div>
    </div>
  );
}