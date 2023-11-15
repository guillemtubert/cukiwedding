import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';

const Story = () =>{
    return(
        <div id="story" className="story-area section-padding">
            <div className="container">
                <div className="col-l2">
                    <div className="section-title text-center">
                        <h2>Nosaltres</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="story clearfix">
                            <div className="story-top"></div>
                            <div className="content-wrapper">
                                <div className="item">
                                    <div className="story-icon">
                                        <span className="flaticon-birds-in-love"></span>
                                    </div>
                                    <div className="story-content">
                                        <div className="image-wrap">
                                            <div className="single-image">
                                                <div>
                                                    <img src="https://www.prensalibre.com/wp-content/uploads/2018/12/b36b531b-45f9-4af8-9de3-6016688f396f.jpg?quality=52&w=638&h=430&crop=1" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <h2>Neixen dos preciosos babys</h2>
                                        <span className="date">31 d'agost & 1 de desembre, 1992</span>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some,</p>
                                        <div className="story-button">
                                            <Link className="theme-btn" to="/"  title="READ MORE">READ MORE</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="story-icon">
                                        <span className="flaticon-birds-in-love"></span>
                                    </div>
                                    <div className="story-content">
                                        <div className="image-wrap">
                                            <div className="single-image">
                                                <div>
                                                    <img src="https://media.giphy.com/media/efH7XxDUwCuIRcaLyD/giphy.gif" alt="testing..."/>
                                                </div>
                                            </div>
                                        </div>
                                        <h2>Our First Kiss</h2>
                                        <span className="date">25 de juliol, 2012</span>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some,</p>
                                        {/* <div className="story-button">
                                            <Link className="theme-btn" to="/"  title="READ MORE">READ MORE</Link>
                                        </div> */}
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="story-icon">
                                        <span className="flaticon-birds-in-love"></span>
                                    </div>
                                    <div className="story-content">
                                        <div className="image-wrap">
                                            <div className="single-image">
                                                <div>
                                                    <img src="https://media.tenor.com/vtyTRMoZXFUAAAAd/moving-out-liz-lemon.gif" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <h2>Anem a viure junts!</h2>
                                        <span className="date">11 de setembre, 2018</span>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some,</p>
                                        {/* <div className="story-button">
                                            <Link className="theme-btn" to="/"  title="READ MORE">READ MORE</Link>
                                        </div> */}
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="story-icon">
                                        <span className="flaticon-birds-in-love"></span>
                                    </div>
                                    <div className="story-content">
                                        <div className="image-wrap">
                                            <div className="single-image">
                                                <div>
                                                    <img src="https://www.theknot.com/tk-media/images/c63b9a6e-124e-4d14-9baa-d3b35cc93a71~rs_768.h" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <h2>Genoll</h2>
                                        <span className="date">25 de juliol, 2023</span>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some,</p>
                                        {/* <div className="story-button">
                                            <Link className="theme-btn" to="/"  title="READ MORE">READ MORE</Link>
                                        </div> */}
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="story-icon">
                                        <span className="flaticon-birds-in-love"></span>
                                    </div>
                                    <div className="story-content">
                                        <div className="image-wrap">
                                            <div className="single-image">
                                                <div>
                                                    <img src="https://i.pinimg.com/originals/d3/e4/a6/d3e4a6304d5ea20921df96664817366d.gif" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <h2>Casament!</h2>
                                        <span className="date">04 de maig, 2024</span>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some,</p>
                                        {/* <div className="story-button">
                                            <Link className="theme-btn" to="/"  title="READ MORE">READ MORE</Link>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                            <div className="story-bottom"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Story;