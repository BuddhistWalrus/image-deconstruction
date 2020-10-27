import React from 'react';
import logo from './logo.svg';
import {Image, Container, Row, Col} from 'react-bootstrap';
import './App.css';
import Gallery from "./Gallery";
const images = [
    'https://finn-deconstruction.s3.amazonaws.com/example1.jpg',

    'https://finn-deconstruction.s3.amazonaws.com/example2.jpg',

    'https://finn-deconstruction.s3.amazonaws.com/example3.jpg',

    'https://finn-deconstruction.s3.amazonaws.com/example4.jpg'
]

function App() {

  return (
    <div className="App">
      <header>
      </header>
      <body>
        <Gallery />
      </body>
    </div>
  );
}

export default App;
