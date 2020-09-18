import React, { Component } from 'react';
import './nav.css';
import About from '../about';

class Nav extends Component {

    showAbout = () => {
        document.body.style.overflow='hidden';
        document.querySelector('.about').classList.add('showAbout');
    };

    openDropdown = () => {
        document.querySelector('.dropdownContent').classList.add('showDrop');
    };

    closeDropdown = () => {
        document.querySelector('.dropdownContent').classList.remove('showDrop');
    };

    navCombo = (event) => {
        this.props.handleCollectionState(event);
        this.closeDropdown();
    };

    toggleDropdown = (event) => {
        document.querySelector('.dropdownContent').classList.add('showDrop');
        if (event.target !== document.querySelector('.navDropdown')) {
            this.closeDropdown();
        }
    };

    componentDidMount = () => {
        document.addEventListener('scroll', this.closeDropdown);
    };
    render() {
        return (
            <div className='nav-area'>
                <About />
                <div className='menu-wrapper'>
                    <p className='logo'><a href='#'>myname</a></p>
                    <nav>
                        <ul class='right-nav'>
                            <li>
                                <a href='javascript:void(0);' className='navDropdown' onClick={this.toggleDropdown} onMouseEnter={this.openDropdown} onMouseLeave={this.closeDropdown}>Portfolio</a>
                                <div className='dropdownContent' onMouseEnter={this.openDropdown} onMouseLeave={this.closeDropdown}>
                                    <a href='#' data-collection='1' onClick={this.navCombo}>ONE</a>
                                    <a href='#' data-collection='2' onClick={this.navCombo}>TWO</a>
                                    <a href='#' data-collection='3' onClick={this.navCombo}>THREE</a>
                                </div>
                            </li>
                            <li><a href='javascript:void(0);' onClick={this.showAbout}>About</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    };
};

export default Nav;