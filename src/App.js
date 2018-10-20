import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  };

  setStateHandle = () => {
    var item = "Set state";
    var myArray = [];
    myArray.push(item);
    this.setState({ data: myArray });
  };
  render() {
    return (
      <div>
        <button onClick={this.setStateHandle}>SET STATE</button>
        <h2>{this.state.data}</h2>
      </div>
    );
  }
}

export default App;