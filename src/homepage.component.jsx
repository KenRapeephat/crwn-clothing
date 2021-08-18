import React from 'react';

import Directory from './components/directory/directory.component';

import './homepage.style.scss';

const HomePagess = () => (
    <div className='homepage'>
        <div className='directory-menu'>
            <div className='menu-item'> 
                <div className='content'>
                    <h1 className='title'>HATS</h1>
                    <h1 className='subtitile'>Shop Now</h1>     
                </div>
            </div>
            <div className='menu-item'> 
                <div className='content'>
                    <h1 className='title'>Jackets</h1>
                    <h1 className='subtitile'>Shop Now</h1>     
                </div>
            </div>
            <div className='menu-item'> 
                <div className='content'>
                    <h1 className='title'>Sneakers</h1>
                    <h1 className='subtitile'>Shop Now</h1>     
                </div>
            </div>
            <div className='menu-item'> 
                <div className='content'>
                    <h1 className='title'>Womens</h1>
                    <h1 className='subtitile'>Shop Now</h1>     
                </div>
            </div>
            <div className='menu-item'> 
                <div className='content'>
                    <h1 className='title'>Mens</h1>
                    <h1 className='subtitile'>Shop Now</h1>     
                </div>
            </div>
        </div>
    </div>

);

export default HomePagess;