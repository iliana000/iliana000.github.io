import React, { Component } from 'react';
import '../App.css';
import Grid from '@material-ui/core/Grid';


class Image extends Component {

  render() {
    const styles = {
      backgroundColor: 'rgba(255,255,255,.1',
      backgroundImage: `url(${this.props.images[0]})`
    };

    return (
      <div className="image" style={styles} title={"Фото "+this.props.full_address}> </div>
    );
  }
}

export default Image;
//
// <div className="image" style={{backgroundImage: "this.props.images[0]"}} title={"Фото "+this.props.full_address}> </div>