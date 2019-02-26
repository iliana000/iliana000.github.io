import React, { Component } from 'react';
import '../App.css';
import Grid from '@material-ui/core/Grid';

class Address extends Component {

  render() {
    return (
      <h5 className='address'>{this.props.full_address}</h5>
    );
  }
}

export default Address;
