import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation.js';
import Logo from './components/Logo/Logo.js';
import Home from './components/Home/Home.js'
import './App.css';
import 'tachyons';

function App() {
  return (
    <div className="App">
      <Logo />
      <Navigation />
      <Home />
      {/*<ImageAdd />
            <ImageTest />
            <FaceRecognition />
            <Profile />*/}
    </div>
  );
}

export default App;
