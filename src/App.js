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
import Profile from './components/Profile/Profile.js'
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import './App.css';


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
      route: 'signin',
      semiRoute: 'url',
      imageUrl: 'https://clarifai.com/cms-assets/20180320222304/demographics-001.jpg',
      selectedFace: {
        age: '',
        gender:'',
        race: '',
      },
      selectedBox: [],
      demograph: [],
      box: [],
    }
  }


  //                               Getting Image Demographics

  getImageDemographics = data => {
    const clarifaiDemographics = data.outputs[0].data.regions.map((region) => {
      return {
        age: region.data.concepts[0].name,
        gender: region.data.concepts[20].name,
        race : region.data.concepts[22].name,
      }
      
    });
    return clarifaiDemographics;
  }


  //                                 Saving Image Demographics

  saveImageDemographics = demograph => {
    this.setState({demograph: demograph});
    this.setDemograph(demograph[0], 0);       //loading demographics as soon as page loads
  }


  //                                 Getting Face Bounding Box

  calculateFaceLocation = data => {
    
    const clarifiFace = data.outputs[0].data.regions.map((region) => {
      return region.region_info.bounding_box;
   });

   const image = document.getElementById('inputimages');
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


  //                               Saving Bounding Box

  saveFaceLocation = box => {
    this.setState({box: box});
  }


  //                                Requesting Api

  requestFromAPI = url => {
    
    app.models.predict(Clarifai.DEMOGRAPHICS_MODEL, url)
    .then(response => {
      // There was a successful response
      if(response.outputs[0].data.regions){
      this.saveFaceLocation(this.calculateFaceLocation(response));
      this.saveImageDemographics(this.getImageDemographics(response));
      }else{
        alert("Image doesn't contain any faces!")
      }
    })
    .catch(error => {
      // There was an error
      console.log(error);
    });
  }


  //                               User input changing

  onInputChange = event => {
    this.setState({input: event.target.value});
  }


  //                                Refresh states (where necessary for e.g route changes)
  refreshStates = () => {
    this.setState({box: [], demograph: [], selectedFace: {
      age: '',
      gender:'',
      race: '',
    }});
  }

  //                                User uploading

  onUpload = () => {
    this.setState({imageUrl: this.state.input});
    this.refreshStates();
    this.requestFromAPI(this.state.input);
    
  }


  //                              Navbar route

  onRouteChange = route => {
    this.setState({route: route});
    this.refreshStates();
    if (route === 'addImage'){
      this.setState({semiRoute: 'url'});
      this.requestFromAPI(this.state.imageUrl);
    }
  }


  //                              Semi navbar route 

  onSemiRouteChange = semiRoute => {
    this.setState({semiRoute: semiRoute});
  }


  //                               When Image is selected from img bar

  onImageSelect = img => {
    this.setState({ imageUrl: img });
    this.requestFromAPI(img);
  }

  //                              setting demograph values for selectedFace

  setDemograph = (demograph, i) => {
    this.setState({selectedFace:
      {
        age : demograph.age,
        gender : demograph.gender,
        race : demograph.race
      }    
    });
  }

  //                               When a Face is selected

  onFaceSelect = (demograph, i) => {
    this.setDemograph(demograph, i);
    this.setState({selectedBox: this.state.box[i]});
  }


  //                               When a Face is unselected

  onFaceUnselect = () => {
    this.setState({selectedBox: []});
  }


  //                              Lifecycle hooks

  componentDidMount() {
    
  }

  

  render(){

    return (
      <div className="App">
        <Particles className='particles' params={particleOptions} />
       
       { this.state.route !== 'signin' &&  this.state.route !== 'register' ?   //    loading Navbar if its not sigin page
          <div>
            <Logo />
            <Navigation onSemiRouteChange={this.onSemiRouteChange} onRouteChange={this.onRouteChange} route={this.state.route} />
           { this.state.route === 'home'?   //    opening home page when user signin's
              <Home /> :
              (this.state.route === 'profile' ?  // opens user's profile when
                <Profile /> :    //at last if user opens up the app from navbar it is displayed
                <div>
                  <div className='flex justify-center flex-wrap mt-250'>
                    <Demographics demograph={this.state.demograph} onFaceSelect={this.onFaceSelect} selectedFace={this.state.selectedFace} onFaceUnselect={this.onFaceUnselect} />
                    <FaceRecognition imageUrl={this.state.imageUrl} box={this.state.box} selectedBox={this.state.selectedBox} demograph={this.state.demograph} onFaceSelect={this.onFaceSelect} onFaceUnselect={this.onFaceUnselect} />
                  </div>
                  <ImageSlide onImageSelect={this.onImageSelect} />
                  <ImageInput semiRoute={this.state.semiRoute} onInputChange={this.onInputChange} onUpload={this.onUpload}/>
                </div>
              ) 
            }
          </div> :
          ( this.state.route === 'signin' ?
              <SignIn onRouteChange={this.onRouteChange} /> :
              <Register onRouteChange={this.onRouteChange} />
          )
        }

        {/**/}
      </div>
    );
  }
}

export default App;


/*<Logo />
<Navigation onSemiRouteChange={this.onSemiRouteChange} onRouteChange={this.onRouteChange} route={this.state.route} />
<div className='flex justify-center flex-wrap mt-250'>
  <Demographics demograph={this.state.demograph} onFaceSelect={this.onFaceSelect} selectedFace={this.state.selectedFace} onFaceUnselect={this.onFaceUnselect} />
  <FaceRecognition imageUrl={this.state.imageUrl} box={this.state.box} selectedBox={this.state.selectedBox} demograph={this.state.demograph} onFaceSelect={this.onFaceSelect} onFaceUnselect={this.onFaceUnselect} />
</div>
<ImageSlide onImageSelect={this.onImageSelect} />
<ImageInput semiRoute={this.state.semiRoute} onInputChange={this.onInputChange} onUpload={this.onUpload}/>*/