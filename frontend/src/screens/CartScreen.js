import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams, useLocation } from 'react-router-dom';
import { addToCart, removeFromCart } from '../actions/cartActions';
import MessageBox from '../components/MessageBox';

export default function CartScreen(props) {
  const navigate = useNavigate();
  const params = useParams();
  const { id: productId } = params;

  const { search } = useLocation();
  const qtyInUrl = new URLSearchParams(search).get('qty');
  const qty = qtyInUrl ? Number(qtyInUrl) : 1;

  const cart = useSelector((state) => state.cart);
  const { cartItems, error } = cart;

  const dispatch = useDispatch();
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) => {
    // delete action
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    navigate('/shipping');
  };

  return (
    <div className="flexAngebot">
      <div className="col-62">
        <h1>Warenkorb</h1>
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        {cartItems.length === 0 ? (
          <MessageBox className="Msg">
            <h2 className="h2W" >Nichts in Korb.</h2><Link to="/"><h2>Jetzt Bestellen.</h2></Link>
          </MessageBox>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.product}>
                <div className="row">
                  <div className="col-12">
                    <img
                      className="small"
                      src={item.bild}
                      alt={item.name}
                    ></img>
                  </div>
                  <div className="min-30">
                    <Link to={`/products/${item.product}`}>{item.name}</Link>
                  </div>
                  <div>
                    <select
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(10).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>{item.preis}€</div>
                  <div>
                    <button
                      type="button"
                      onClick={() => removeFromCartHandler(item.product)}
                    >
                      Entfernen
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="col-4">
        <div className="card card-body">
          <ul>
            <li>
              <h2>
                Gesamt ({cartItems.reduce((a, c) => a + c.qty, 0)} Produkte) : 
                {cartItems.reduce((a, c) => a + c.preis * c.qty, 0).toFixed(2)}€
              </h2>
            </li>
            <li>
              <button
                type="button"
                onClick={checkoutHandler}
                className="primary block"
                disabled={cartItems.length === 0}
              >
                Zur Kasse
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}