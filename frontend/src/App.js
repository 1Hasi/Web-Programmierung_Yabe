import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { signout } from './actions/userActions';
import AdminRoute from './components/AdminRoute';
import PrivateRoute from './components/PrivateRoute';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import ProductListScreen from './screens/ProductListScreen';
import ProductListMineScreen from './screens/ProductListMineScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import ProductAdminEditScreen from './screens/ProductAdminEditScreen';
import ProductCreateScreen from './screens/ProductCreateScreen';
import SigninScreen from './screens/SigninScreen';
import RegisterScreen from './screens/RegisterScreen';
import CartScreen from './screens/CartScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import ProfileScreen from './screens/ProfileScreen';
import UserListScreen from './screens/UserListScreen';
import UserEditScreen from './screens/UserEditScreen';


  function App() {

    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const dispatch = useDispatch();
    const signoutHandler = () => {
      dispatch(signout());
    };

    return (
      <BrowserRouter>
        <div className="grid-container">
          <header className="row">
            <div>
              <Link className="brand" to="/">
                Y4B3
              </Link>
            </div>
          <div>
            
            <Link to="/">Home</Link>
              

             
              
                <Link to="/cart">
              Warenkorb 
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
                </Link>
               
             
              {userInfo ? (
                             
              <div className="dropdown">
                <Link to="#">
                  {userInfo.name} <i className="fa fa-caret-down"></i>{' '}
                </Link>
                <ul className="dropdown-content">
                <li>
                    <Link to="/profile">Mein Profil</Link>
                  </li>
                  <li>
                     <Link to="/productanlegen">Produkt Anlegen</Link>
                  </li>
                  <li>
                    <Link to="/products/mine">Meine Produkte</Link>
                  </li>
                  <li>
                    <Link to="/orderhistory">Meine Bestellungen</Link>
                  </li>
                  <li>
                    <Link to="#signout" onClick={signoutHandler}>
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </div>
             
            ) : (
              <Link to="/signin">Sign In</Link>
            )}
            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <Link to="#admin">
                  Admin <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/productlist">Alle Produkte</Link>
                  </li>
                  <li>
                    <Link to="/userlist">Benutzerübersicht</Link>
                  </li>
                </ul>
              </div>
            )}
            </div>
          </header>
          <main>
            <Routes>
              <Route path="/products/:id" element={<ProductScreen/>} exact></Route>
              <Route path="/signin" element={<SigninScreen/>}></Route>
              <Route path="/register" element={<RegisterScreen/>}></Route>
              

              <Route path="/cart" 
              element={
              <PrivateRoute>
                <CartScreen />
              </PrivateRoute>
              }></Route>

              <Route path="/cart/:id" element={
              <PrivateRoute>
                  <CartScreen />
               </PrivateRoute>
              }></Route>

              <Route path="/shipping" element={
                <PrivateRoute>
                  <ShippingAddressScreen/>
               </PrivateRoute>
              }></Route>

              <Route path="/payment" element={
              <PrivateRoute>
                 <PaymentMethodScreen/>
               </PrivateRoute>
              }></Route>

              <Route path="/placeorder" element={
              <PrivateRoute>
                <PlaceOrderScreen/>
               </PrivateRoute>
              }></Route>


              <Route path="/order/:id" element={
                <PrivateRoute>
                  <OrderScreen/>
                </PrivateRoute>
              }></Route>


              <Route path="/orderhistory" element={
                <PrivateRoute>
                  <OrderHistoryScreen/>
                </PrivateRoute>
              }></Route>

              <Route path="/profile" element={
                <PrivateRoute>
                  <ProfileScreen/>
                </PrivateRoute>
              }></Route>
             
             <Route path="/products/mine" element={
                <PrivateRoute>
                  <ProductListMineScreen/>
                </PrivateRoute>
              }></Route>

              <Route
              path="/productanlegen"
              element={
                <PrivateRoute>
                  <ProductCreateScreen />
                </PrivateRoute>
              }></Route>

              <Route path="/products/:id/edit" 
                element={
              <PrivateRoute> 
                <ProductEditScreen/>
              </PrivateRoute> 
                }></Route>

              <Route
              path="/productlist"
              element={
                <AdminRoute>
                  <ProductListScreen />
                </AdminRoute>
              }></Route>

              <Route
              path="/products/:id/adminedit"
              element={
                <AdminRoute>
                  <ProductAdminEditScreen />
                </AdminRoute>
              }></Route>

              <Route
              path="/userlist"
              element={
                <AdminRoute>
                  <UserListScreen />
                </AdminRoute>
              }></Route>

              <Route
              path="/user/:id/edit"
              element={
                <AdminRoute>
                  <UserEditScreen />
                </AdminRoute>
              }></Route>

              <Route path="/" element={<HomeScreen/>} exact></Route>
            </Routes>
          </main>
          <footer className="row center">										
		      	<div className="foot">
			      	  <h4>Ihr habt Fragen? Schreibt uns!</h4>
				      <div className="socialmedia left">
                <a href="https://www.instagram.com/kater_kiste/" target="_blank" rel="noreferrer">
                  <img src="img/icons/instagram.png" alt="Intagram"/>
                </a>

                <a href="https://www.facebook.com/kater.kiste/" target="_blank" rel="noreferrer">
                  <img src="img/icons/facebook.png" alt="Facebook"/>
                </a>

					      <a href="https://twitter.com/katerkiste/" target="_blank" rel="noreferrer">
							    <img src="img/icons/twitter.png" alt="Twitter"/>
					    	</a>
				      </div>
			      </div>
			      <div className="foot">
              <Link to="/kontakt"><hkk>Kontakt</hkk></Link>
                <p> &#169; Katerkiste GmbH <br></br>
                    Katzenallee 69 <br></br>
                    89522 Heidenheim <br></br>
                    Tel.: 07321 9642069 <br></br>
                </p>
            </div>
            <div className="foot">
                <h4>Sicher und bequem zahlen</h4>

				      <div className="pay left">
                  <a href="https://paypal.com/" target="_blank" rel="noreferrer">
                    <img src="img/icons/paypal.png" alt="PayPal"></img>
                  </a>
                  <a href="https://visa.de/" target="_blank" rel="noreferrer">
                    <img src="img/icons/visa.png" alt="Visa"></img>
                  </a>
                  <a href="https://mastercard.de/" target="_blank" rel="noreferrer">
                    <img src="img/icons/mastercard.png" alt="MasterCard"></img>
                  </a>
              </div>
		        </div>
			      <div className="foot">
				        <a href="#totop">
					        <button className="totop_icon" type="button" title="Zum Anfang der Seite">
					          	&uArr;
					        </button>
			        	</a>
		        	</div>
	       
          
          </footer>
        </div>
      </BrowserRouter>
    );
  }

export default App;
