import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.css'


class Gift extends Component {
    render() {
      // var settings = {
      //   dots: false,
      //   arrows: false,
      //   speed: 500,
      //   slidesToShow: 4,
      //   slidesToScroll: 1,
      //   autoplay:true,
      //   autoplaySpeed:1500,
      //   responsive: [
      //       {
      //         breakpoint: 1024,
      //         settings: {
      //           slidesToShow: 3,
      //           slidesToScroll: 3,
      //           infinite: true,
      //         }
      //       },
      //       {
      //         breakpoint: 600,
      //         settings: {
      //           slidesToShow: 2,
      //           slidesToScroll: 2
      //         }
      //       },
      //       {
      //         breakpoint: 480,
      //         settings: {
      //           slidesToShow: 2,
      //           slidesToScroll: 1
      //         }
      //       }
      //     ]
      // };
      return (
          <div className="gift-area" id="gift-area">
              <div className="container">
                    <div className="col-12">
                      <div className="section-title text-center">
                          <h2>Moltes gràcies!</h2>
                          <p>Si ens voleu fer algun regal o aportació us estarem molt agraïts!</p>
                          <p>ES90 2100 1425 1702 0016 xXXx</p>
                      </div>
                  </div>
                  {/* <div className="row gift-item">
                      <div className="col-lg-12">
                        <Slider {...settings}>
                            <div className="item">
                                <img src={gift1} alt=""/>
                            </div>
                            <div className="item">
                                <img src={gift2} alt=""/>
                            </div>
                            <div className="item">
                                <img src={gift3} alt=""/>
                            </div>
                            <div className="item">
                                <img src={gift4} alt=""/>
                            </div>
                            <div className="item">
                                <img src={gift1} alt=""/>
                            </div>
                            <div className="item">
                                <img src={gift2} alt=""/>
                            </div>
                            <div className="item">
                                <img src={gift3} alt=""/>
                            </div>
                            <div className="item">
                                <img src={gift4} alt=""/>
                            </div>
                            </Slider>
                      </div>
                  </div> */}
              </div>
          </div>
      );
    }
  }

export default Gift;