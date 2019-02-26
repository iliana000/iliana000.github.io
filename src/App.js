import React, { Component } from 'react';
import axios from 'axios';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import './App.css';
import logo from './logo.svg';

import Address from "./components/Address";
import Area from "./components/Area";
import Image from "./components/Image";
import Price from "./components/Price";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      houses: [],
      templates: [],
      templateN: 0
    }
  }
  componentDidMount() {

    axios.defaults.baseURL = 'http://demo4452328.mockable.io';
    axios.all([getHouses(), getTemplates()])
      .then(axios.spread((houses, templates) => {
        // Both requests are now complete
        this.setState( {
          houses: houses.data.data,
          templates: templates.data,
          templateN: 0
        } );
        console.dir(templates);
      }))
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });

    function getHouses() {
      return axios.get('/properties');
    }

    function getTemplates() {
      return axios.get('/templates');
    }


  }
  getComponent (name) {
    const components = {
      IMAGE: Image,
      ADDRESS: Address,
      PRICE: Price,
      AREA: Area
    };

    if (name) {
      return components[name];
    }
  }
  setTemplate(n) {
    this.setState ({
      templateN: n
    });
  }

  render() {

    if (!this.state.houses.length) {
      return (
        <img src={logo} className="loading" alt="Загрузка"/>
      )
    }
    let list = [];
    console.dir(this.state.templates);
    list = this.state.houses.map( (data) =>
      (
        <Grid item xs={6} key={data.id}>
          <div className="card">
            {
              this.state.templates[this.state.templateN].template.map(({component, field}) => {
                let Component = this.getComponent(component);
                return React.createElement(Component, {[field]: data[field]}, null)
              })
            }
            {/*<Address full_address={data.full_address} />*/}
            {/*<Image full_address={data.full_address} images={data.images} />*/}
            {/*<Price price={data.price} />*/}
            {/*<Area area={data.area} />*/}
          </div>
        </Grid>
      )
    );
    return (
      <Grid container spacing={32}>
        <Grid item xs={12}>
          <Grid container spacing={16}>
              {this.state.templates.map((object, i) => (
                <Grid item xs={1}>
                  <Button variant="contained" color="primary" onClick={(e) => this.setTemplate(i)}>{i+1}</Button>
                </Grid>
                )
              )}
          </Grid>
        </Grid>
        {list}
      </Grid>
    );
  }
}

export default App;
