import React from 'react';
import './nav.css';

function Nav() {
    return (
        <div className='nav-area'>
            <div className='menu-wrapper'>
                <p className='logo'><a href='#'>myname</a></p>
                <nav>
                    <ul class='right-nav'>
                        <li><a href='#'>Portfolio</a></li>
                        <li><a href='#'>About</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Nav;