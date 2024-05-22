import React from 'react'
import './Topbar.css'

const Topbar = () => {
    return (
        <div >
            <header className='faic center1'>
                <div id='top-navbar-wrapper' className='faic'>
                    <ul type='none' className='faic m-gap'>
                        <li className='pointer'><i class="ri-mail-line"></i></li>
                        <li className='pointer'><i class="ri-twitter-x-fill"></i></li>
                        <li className='pointer'><i class="ri-facebook-circle-fill"></i></li>
                        <li className='pointer'><i class="ri-linkedin-line"></i></li>
                        <li className='pointer'><i class="ri-instagram-line"></i></li>
                    </ul>
                    <ul type='none' className='faic s-gap'>
                        <li><i class="ri-phone-fill"></i></li>
                        <li>+91 1234567890</li>
                    </ul>
                    <ul type='none' className='faic s-gap'>
                        <li><i class="ri-mail-line"></i></li>
                        <li>Free Enquiry</li>
                    </ul>
                </div>
            </header>
        </div>
    )
}

export default Topbar