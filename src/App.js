import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation.js';
import Logo from './components/Logo/Logo.js';
import Demographics from './components/Demographics/Demographics.js';
import ImageSlide from './components/ImageSlide/ImageSlide.js'
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
      imageUrl: 'https://clarifai.com/cms-assets/20180320222304/demographics-001.jpg',
    }
  }

  
  onInputChange = (event) => {
    console.log(event.target.value);
  }

  onUpload = () => {
    console.log('Click!');
  }

  onRouteChange = (route) => {
    this.setState({route: route, semiRoute: 'url'});
  }

  onSemiRouteChange = (semiRoute) => {
    this.setState({semiRoute: semiRoute});
  }

  onImageSelect = (img) => {
    this.setState({ imageUrl: img });
  }

  render(){
    return (
      <div className="App">
        <Particles className='particles' params={particleOptions} />
        <Logo />
        <Navigation onSemiRouteChange={this.onSemiRouteChange} onRouteChange={this.onRouteChange} route={this.state.route} />
        <Demographics imageUrl={this.state.imageUrl} />
        <ImageSlide onImageSelect={this.onImageSelect} />
        <ImageInput semiRoute={this.state.semiRoute} onInputChange={this.onInputChange} onUpload={this.onUpload}/>
        {/*<Home />*/}
        {/*<FaceRecognition />
              <Profile />*/}
      </div>
    );
  }
}

export default App;
