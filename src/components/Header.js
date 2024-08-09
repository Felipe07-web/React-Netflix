import React from 'react';
import './header.css';

export default ({black}) => {
    return(
            <header className={black ? 'black': ''}>
                <div className='header--logo'>
                    < a href='/'>
                        <img src="https://i0.wp.com/assets.b9.com.br/wp-content/uploads/2016/06/netflix-logo-thumb.jpg?fit=1060%2C596&ssl=1"></img>
                    </a>
                </div>
                <div className="header--user">
                    <a href='/'>
                        <img src="https://i.pinimg.com/474x/0c/91/71/0c9171ce965fb4ec175c2b001516e754.jpg"></img>
                    </a>
                </div>
            </header>
    );
}