import React from 'react';

import logo from '../../logo.svg';
import api from '../../api';

class HomePage extends React.Component {

  state = {
    response: ''
  };

  componentDidMount() {
    api
      .foo()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  render() {
    const { response } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">{response}</p>
      </div>
    );
  }
}

export default HomePage;
