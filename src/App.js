import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation.js';
import Logo from './components/Logo/Logo.js';
import ImageInput from'./components/ImageInput/ImageInput.js';
import Home from './components/Home/Home.js';
import Particles from 'react-particles-js';
import './App.css';
import 'tachyons';

const particleOptions = {
  particles: {
    number: {
      value: 80,
      density : {
        enable: true,
        value_area: 800
      }
    }
  },
  line_linked: {
    enable: true,
    opacity: 0.02
  }
}


class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
      route: 'addImage',
      semiRoute: 'url',

    }
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  }

  onUpload = () => {
    console.log('Click!');
  }

  onRouteChange = (route) => {
    console.log(route);
    this.setState({route: route, semiRoute: 'url'});
  }

  onSemiRouteChange = (semiRoute) => {
    console.log(semiRoute);
    this.setState({semiRoute: semiRoute});
  }

  render(){
    return (
      <div className="App">
        <Particles className='particles' params={particleOptions} />
        
        <Logo />
        <Navigation onSemiRouteChange={this.onSemiRouteChange} onRouteChange={this.onRouteChange} route={this.state.route} />
        <ImageInput semiRoute={this.state.semiRoute} onInputChange={this.onInputChange} onUpload={this.onUpload}/>
        {/*<Home />*/}
        {/*<FaceRecognition />
              <Profile />*/}
      </div>
    );
  }
}

export default App;
