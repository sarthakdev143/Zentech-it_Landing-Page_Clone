import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <section id='footer' className='fdc'>
      <div id='part-1' className='flex gap'>
        <article className='fdc m-gap relative'>
          <figure>
            <img id='logo' src={`${process.env.PUBLIC_URL}/imgs/logo.webp`} alt='Logo' />
          </figure>
          <p>
            The Computer Coding Era is a launchpad for future tech leaders. With a comprehensive curriculum, innovative teaching methods, and a supportive community, it prepares students to thrive in the tech world. Whether you’re starting a coding career or looking to advance your skills, The Computer Coding Era is where your journey begins.
          </p>
        </article>
        <div id='get-in-touch' className='fdc m-gap'>
          <h1>Get in Touch</h1>
          <ul type='none' className='fdc m-gap'>
            <a href='#'>
              <li className='faic'>
                <i id='mail' class="ri-mail-line"></i>
                <span>Email Us</span>
              </li>
            </a>
            <a href='#'>
              <li className='faic'>
                <i id='twitter' class="ri-twitter-x-line"></i>
                <span>X (Twitter)</span>
              </li>
            </a>
            <a href='#'>
              <li className='faic'>
                <i id='fb' class="ri-facebook-fill"></i>
                <span>Facebook</span>
              </li>
            </a>
            <a href='#'>
              <li className='faic'>
                <i id='linkedin' class="ri-linkedin-line"></i>
                <span>LinkedIn</span>
              </li>
            </a>
            <a href='#'>
              <li className='faic'>
                <i id='ig' class="ri-instagram-line"></i>
                <span>Instagram</span>
              </li>
            </a>
          </ul>
        </div>
      </div>
      <div id='part-2' className='faic center1  '>
        <div id='container' className='faic relative'>
          <ul type='none' className='faic'>
            <li className='relative'>Copyright © 2024 <a className='relative' href='#'>Computer Coding Era</a>, All Rights Reserved</li>
            <li>|</li>
            <li className='relative'>Terms</li>
            <li>|</li>
            <li className='relative'>Privacy Policy</li>
            <li>|</li>
            <li className='relative'>Careers</li>
          </ul>
          <a href='#'>
            <span title='Back To Top' class="material-symbols-outlined">
              keyboard_arrow_up
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Footer