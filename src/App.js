import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      houses: {
        data: []
      },
      templates: []
    }
  }
  componentDidMount() {

    let self = this;

    axios.defaults.baseURL = 'http://demo4452328.mockable.io';
    axios.get('/properties')
      .then(function (response) {
        // handle success
        self.setState( {houses: response.data} );
        console.dir(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });

  }

  render() {
    let list = [];
    console.dir(this.state.houses.data);
    list = this.state.houses.data.map( ({full_address,images,price,area,id}) =>
      (
        <Grid item xs={6} key={id}>
          <div className="card">
            <h4>{full_address}</h4>
            <img src={images[0]}/>
            <Grid container>
              <Grid item xs={6}>
                <h4>{price}</h4>
              </Grid>
              <Grid item xs={6}>
                <h4>{area}</h4>
              </Grid>
            </Grid>
          </div>
        </Grid>
      )
    );
    return (
      <div className="App">
        <header className="App-header">
          <Grid container spacing={32}>
            {list}
          </Grid>
          <Button variant="contained" color="primary">
            Cool !
          </Button>
        </header>

      </div>
    );
  }
}

export default App;
