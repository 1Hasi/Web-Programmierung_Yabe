import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { signout } from './actions/userActions';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import SigninScreen from './screens/SigninScreen';
import RegisterScreen from './screens/RegisterScreen';

  function App() {

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
              <Link to="/meineprodukte">Meine Produkte</Link>
              <Link to="/warenkorb">Warenkorb</Link>
              {userInfo ? (
              <div className="dropdown">
                <Link to="#">
                  {userInfo.name} <i className="fa fa-caret-down"></i>{' '}
                </Link>
                <ul className="dropdown-content">
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
            </div>
          </header>
          <main>
            <Routes>
              <Route path="/product/:id" element={<ProductScreen/>}></Route>
              <Route path="/signin" element={<SigninScreen/>}></Route>
              <Route path="/register" element={<RegisterScreen/>}></Route>
              <Route path="/" element={<HomeScreen/>} exact></Route>
            </Routes>
          </main>
          <footer className="row center">Y4B3 4 EVER</footer>
        </div>
      </BrowserRouter>
    );
  }

export default App;
