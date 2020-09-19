import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation.js';
import Logo from './components/Logo/Logo.js';
import Home from './components/Home/Home.js';
import MessageBox from './components/MessageBox/MessageBox.js';
import './App.css';
import 'tachyons';

function App() {
  return (
    <div className="App">
      <Logo />
      <Navigation />
      <Home />
      <MessageBox />
      {/*<UserInput />
            <ImageInput />
            <FaceRecognition />
            <Profile />*/}
    </div>
  );
}

export default App;
