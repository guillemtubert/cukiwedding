import React, { Component } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import {Link} from 'react-router-dom'
import './style.css';

export default class MobileMenu extends Component {

    state = {
        isMenuShow: false,
        isOpen: false,
    }

    menuHandler = () => {
        this.setState({isMenuShow: !this.state.isMenuShow})
    }

    setIsOpen = () => {
        this.setState({isOpen: !this.state.isOpen})
    }

    render() {

        const { isMenuShow } = this.state;

        return (
            <div>
                <div className={`mobileMenu ${isMenuShow ? 'show' : ''}`}>
                    {/* <div className="clox" onClick={this.menuHandler}>Close Me</div> */}
                    <div className="logo2">
                        <h2><Link to='/home'>Iraida & Guillem</Link></h2>
                    </div>
                    <ul className="responsivemenu" onClick={this.menuHandler}>
                        <li><AnchorLink href='#home'>Inici</AnchorLink></li>
                        <li><AnchorLink href='#story'>Nosaltres</AnchorLink></li>
                        <li><AnchorLink href='#event'>Cerimònia</AnchorLink></li>
                        <li><AnchorLink href='#rsvp'>Assistència</AnchorLink></li>
                        <li><AnchorLink href='#gift-area'>Aporta o aparta</AnchorLink></li>
                    </ul>
                    
                </div>

                <div className="showmenu" onClick={this.menuHandler}><i className="fa fa-bars" aria-hidden="true"></i></div>         
            </div>
        )
    }
}
