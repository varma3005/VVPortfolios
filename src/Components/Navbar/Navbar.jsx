import React, { useState, useRef } from 'react';
import './Navbar.css';
import menu_open from '../../Portfolio_React_Assets/assets/menu_open.svg';
import underline from '../../Portfolio_React_Assets/assets/nav_underline.svg';

import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_close from '../../Portfolio_React_Assets/assets/menu_close.svg';

const Navbar = () => {
    const [menu, setMenu] = useState('home');
    const menuRef = useRef();

    const openMenu = () => {
        menuRef.current.style.right = '0';
        
    };

    const closeMenu = () => {
        menuRef.current.style.right = '-350px';
    };

    return (
        <div className='navbar'>
            <p className='logo'>VV</p>
            <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open' />
            
                
            <ul ref={menuRef} className='nav-menu'>
                <img src={menu_close} onClick={closeMenu} alt="" className='nav-mob-close' />
                <li><AnchorLink className='anchor-link' href='#home'><p onClick={() => setMenu('home')}>Home</p></AnchorLink>{menu === 'home' ? <img src={underline} alt="" /> : null}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={() => setMenu('about')}>About Me</p></AnchorLink>{menu === 'about' ? <img src={underline} alt="" /> : null}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#works'><p onClick={() => setMenu('works')}>Education</p></AnchorLink>{menu === 'works' ? <img src={underline} alt="" /> : null}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={() => setMenu('services')}>Projects</p></AnchorLink>{menu === 'services' ? <img src={underline} alt="" /> : null}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={() => setMenu('contact')}>Contact</p></AnchorLink>{menu === 'contact' ? <img src={underline} alt="" /> : null}</li>
            </ul>
            <div className="nav-connect">
                <AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={() => setMenu('contact')}>Connect With Me</p></AnchorLink>
            </div>
        </div>
    );
}

export default Navbar;
