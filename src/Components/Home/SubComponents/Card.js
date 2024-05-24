import React from 'react';

const Card = ({ image, number, title, children }) => (
    <div id='card' className='relative fdc'>
        <figure className='relative fdc'>
            <img src={image} alt='Card Image' />
            <figcaption className='fdc'>
                <span className='relative'>{number}</span>
                <h2>{title}</h2>
            </figcaption>
        </figure>
        <article className='fdc gap'>
            {children}
        </article>
    </div>
);

export default Card;
