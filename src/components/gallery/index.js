import React from 'react';
import './gallery.css';

function Gallery() {
    return (
        <div className='galleryWrapper'>
            <ul className='gallery'>
                <li className='galleryItem'>
                        <img src='https://64.media.tumblr.com/9ffef1973cbfc11eb1874b53b1d42964/tumblr_nk9f91uscC1tc258so2_640.jpg'></img>
                        <div className='imgOverlay'></div>
                </li>
                <li className='galleryItem'>
                        <img src='https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814781/photostream-photos/DSC05611_lbwtmk.jpg'></img>
                        <div className='imgOverlay'></div>
                </li>
                <li className='galleryItem'>
                        <img src='https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814782/photostream-photos/DSC05487_fcdv7t.jpg'></img>
                        <div className='imgOverlay'></div>
                </li>
                <li className='galleryItem'>
                        <img src='https://evamaegarnet.com/wp-content/uploads/2016/04/09557ea18f774e1d340652fce6192995.jpg'></img>
                        <div className='imgOverlay'></div>
                </li>
                <li className='galleryItem'>
                        <img src='https://64.media.tumblr.com/9991d7f7892975df8f240e6de56a26c1/tumblr_nywj19GiQX1qb5gkjo9_540.png'></img>
                        <div className='imgOverlay'></div>
                </li>
                <li className='galleryItem'>
                        <img src='https://i.ibb.co/njXZsYN/0myArt.jpg'></img>
                        <div className='imgOverlay'></div>
                </li>
                <li className='galleryItem'>
                        <img src='https://i.ibb.co/KNyZNKP/618-Fj-Ww-UJFL-AC.jpg'></img>
                        <div className='imgOverlay'></div>
                </li>
                <li className='galleryItem'>
                        <img src='https://i.ibb.co/gzS5R4P/skully.jpg'></img>
                        <div className='imgOverlay'></div>
                </li>
                <li className='galleryItem'>
                        <img src='https://64.media.tumblr.com/e51a2391e4a84ef7d53ae9be1a10df0c/tumblr_ncfmdr5hU31qeo6jvo3_r1_540.jpg'></img>
                        <div className='imgOverlay'></div>
                </li>
                <li className='galleryItem'>
                        <img src='https://64.media.tumblr.com/06c9703ea6c60e8abd1fecb820ced890/tumblr_ngnv35Njo51qznej8o6_540.jpg'></img>
                        <div className='imgOverlay'></div>
                </li>
                <li className='galleryItem'>
                        <img src='https://i.ibb.co/WKkq5NW/borgy.jpg'></img>
                        <div className='imgOverlay'></div>
                </li>
                <li className='galleryItem'>
                        <img src='https://i.ibb.co/8Bv9Y0w/van-gogh-skeleton.jpg'></img>
                        <div className='imgOverlay'></div>
                </li>
                <li className='galleryItem'>
                        <img src='https://i.ibb.co/sbhpD0z/0myArt2.jpg'></img>
                        <div className='imgOverlay'></div>
                </li>
                {/* <li></li> */}
            </ul>
        </div>
    );
};

export default Gallery;