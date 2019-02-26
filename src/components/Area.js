import React, { Component } from 'react';
import '../App.css';
import Grid from '@material-ui/core/Grid';

class Area extends Component {

  render() {
    return (
      this.props.area ? (
        <h5 className="area">
          <span className="label">Площадь: </span>
          {this.props.area}
          <span className="label"> м<sup>2</sup></span>
        </h5>
      ): ''
    );
  }
}

export default Area;
