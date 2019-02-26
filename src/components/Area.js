import React, { Component } from 'react';
import '../App.css';
import Grid from '@material-ui/core/Grid';

class Area extends Component {

  render() {
    return (
      this.props.area ? <h5>Площадь: {this.props.area}</h5> : ''
    );
  }
}

export default Area;
