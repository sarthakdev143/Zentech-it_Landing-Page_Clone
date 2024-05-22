import React from 'react'
import '../littles.css';
import './Navbar.css';

const Navbar = () => {
    return (
        <div id='navbar-wrapper'>
            <header className='faic center1'>
                <nav className='faic'>
                    <section className='faic'>
                        <figure>
                            <img src={`${process.env.PUBLIC_URL}/imgs/logo.webp`} alt='Logo' />
                        </figure>
                    </section>
                    <section className='faic'>
                        <ul className='faic gap' type='none'>
                            <li><a href=''>Home</a> </li>
                            <li><a href=''>About Us</a> </li>
                            <li id='dropdown'>
                                <a href=''>Services <i class="ri-arrow-drop-down-line"></i></a>
                                <ul className='fdc' id="dropdown-content" type='none'>
                                    <li className='faic'><a href="#">IT Support</a></li>
                                    <li className='faic'><a href="#">IT Consulting</a></li>
                                    <li className='faic'><a href="#">Remote Hands</a></li>
                                    <li className='faic'><a href="#">Web Design and E-Commerce</a></li>
                                    <li className='faic'><a href="#">Social Media Marketing</a></li>
                                    <li className='faic'><a href="#">Graphic Design</a></li>
                                    <li className='faic'><a href="#">Financial Technology (FinTech) Consultancy</a></li>
                                </ul>
                            </li>
                            <li><a href=''>News</a> </li>
                            <li><a href=''>Awesome Links</a></li>
                            <li><a href=''>Social Responsiblity</a></li>
                            <li><a href=''>Contact Us</a></li>
                            <li><a href=''>Privacy</a> </li>
                        </ul>
                    </section>
                    <section className='faic m-gap'>
                        {/* Search Icon */}
                        <span class="material-symbols-outlined">
                            search
                        </span>

                        {/* Menu Icon */}
                        <span class="material-symbols-outlined">
                            menu
                        </span>
                    </section>
                </nav>
            </header>
        </div>
    )
}

export default Navbar