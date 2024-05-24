import React from 'react';
import Navbar from '../Navbar/Navbar';
import Topbar from '../Navbar/Topbar';
import LandingContent from './SubComponents/LandingContent';
import CardsSection from './SubComponents/CardsSection';
import Reviews from './SubComponents/Reviews';
import Footer from '../Footer/Footer';
import './make-up/Home.css';

const Home = () => {
    return (
        <div>
            <Topbar />
            <Navbar />
            <main className='fdc'>
                <img id='background' src={`${process.env.PUBLIC_URL}/imgs/bg.webp`} alt='Background Image Not Found' />
                <div id='content' className='fdc faic'>
                    <LandingContent />
                    <CardsSection />
                    <hr style={{ width: "100%", filter: "brightness(1.3)" }} />
                    <Reviews />
                    <Footer />
                </div>
            </main>
        </div>
    );
};

export default Home;