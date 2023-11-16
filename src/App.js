import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom'
import Homepage from './main-component/HomePage'
import Footer from './components/footer'
import Scrollbar from './components/scrollbar'
import './App.css';


const App = () => { 

  return (
    <div className="App">
       <Router basename={window.location.pathname || ''}>
          <h1>AAAAAAAAAAAAA</h1>
          <h1>AAAAAAAAAAAAA</h1>
          <h1>AAAAAAAAAAAAA</h1>
          <h1>AAAAAAAAAAAAA</h1>
          <h1>AAAAAAAAAAAAA</h1>
          <h1>AAAAAAAAAAAAA</h1>
          <h1>AAAAAAAAAAAAA</h1>
          <h1>AAAAAAAAAAAAA</h1>
          <h1>AAAAAAAAAAAAA</h1>
          <h1>AAAAAAAAAAAAA</h1>
          <h1>AAAAAAAAAAAAA</h1>
          <h1>AAAAAAAAAAAAA</h1>
          <h1>AAAAAAAAAAAAA</h1>
          <h1>AAAAAAAAAAAAA</h1>
          <h1>AAAAAAAAAAAAA</h1>
          <h1>AAAAAAAAAAAAA</h1>
          <h1>AAAAAAAAAAAAA</h1>
          <h1>AAAAAAAAAAAAA</h1>
          <Route exact path='/' component={Homepage} />
          <Footer/>
          <Scrollbar/>
      </Router>
      
    </div>
  )
}

export default App;
