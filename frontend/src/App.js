import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

/*class App extends React.Component{
  constructor(props){
    super(props);
    this.state={apiResponse: ""}
  }

  callAPI(){
    fetch("http://localhost:5000/meineprodukte/produktanlegen")
      .then(res => res.text())
      .then(res => this.setState({apiResponse: res}));
  }

  componentWillMount(){
    this.callAPI();
  }*/


  function App() {
    return (
      <BrowserRouter>
        <div className="grid-container">
          <header className="row">
            <div>
              <a className="brand" href="/">
                amazona
              </a>
            </div>
            <div>
              <a href="/cart">Cart</a>
              <a href="/signin">Sign In</a>
            </div>
          </header>
          <main>
            <Routes>
              <Route path="/product/:id" element={<ProductScreen />}></Route>
              <Route path="/" element={<HomeScreen />} exact></Route>
            </Routes>
          </main>
          <footer className="row center">All right reserved</footer>
        </div>
      </BrowserRouter>
    );
  }

/* <div className="App">
      <header> 
      </header>
      <p>{this.state.apiResponse}</p>
    </div>*/

export default App;
