import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation.js';
import Logo from './components/Logo/Logo.js';
import Demographics from './components/Demographics/Demographics.js';
import ImageSlide from './components/ImageSlide/ImageSlide.js'
import ImageInput from'./components/ImageInput/ImageInput.js';
import Home from './components/Home/Home.js';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import './App.css';
import 'tachyons';

const app = new Clarifai.App({
 apiKey: 'Re-Enter'
});

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
      demograph: {},
      box: {},
    }
  }

  getImageDemographics = (data) => {
    const clarifaiDemographics = data.outputs[0].data.regions.map((region) => {
      return(
      {
        age: region.data.concepts[0].name,
        gender: region.data.concepts[20].name,
        race : region.data.concepts[22].name
      }
      );
    });
    return clarifaiDemographics;
  }

  saveImageDemographics = (demograph) => {
    this.setState({demograph: demograph});
    console.log(demograph);
  }

  calculateFaceLocation = (data) => {
    const clarifiFace = data.outputs[0].data.regions.map((region) => {
      return region.region_info.bounding_box;
   });

   const image = document.getElementById('inputimage');
   const width = Number(image.width);
   const height = Number(image.height);
   
   const box = clarifiFace.map((face) =>{
      return {
      leftCol: face.left_col * width,
      topRow: face.top_row * height,
      rightCol: width - (face.right_col * width),
      bottomRow: height -(face.bottom_row *height)
   }
   });
   return box;
  }

  saveFaceLocation = (box) => {
    this.setState({box: box});
    console.log(box);
  }


  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onUpload = () => {
    this.setState({imageUrl: this.state.input});
    
    app.models.predict(Clarifai.DEMOGRAPHICS_MODEL, this.state.input)
  .then(response => {
    // There was a successful response
    this.saveFaceLocation(this.calculateFaceLocation(response));
    this.saveImageDemographics(this.getImageDemographics(response));
  })
  .catch(error => {
    // There was an error
    console.log('error');
  });
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
        <Demographics imageUrl={this.state.imageUrl} demograph={this.state.demograph} />
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
