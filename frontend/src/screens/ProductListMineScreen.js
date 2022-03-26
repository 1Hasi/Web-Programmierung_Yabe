import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams, useNavigate, useLocation } from 'react-router-dom';
import {
  deleteProduct,
  listProductsMine,
} from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import {
  PRODUCT_DELETE_RESET,
} from '../constants/productConstants';

export default function ProductListScreen(props) {
  const navigate = useNavigate();
    
  const productMineList = useSelector((state) => state.productMineList);
  const { loading, error, products } = productMineList;
  const productDelete = useSelector((state) => state.productDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = productDelete;
  const dispatch = useDispatch();
  useEffect(() => {
    if (successDelete) {
      dispatch({ type: PRODUCT_DELETE_RESET });
    }
    dispatch(
      listProductsMine()
    );
  }, [
    dispatch,
    navigate,
    successDelete,
  ]);

  const deleteHandler = (product) => {
    if (window.confirm('Sind Sie sicher, dass Sie das Produkt löschen möchten?')) {
      dispatch(deleteProduct(product._id));
    }
  };

  return (
    <div> 
      <div className="row">
        <h1 className="h1Admin">Produkte</h1>

      </div>
      {loadingDelete && <LoadingBox></LoadingBox>}
      {errorDelete && <MessageBox variant="danger">{errorDelete}</MessageBox>}

   
    
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        
        
        <>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Bild</th>
                <th>Preis</th>
                <th>Beschreibung</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id}>
                  <td>{product._id}</td>
                  <td>{product.name}</td>
                  <td>{product.bild}</td>
                  <td>{product.preis}€</td>
                  <td>{product.beschreibung}</td>
                  <td>
                    <button
                      type="button"
                      className="small"
                      onClick={() => navigate(`/products/${product._id}/edit`)}
                    >
                      Bearbeiten
                    </button>
                    <button
                      type="button"
                      className="small"
                      onClick={() => deleteHandler(product)}
                    >
                      Löschen
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}