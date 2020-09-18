import React, { Component } from 'react';
import './about.css';

class About extends Component {

    hideAbout = () => {
        document.body.style.overflow='auto';
        document.querySelector('.about').classList.remove('showAbout');
    };
    
    render() {
    return(
        <>
        <div className='about'>
        {/* <div className='angleUnderlay'></div> */}
        {/* <div className='angleUnderlay2'></div> */}
        <i className="fa fa-times aboutClose" onClick={this.hideAbout}></i>
            <h1 className='aboutHeader'>Who am I?</h1>
            <div className='aDescription'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nulla ullamcorper aliquet justo vitae feugiat. Etiam non felis in est venenatis tempus ut ut dolor. 
                    Nullam quam eros, pellentesque eget ullamcorper et, elementum id nunc. 
                    Quisque et elit ut sapien tempus euismod non sed nisl. 
                    Suspendisse aliquet dui in urna consequat pharetra non a sapien. 
                    Duis nec tellus ac turpis elementum consectetur eget eu justo. 
                    Sed urna lectus, accumsan eget ipsum in, posuere lacinia libero. Duis ut risus quam. 
                    Aliquam et ornare diam. Curabitur commodo quis mi vel fermentum. 
                    Phasellus fringilla sapien non gravida tincidunt. Nunc nec libero libero. 
                    Nam ultrices, lacus vel maximus pellentesque, ex purus interdum arcu, eu venenatis sem nisi id urna. 
                    Curabitur tincidunt libero vel interdum vestibulum.
                </p>
                <p>Proin ultricies tristique mi. 
                    Curabitur commodo libero at aliquam convallis. In lobortis maximus euismod. 
                    Quisque eleifend, nibh a pretium feugiat, enim mi sollicitudin dolor, sit amet volutpat nibh nibh ut velit. 
                    Sed rhoncus odio vitae est euismod malesuada. Nam orci risus, pulvinar vel condimentum quis, dictum non dui. 
                    Quisque tristique dictum rhoncus. Sed placerat urna in nibh porttitor hendrerit. 
                    Nam gravida quis justo non luctus. Mauris pretium ipsum ac arcu hendrerit, vel placerat nisl ornare. 
                    Etiam nibh dui, pellentesque sed nisl in, porta fringilla velit.
                </p>
            </div>
        </div>
        </>
    );
    };
};

export default About;