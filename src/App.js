import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation.js';
import Logo from './components/Logo/Logo.js';
import MessageBox from './components/MessageBox/MessageBox.js';
import UserInput from './components/UserInput/UserInput.js';
import ImageInput from'./components/ImageInput/ImageInput.js';
import Home from './components/Home/Home.js';
import './App.css';
import 'tachyons';

function App() {
  return (
    <div className="App">
      <Logo />
      <Navigation />
      <MessageBox />
      <UserInput />
      <ImageInput />
      {/*<Home />*/}
      {/*<ImageInput />
            <FaceRecognition />
            <Profile />*/}
    </div>
  );
}

export default App;
