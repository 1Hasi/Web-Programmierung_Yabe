import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { detailsProduct, createProduct } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { PRODUCT_CREATE_RESET } from '../constants/productConstants';
import DatePicker from 'react-datepicker';

export default function ProductCreateScreen(props) {
    const navigate = useNavigate();
    const params = useParams();
    const { id: productId } = params;
    const [name, setName] = useState('');
    const [bild, setBild] = useState('');
    const [startpreis, setStartPreis] = useState('');
    const [beschreibung, setBeschreibung] = useState('');
    const [startedAt, setStartedAt] = useState(new Date());
    const [endDate, setendDate] = useState(new Date());
    const [minErhöhung, setMinErhöhung] = useState('');

const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const productCreate = useSelector((state) => state.productCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    product: createdProduct,
  } = productCreate;

  const dispatch = useDispatch();
  useEffect(() => {
    if (successCreate) {
      dispatch({ type: PRODUCT_CREATE_RESET });
      navigate('/');
    }  
    }, 
    [createdProduct, navigate, product, dispatch, productId, successCreate]
  );
  const createHandler = (e) => {
    
    endDate.setUTCMinutes(endDate.getUTCMinutes() + 15);
    e.preventDefault();
    // endDate.setUTCHours(endDate.getUTCHours() + 2);
    // startedAt.setUTCHours(startedAt.getUTCHours() + 2);
    dispatch(
      createProduct(name, bild, startpreis, beschreibung, startedAt, endDate, minErhöhung)
    );
  };

  const [loadingUpload, setLoadingUpload] = useState(false);
  const [errorUpload, setErrorUpload] = useState('');

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append('bild', file);
    setLoadingUpload(true);
    try {
      const { data } = await Axios.post('/api/uploads', bodyFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      setBild(data);
      setLoadingUpload(false);
    } catch (error) {
      setErrorUpload(error.message);
      setLoadingUpload(false);
    }
  };

  return (
    <div>
      <form className="form" onSubmit={createHandler}>
        <div>
          <h1>Produkt Anlegen </h1>
        </div>
        {loadingCreate && <LoadingBox></LoadingBox>}
        {errorCreate && <MessageBox variant="danger">{errorCreate}</MessageBox>}
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <>
            <div>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Name eingeben"
                
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="startpreis">Startpreis</label>
              <input
                id="startpreis"
                type="number"
                placeholder="Startpreis eingeben"
                value={startpreis}
                step='0.01'
                
                onChange={(e) => setStartPreis(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="minErhöhung">Mindest Erhöung</label>
              <input
                id="minErhöhung"
                type="number"
                placeholder="mindest Erhöhungsbetrag angeben"
                value={minErhöhung}
                step='0.01'
                
                onChange={(e) => setMinErhöhung(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="bild">Bild</label>
              <input
                id="bild"
                type="text"
                placeholder="Bild hochladen"
                
                onChange={(e) => setBild(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="imageFile">Bilddatei</label>
              <input
                type="file"
                id="imageFile"
                label="Bild auswählen"
                onChange={uploadFileHandler}
              ></input>
              {loadingUpload && <LoadingBox></LoadingBox>}
              {errorUpload && (
                <MessageBox variant="danger">{errorUpload}</MessageBox>
              )}
            </div>
            <div>
              <label htmlFor="beschreibung">Beschreibung</label>
              <textarea
                id="beschreibung"
                rows="3"
                type="text"
                placeholder="Produktbeschreibung"
                
                onChange={(e) => setBeschreibung(e.target.value)}
              ></textarea>
            </div>
            <div className='input-container'>
              <label htmlFor="createdAt">Auktionsbeginn</label>
              <DatePicker
              selected={startedAt}
              onChange={date => setStartedAt(date)}
              minDate={new Date()}
              value={startedAt}
              dateFormat='d MMMM yyyy h:m'
              required
            />
            </div>
            <div>
              <label></label>
              <button className="primary" type="submit">
                Anlegen
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );

};
