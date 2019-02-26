import React, { Component } from 'react';
import '../App.css';
import Grid from '@material-ui/core/Grid';

class Price extends Component {

  render() {
    return (
      <h2 className="price">$ {this.props.price}</h2>
    );
  }
}

export default Price;
