import React, { Component } from 'react';
import '../App.css';
import Grid from '@material-ui/core/Grid';

class Price extends Component {

  render() {
    return (
      <h3>$ {this.props.price}</h3>
    );
  }
}

export default Price;
