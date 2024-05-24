import React from 'react';
import TypedText from './TypedText';
import '../make-up/LandingContent.css';

const LandingContent = () => (
    <section id='landing-content' className='fdc'>
        <div id='part-1' className='faic'>
            <aside className='flex'>
                <h1>Unlock Your Coding Potential with Expert Coaching!</h1>
                <p>Welcome to our coding coaching platform, where we're dedicated to guiding you to mastery. Our personalized approach, tailored curriculum, and hands-on projects ensure you excel in today's tech landscape.</p>
                <p>Welcome to our coding coaching platform, where we're passionate about empowering you to reach your programming goals.</p>
            </aside>
            <figure>
                <img style={{ transform: "scaleX(-1)" }} src={`${process.env.PUBLIC_URL}/imgs/man.png`} alt='Image of A Man Doing Coding' />
            </figure>
        </div>
        <div id='part-2' className='faic'>
            <h1>looking for <TypedText strings={['REMOTE HANDS', 'IT CONSULTANCY', 'CLOUD SUPPORT', 'E-COMMERCE']} /> CONSULTING?</h1>
            <button>contact us today</button>
        </div>
    </section>
);

export default LandingContent;
