import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';


  function App() {
    return (
      <BrowserRouter>
        <div className="grid-container">
          <header className="row">
            <div>
              <a className="brand" href="/">
                Y4B3
              </a>
            </div>
            <div>
              <a href="/meineprodukte">Meine Produkte</a>
              <a href="/warenkorb">Warenkorb</a>
              <a href="/login">Log In</a>
            </div>
          </header>
          <main>
            <Routes>
              <Route path="/product/:id" element={<ProductScreen />}></Route>
              <Route path="/" element={<HomeScreen />} exact></Route>
            </Routes>
          </main>
          <footer className="row center">Y4B3 4 EVER</footer>
        </div>
      </BrowserRouter>
    );
  }

export default App;
