import React, { Component } from 'react';
import './gallery.css';

class Gallery extends Component {

        galleryObserver = new IntersectionObserver(function(entries, galleryObserver) {
                entries.forEach(entry => {
                        if (!entry.isIntersecting) {
                                return;
                        } else {
                                entry.target.classList.add('fadein');
                                galleryObserver.unobserve(entry.target);
                        }
                });

        }, {threshold: 0.25});

        showLightBox = (event) => {
                document.body.style.overflow='hidden';
                document.querySelector('.behindBox').classList.add('showBox');
                document.querySelector('.behindBox').setAttribute('data-position', event.currentTarget.getAttribute('data-position'));
                document.querySelector('.lightImg').src = event.currentTarget.firstChild.src;
                if (event.currentTarget.getAttribute('data-position') == 0) {
                        document.querySelector('.left').style.display = 'none';
                    } else {
                        document.querySelector('.left').style.display = 'initial';
                    }
                    if (event.currentTarget.getAttribute('data-position') == 12) {
                        document.querySelector('.right').style.display = 'none';
                    } else {
                        document.querySelector('.right').style.display = 'initial';
                    }
        }

        componentDidMount = () => {
                const galleryItems = document.querySelectorAll('.galleryItem');
                galleryItems.forEach(item => {
                        this.galleryObserver.observe(item);
                });
        };
        componentDidUpdate = () => {
                const galleryItems = document.querySelectorAll('.galleryItem');
                galleryItems.forEach(item => {
                        this.galleryObserver.observe(item);
                });
        };

        render() {

        if(this.props.collection == '1') {
                        return(
                        <div className='galleryWrapper'>
                        <ul className='gallery'>
                                <li data-position='0' className='galleryItem' onClick={this.showLightBox}>
                                        <img className='galleryImg' src='https://64.media.tumblr.com/9ffef1973cbfc11eb1874b53b1d42964/tumblr_nk9f91uscC1tc258so2_640.jpg'></img>
                                        <div className='imgOverlay'></div>
                                </li>
                                <li data-position='1' className='galleryItem' onClick={this.showLightBox}>
                                        <img className='galleryImg' src='https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814781/photostream-photos/DSC05611_lbwtmk.jpg'></img>
                                        <div className='imgOverlay'></div>
                                </li>
                                <li data-position='2' className='galleryItem' onClick={this.showLightBox}>
                                        <img className='galleryImg' src='https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814782/photostream-photos/DSC05487_fcdv7t.jpg'></img>
                                        <div className='imgOverlay'></div>
                                </li>
                                <li data-position='3' className='galleryItem' onClick={this.showLightBox}>
                                        <img className='galleryImg' src='https://evamaegarnet.com/wp-content/uploads/2016/04/09557ea18f774e1d340652fce6192995.jpg'></img>
                                        <div className='imgOverlay'></div>
                                </li>
                                <li data-position='4' className='galleryItem' onClick={this.showLightBox}>
                                        <img className='galleryImg' src='https://64.media.tumblr.com/9991d7f7892975df8f240e6de56a26c1/tumblr_nywj19GiQX1qb5gkjo9_540.png'></img>
                                        <div className='imgOverlay'></div>
                                </li>
                                <li data-position='5' className='galleryItem' onClick={this.showLightBox}>
                                        <img className='galleryImg' src='https://i.ibb.co/njXZsYN/0myArt.jpg'></img>
                                        <div className='imgOverlay'></div>
                                </li>
                                <li data-position='6' className='galleryItem' onClick={this.showLightBox}>
                                        <img className='galleryImg' src='https://i.ibb.co/KNyZNKP/618-Fj-Ww-UJFL-AC.jpg'></img>
                                        <div className='imgOverlay'></div>
                                </li>
                                <li data-position='7' className='galleryItem' onClick={this.showLightBox}>
                                        <img className='galleryImg' src='https://i.ibb.co/gzS5R4P/skully.jpg'></img>
                                        <div className='imgOverlay'></div>
                                </li>
                                <li data-position='8' className='galleryItem' onClick={this.showLightBox}>
                                        <img className='galleryImg' src='https://64.media.tumblr.com/e51a2391e4a84ef7d53ae9be1a10df0c/tumblr_ncfmdr5hU31qeo6jvo3_r1_540.jpg'></img>
                                        <div className='imgOverlay'></div>
                                </li>
                                <li data-position='9' className='galleryItem' onClick={this.showLightBox}>
                                        <img className='galleryImg' src='https://64.media.tumblr.com/06c9703ea6c60e8abd1fecb820ced890/tumblr_ngnv35Njo51qznej8o6_540.jpg'></img>
                                        <div className='imgOverlay'></div>
                                </li>
                                <li data-position='10' className='galleryItem' onClick={this.showLightBox}>
                                        <img className='galleryImg' src='https://i.ibb.co/WKkq5NW/borgy.jpg'></img>
                                        <div className='imgOverlay'></div>
                                </li>
                                <li data-position='11' className='galleryItem' onClick={this.showLightBox}>
                                        <img className='galleryImg' src='https://i.ibb.co/8Bv9Y0w/van-gogh-skeleton.jpg'></img>
                                        <div className='imgOverlay'></div>
                                </li>
                                <li data-position='12' className='galleryItem' onClick={this.showLightBox}>
                                        <img className='galleryImg' src='https://i.ibb.co/sbhpD0z/0myArt2.jpg'></img>
                                        <div className='imgOverlay'></div>
                                </li>
                                {/* <li></li> */}
                        </ul>
                        </div>
                        );
        }else if (this.props.collection == '2') {
                return ( 
                <div className='galleryWrapper'>
                <ul className='gallery'>
                        <li data-position='0' className='galleryItem' onClick={this.showLightBox}>
                                <img className='galleryImg' src='https://64.media.tumblr.com/3d48a0c2c8a26d3eb7a89fb89ac673e8/tumblr_ncfmdr5hU31qeo6jvo2_r1_640.jpg'></img>
                                <div className='imgOverlay'></div>
                        </li>
                        <li data-position='1' className='galleryItem' onClick={this.showLightBox}>
                                <img className='galleryImg' src='https://64.media.tumblr.com/e9ca6148a5269f86f80dfd94d791c66f/tumblr_nevxluJvbp1s1vn29o6_640.jpg'></img>
                                <div className='imgOverlay'></div>
                        </li>
                        <li data-position='2' className='galleryItem' onClick={this.showLightBox}>
                                <img className='galleryImg' src='https://64.media.tumblr.com/1bf0935d81419cb243ef096061da3423/tumblr_n4r9ddF3T61tv73xbo3_640.jpg'></img>
                                <div className='imgOverlay'></div>
                        </li>
                        <li data-position='3' className='galleryItem' onClick={this.showLightBox}>
                                <img className='galleryImg' src='https://64.media.tumblr.com/a0386412b7660494e2b22c298739caac/tumblr_n9tevpVd7Y1qjeiapo1_640.jpg'></img>
                                <div className='imgOverlay'></div>
                        </li>
                        <li data-position='4' className='galleryItem' onClick={this.showLightBox}>
                                <img className='galleryImg' src='https://64.media.tumblr.com/4f50b09587f5bf2dcedce0d811e85c32/tumblr_mx3w3bSq9v1t32rrio2_500.jpg'></img>
                                <div className='imgOverlay'></div>
                        </li>
                        <li data-position='5' className='galleryItem' onClick={this.showLightBox}>
                                <img className='galleryImg' src='https://64.media.tumblr.com/6b2910f680a8b4e15833dfbe261909c5/tumblr_mu7iqtQYbN1qbpolso6_640.jpg'></img>
                                <div className='imgOverlay'></div>
                        </li>
                        <li data-position='6' className='galleryItem' onClick={this.showLightBox}>
                                <img className='galleryImg' src='https://i.ibb.co/KNyZNKP/618-Fj-Ww-UJFL-AC.jpg'></img>
                                <div className='imgOverlay'></div>
                        </li>
                        <li data-position='7' className='galleryItem' onClick={this.showLightBox}>
                                <img className='galleryImg' src='https://i.ibb.co/gzS5R4P/skully.jpg'></img>
                                <div className='imgOverlay'></div>
                        </li>
                        <li data-position='8' className='galleryItem' onClick={this.showLightBox}>
                                <img className='galleryImg' src='https://64.media.tumblr.com/e51a2391e4a84ef7d53ae9be1a10df0c/tumblr_ncfmdr5hU31qeo6jvo3_r1_540.jpg'></img>
                                <div className='imgOverlay'></div>
                        </li>
                        <li data-position='9' className='galleryItem' onClick={this.showLightBox}>
                                <img className='galleryImg' src='https://64.media.tumblr.com/06c9703ea6c60e8abd1fecb820ced890/tumblr_ngnv35Njo51qznej8o6_540.jpg'></img>
                                <div className='imgOverlay'></div>
                        </li>
                        <li data-position='10' className='galleryItem' onClick={this.showLightBox}>
                                <img className='galleryImg' src='https://64.media.tumblr.com/409dd4b3a9bc6da7c142140c1aab3f55/tumblr_n2r75qQyEt1qjnzcoo1_500.jpg'></img>
                                <div className='imgOverlay'></div>
                        </li>
                        <li data-position='11' className='galleryItem' onClick={this.showLightBox}>
                                <img className='galleryImg' src='https://i.ibb.co/8Bv9Y0w/van-gogh-skeleton.jpg'></img>
                                <div className='imgOverlay'></div>
                        </li>
                        <li data-position='12' className='galleryItem' onClick={this.showLightBox}>
                                <img className='galleryImg' src='https://64.media.tumblr.com/0ab4eb782bb6bf3ef76a1fe579d7ae78/tumblr_mx8c26mFmT1t0uaq4o6_640.jpg'></img>
                                <div className='imgOverlay'></div>
                        </li>
                        {/* <li></li> */}
                </ul>
                </div>);
        } else {
                return ( 
                <div className='galleryWrapper'>
                <ul className='gallery'>
                        <li data-position='0' className='galleryItem' onClick={this.showLightBox}>
                                <img className='galleryImg' src='https://64.media.tumblr.com/279f85592f4adab72be4d6470a3b22d4/tumblr_mqocjewBei1qdway4o5_640.jpg'></img>
                                <div className='imgOverlay'></div>
                        </li>
                        <li data-position='1' className='galleryItem' onClick={this.showLightBox}>
                                <img className='galleryImg' src='https://64.media.tumblr.com/baca90f04d3d50d51f6375cf127d25e3/tumblr_mu1rcgMc4p1s43irmo5_540.jpg'></img>
                                <div className='imgOverlay'></div>
                        </li>
                        <li data-position='2' className='galleryItem' onClick={this.showLightBox}>
                                <img className='galleryImg' src='https://64.media.tumblr.com/tumblr_meczq5FqtM1qct6uao1_640.jpg'></img>
                                <div className='imgOverlay'></div>
                        </li>
                        <li data-position='3' className='galleryItem' onClick={this.showLightBox}>
                                <img className='galleryImg' src='https://64.media.tumblr.com/c693ec30b46cf8e73b15b2caa9559a96/tumblr_mqr38kHhJT1r6rjufo8_640.jpg'></img>
                                <div className='imgOverlay'></div>
                        </li>
                        <li data-position='4' className='galleryItem' onClick={this.showLightBox}>
                                <img className='galleryImg' src='https://64.media.tumblr.com/f4c6ad4a32a39c7e07c7f33001fa1817/tumblr_mhxaanUOwX1reuoy0o1_500.jpg'></img>
                                <div className='imgOverlay'></div>
                        </li>
                        <li data-position='5' className='galleryItem' onClick={this.showLightBox}>
                                <img className='galleryImg' src='https://i.ibb.co/njXZsYN/0myArt.jpg'></img>
                                <div className='imgOverlay'></div>
                        </li>
                        <li data-position='6' className='galleryItem' onClick={this.showLightBox}>
                                <img className='galleryImg' src='https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814782/photostream-photos/DSC05487_fcdv7t.jpg'></img>
                                <div className='imgOverlay'></div>
                        </li>
                        <li data-position='7' className='galleryItem' onClick={this.showLightBox}>
                                <img className='galleryImg' src='https://64.media.tumblr.com/tumblr_mdlku9xVOp1rgot9do1_640.jpg'></img>
                                <div className='imgOverlay'></div>
                        </li>
                        <li data-position='8' className='galleryItem' onClick={this.showLightBox}>
                                <img className='galleryImg' src='https://64.media.tumblr.com/e51a2391e4a84ef7d53ae9be1a10df0c/tumblr_ncfmdr5hU31qeo6jvo3_r1_540.jpg'></img>
                                <div className='imgOverlay'></div>
                        </li>
                        <li data-position='9' className='galleryItem' onClick={this.showLightBox}>
                                <img className='galleryImg' src='https://64.media.tumblr.com/06c9703ea6c60e8abd1fecb820ced890/tumblr_ngnv35Njo51qznej8o6_540.jpg'></img>
                                <div className='imgOverlay'></div>
                        </li>
                        <li data-position='10' className='galleryItem' onClick={this.showLightBox}>
                                <img className='galleryImg' src='https://i.ibb.co/WKkq5NW/borgy.jpg'></img>
                                <div className='imgOverlay'></div>
                        </li>
                        <li data-position='11' className='galleryItem' onClick={this.showLightBox}>
                                <img className='galleryImg' src='https://i.ibb.co/8Bv9Y0w/van-gogh-skeleton.jpg'></img>
                                <div className='imgOverlay'></div>
                        </li>
                        <li data-position='12' className='galleryItem' onClick={this.showLightBox}>
                                <img className='galleryImg' src='https://i.ibb.co/sbhpD0z/0myArt2.jpg'></img>
                                <div className='imgOverlay'></div>
                        </li>
                        {/* <li></li> */}
                </ul>
                </div>
                );
        }
        
        }
};

export default Gallery;