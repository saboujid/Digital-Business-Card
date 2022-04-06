import { Component } from 'react';
import './App.css';
import Info from './components/Info'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="App">
      <Info />
      <Footer />
      <div className="credits">
        Made by : Saboujid
      </div>
    </div>
  );
}

export default App;
