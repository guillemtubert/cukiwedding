import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.css'

class SimpleSlider extends Component {
    render() {
      return (
          <div id="home" className="item1">
              <div className="container">
                  <div className="slide-content">
                      {/* <div className="slide-subtitle">
                          <h4>MOS CASEM!</h4>
                      </div>
                      <div className="slide-title">
                          <h2>Guarda't la data</h2>
                      </div>
                      <div className="slide-text">
                          <p>04 Maig 2024</p>
                      </div> */}
                  </div>
              </div>
          </div>
      );
    }
  }

export default SimpleSlider;