import React, { Component } from 'react';
import './lightbox.css';

class Lightbox extends Component {

    hideLightBox = () => {
        document.querySelector('.behindBox').classList.remove('showBox');
        document.body.style.overflow='auto';
    };

    handleNavigation = (event) => {
        let items = document.querySelector('.gallery').childNodes;
        let currPosition = document.querySelector('.behindBox').getAttribute('data-position');

        document.querySelector('.lightImg').src = items[parseInt(currPosition) + parseInt(event.currentTarget.getAttribute('data-direction'))].firstChild.src
        document.querySelector('.behindBox').setAttribute('data-position', parseInt(currPosition) + parseInt(event.currentTarget.getAttribute('data-direction')));
        
        if (parseInt(currPosition) + parseInt(event.currentTarget.getAttribute('data-direction')) == 0) {
            document.querySelector('.left').style.display = 'none';
        } else {
            document.querySelector('.left').style.display = 'initial';
        }
        if (parseInt(currPosition) + parseInt(event.currentTarget.getAttribute('data-direction')) == 12) {
            document.querySelector('.right').style.display = 'none';
        } else {
            document.querySelector('.right').style.display = 'initial';
        }
    };

    render() {
        return (
            <div className='behindBox'>
                    <i data-direction='-1' className="fa fa-chevron-left lboxNav left" onClick={this.handleNavigation}></i>
                        <img className='lightImg' src=''></img>
                    <i data-direction='1' className="fa fa-chevron-right lboxNav right" onClick={this.handleNavigation}></i>
                    <i className="fa fa-times lboxNav close" onClick={this.hideLightBox}></i>
            </div>
        );
    };
};

export default Lightbox;