import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../Navbar/Navbar';
import Topbar from '../Navbar/Topbar';
import Typed from 'typed.js';
import './Home.css';

const Home = () => {
    useEffect(() => {
        const handleScroll = () => {
            const parallax = document.getElementById('parallax');
            const scrollPosition = window.pageYOffset;

            if (parallax) {
                parallax.style.backgroundPositionY = scrollPosition * 0.1 + 'rem';
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const el = React.useRef(null);
    React.useEffect(() => {
        while (true) {
            const typed = new Typed(el.current, {
                strings: ['REMOTE HANDS', 'IT CONSULTANCY', 'CLOUD SUPPORT', 'E-COMMERCE'],
                typeSpeed: 60,
                backSpeed: 30,
                loop: true,
            });

            return () => {
                // Destroy Typed instance during cleanup to stop animation
                typed.destroy();
            };
        }


    }, []);

    return (
        <div>
            <Topbar />
            <Navbar />

            <main className='fdc'>
                <div id='parallax' className='parallax'></div>
                <div id='content' className='fdc faic'>
                    <section id='landing-content' className='fdc'>
                        <div id='part-1' className='faic'>
                            <aside className='flex'>
                                <h1>Unlock Your Coding Potential with Expert Coaching!</h1>
                                <p>
                                    Welcome to our coding coaching platform, where we're dedicated to guiding you to mastery. Our personalized approach, tailored curriculum, and hands-on projects ensure you excel in today's tech landscape.
                                </p>
                                <p>
                                    Welcome to our coding coaching platform, where we're passionate about empowering you to reach your programming goals.
                                </p>
                            </aside>
                            <figure>
                                <img style={{ transform: "scaleX(-1)" }} src={`${process.env.PUBLIC_URL}/imgs/man.png`} alt='Image of A Man Doing Coding' />
                            </figure>
                        </div>
                        <div id='part-2' className='faic'>
                            <h1>looking for <span ref={el} /> CONSULTING?</h1>
                            <button>contact us today</button>
                        </div>
                    </section>
                    <section id='cards' className='flex relative'>
                        <div id='card' className='relative fdc'>
                            <figure className='relative fdc'>
                                <img src='https://zentech-it.com/wp-content/uploads/2017/06/project-2-300x200.jpg' alt='Card Image' />
                                <figcaption className='fdc'>
                                    <span className='relative'>01</span>
                                    <h2>Professional IT Support & Remote Hands</h2>
                                </figcaption>
                            </figure>
                            <article className='fdc gap'>
                                <p>In the event of system errors or downtime, money is lost for every minute. The Zentech IT team is dedicated to keeping our clients’ users active and minimizing downtime. Professional IT Support is critical in keeping your company working and productive.</p>
                                <p>We can act as your Remote Hands IT for your local branches or clients.</p>
                            </article>
                        </div>
                        <div id='card' className='relative fdc'>
                            <figure className='relative fdc'>
                                <img src='https://zentech-it.com/wp-content/uploads/2017/06/project-1-300x200.jpg' alt='Card Image' />
                                <figcaption className='fdc'>
                                    <span className='relative'>02</span>
                                    <h2>E-Commerce Consultancy</h2>
                                </figcaption>
                            </figure>
                            <article className='fdc gap'>
                                <p>Whether the client is making significant changes to their IT infrastructure, or if the client is setting up a new business in Qatar, a well-designed IT infrastructure is required to ensure smooth sailing. Our professional IT consultants are available to plan and implement relevant solutions.</p>
                            </article>
                        </div>
                        <div id='card' className='relative fdc'>
                            <figure className='relative fdc'>
                                <img src='https://zentech-it.com/wp-content/uploads/2017/06/project-7-300x200.jpg' alt='Card Image' />
                                <figcaption className='fdc'>
                                    <span className='relative'>03</span>
                                    <h2>Web Development & Desiging</h2>
                                </figcaption>
                            </figure>
                            <article className='fdc gap'>
                                <p>Our responsive website design services include hosting, email services, on-site SEO (Search Engine Optimization), Google indexing, XML Sitemaps, online shops, functional or informative website design, one pager website design, dedicated back-end maintenance to minimize security risks and expertly designed web elements that make your site enjoyable to view and explore.</p>
                            </article>
                        </div>
                        <div id='card' className='relative fdc'>
                            <figure className='relative fdc'>
                                <img src='https://zentech-it.com/wp-content/uploads/2017/06/project-4-300x200.jpg' alt='Card Image' />
                                <figcaption className='fdc'>
                                    <span className='relative'>04</span>
                                    <h2>Social Media Marketing</h2>
                                </figcaption>
                            </figure>
                            <article className='fdc gap'>
                                <p>
                                    Businesses are required to regularly communicate with their customers and Social Media Marketing is the perfect way to tell your story. We offer social media design and management to assist our clients in keeping in touch with their customers.</p>
                            </article>
                        </div>
                        <div id='card' className='relative fdc'>
                            <figure className='relative fdc'>
                                <img src='https://zentech-it.com/wp-content/uploads/2021/08/trader-using-bitcoin-crypto-payment-service-app-wi-YJ9M2ZM-scaled-300x200.jpg' alt='Card Image' />
                                <figcaption className='fdc'>
                                    <span className='relative'>05</span>
                                    <h2>Financial Technology (FinTech) Consultancy</h2>
                                </figcaption>
                            </figure>
                            <article className='fdc gap'>
                                <p>We combine knowledge of finance, technology, and consultancy. From going online to see financial transactions to apps that allow faster and more convenient  payments, FinTech is an emerging technology helps consumers or financial institutions deliver financial services in newer, faster ways than was traditionally available.</p>
                            </article>
                        </div>
                    </section>
                    <hr style={{ width: "100%", filter: "brightness(1.3)" }} />
                    <section id='reviews'>

                    </section>
                </div>
            </main>
        </div>
    );
};

export default Home;
