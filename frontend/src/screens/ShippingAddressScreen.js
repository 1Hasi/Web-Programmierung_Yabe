import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { saveShippingAddress } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';

export default function ShippingAddressScreen(props) {
    const navigate = useNavigate();
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  if (!userInfo) {
    navigate('/signin');
  }
  const [vorname, setVorname] = useState(shippingAddress.vorname);
  const [nachname, setNachname] = useState(shippingAddress.nachname);
  const [adresse, setAdresse] = useState(shippingAddress.adresse);
  const [plz, setPLZ] = useState(shippingAddress.plz);
  const [stadt, setStadt] = useState(shippingAddress.stadt);
  const [land, setLand] = useState(shippingAddress.land);
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveShippingAddress({ vorname, nachname, adresse, plz, stadt, land })
    );
    navigate('/payment');
  };
  return (
    <div>
      <CheckoutSteps step1 step2></CheckoutSteps>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Versandadresse</h1>
        </div>
        <div>
          <label htmlFor="vorname">Vorname</label>
          <input
            type="text"
            id="vorname"
            placeholder="Vorname eingeben"
            value={vorname}
            onChange={(e) => setVorname(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="nachname">Nachname</label>
          <input
            type="text"
            id="nachname"
            placeholder="Nachname eingeben"
            value={nachname}
            onChange={(e) => setNachname(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="adresse">Adresse</label>
          <input
            type="text"
            id="adresse"
            placeholder="Adresse eingeben"
            value={adresse}
            onChange={(e) => setAdresse(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="plz">Postleitzahl</label>
          <input
            type="number"
            id="plz"
            placeholder="Postleitzahl eingeben"
            value={plz}
            onChange={(e) => setPLZ(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="stadt">Stadt</label>
          <input
            type="text"
            id="stadt"
            placeholder="Stadt eingeben"
            value={stadt}
            onChange={(e) => setStadt(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="land">Land</label>
          <input
            type="text"
            id="land"
            placeholder="Land eingeben"
            value={land}
            onChange={(e) => setLand(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label />
          <button className="primary" type="submit">
            Weiter
          </button>
        </div>
      </form>
    </div>
  );
}