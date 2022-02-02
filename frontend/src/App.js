import React from 'react';

class App extends React.Component{
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
  }


render(){
  return (
    <div className="App">
      <header> 
      </header>
      <p>{this.state.apiResponse}</p>
    </div>
   );
  }
}

export default App;