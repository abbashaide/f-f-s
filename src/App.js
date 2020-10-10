import React, { Component } from 'react';

import Navigation from './components/Navigation/Navigation.js';
import Logo from './components/Logo/Logo.js';
import Demographics from './components/Demographics/Demographics.js';
import ImageSlide from './components/ImageSlide/ImageSlide.js'
import ImageInput from'./components/ImageInput/ImageInput.js';
import FaceRecognition from './components/FaceRecognition/FaceRecognition.js';
import Home from './components/Home/Home.js';
import SignIn from './components/SignIn/SignIn.js';
import Register from './components/Register/Register.js';
import Profile from './components/Profile/Profile.js';

import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import './App.css';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { 
  urlField, 
  imageDisplay,
  faceFromApi,
  getFaceBox,
  getFaceDemographics
} from './reducers.js';

import { 
  getUrlField,
  setImageDisplay,
  fetchFromApi,
  selectFaceBox,
  selectFaceDemographics
} from './actions.js';


const mapStateToProps = state => {
  return {
    url: state.urlField.url,
    imageUrl: state.imageDisplay.imageUrl,
    box: state.faceFromApi.box,
    demograph: state.faceFromApi.demograph,
    selectedBox: state.getFaceBox.selectedBox,
    selectedFace: state.getFaceDemographics.selectedFace,
    isPending: state.faceFromApi.isPending
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onInputChange: (event) => dispatch(getUrlField(event.target.value)),       //User url input changing
    onImageSelect: (img) => dispatch(setImageDisplay(img)),
    onUpload: (img) => dispatch(setImageDisplay(img)),
    requestFromAPI: (url) => dispatch(fetchFromApi(url)),
    onFaceSelect: (box, demograph, i) => { 
      dispatch(selectFaceBox(box[i])); 
      dispatch(selectFaceDemographics(demograph));
    },
    onFaceUnselect: () => dispatch(selectFaceBox([])),
    setDemographicsOnLoad: (demograph) =>  dispatch(selectFaceDemographics(demograph))
  }
}



const app = new Clarifai.App({
 apiKey: '3a7b8f6b8b974388a03d44d2034eab3e'
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
      
    }
  }

//                              Navbar route

  onRouteChange = route => {
    this.setState({route: route});
    if (route === 'addImage'){
      this.setState({semiRoute: 'url'});
      this.props.requestFromAPI(this.props.imageUrl);
      setTimeout(() => {this.props.setDemographicsOnLoad(this.props.demograph[0])}, 2000);
      }
  }


  //                              Semi navbar route 

  onSemiRouteChange = semiRoute => {
    this.setState({semiRoute: semiRoute});
  }

  //                              Lifecycle hooks

  componentWillMount() {
    this.props.requestFromAPI(this.props.imageUrl);
  }

  componentDidMount() {
    
  }

  

  render(){
    const { demograph, imageUrl, box, selectedFace, selectedBox, url, onFaceSelect, onFaceUnselect, setDemographicsOnLoad, requestFromAPI, onImageSelect, onInputChange, onUpload } = this.props;

    return (
      <div className="App">
        <Particles className='particles' params={particleOptions} />
        <Switch>

          <Route exact path='/'>
            <SignIn />
          </Route>

          <Route exact path='/register'>
            <Register />
          </Route>

          <Route exact path='/home'>
            <Logo />
            <Navigation  />
            <Home />
          </Route>

          <Route exact path='/profile'>
            <Logo />
            <Navigation  />
            <Profile />
          </Route>

          <Route path='/app'>
            <Logo />
            <Navigation  />
            <div className='flex justify-center flex-wrap mt-250'>
              <Demographics demograph={demograph} onFaceSelect={onFaceSelect} selectedFace={selectedFace} onFaceUnselect={onFaceUnselect} box={box} />
              <FaceRecognition imageUrl={imageUrl} box={box} selectedBox={selectedBox} demograph={demograph} onFaceSelect={onFaceSelect} onFaceUnselect={onFaceUnselect} />
            </div>
            <ImageSlide onImageSelect={onImageSelect} requestFromAPI={requestFromAPI} setDemographicsOnLoad={setDemographicsOnLoad} demograph={demograph} />
            <ImageInput onInputChange={onInputChange} onUpload={onUpload} url={url} requestFromAPI={requestFromAPI}/>
          </Route>

        </Switch>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

