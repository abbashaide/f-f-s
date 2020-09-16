import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation.js';
import Logo from './components/Logo/Logo.js';
import './App.css';
import 'tachyons';

function App() {
  return (
    <div className="App">
      <Logo />
      <Navigation />
      {/*<MessageBox />
            <ImageLinkForm />
            <ImageUpload />
            <FaceRecognition />*/}
    </div>
  );
}

export default App;
