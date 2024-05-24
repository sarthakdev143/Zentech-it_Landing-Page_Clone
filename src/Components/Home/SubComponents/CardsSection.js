import React from 'react';
import Card from './Card';
import '../make-up/CardsSection.css';

const cardsData = [
    {
        image: 'https://zentech-it.com/wp-content/uploads/2017/06/project-2-300x200.jpg',
        number: '01',
        title: 'Professional IT Support & Remote Hands',
        content: <>
            <p>Downtime can significantly impact your business operations and profitability. Our dedicated IT support team ensures minimal disruption by providing proactive monitoring and rapid response solutions. Keep your systems running smoothly with our professional IT support services.</p>
            <p>We offer Remote Hands IT services to efficiently manage your local branches or clients.</p>
        </>
    },
    {
        image: 'https://zentech-it.com/wp-content/uploads/2017/06/project-1-300x200.jpg',
        number: '02',
        title: 'E-Commerce Consultancy',
        content: <p>Launching a new business or upgrading your IT infrastructure in Qatar? Our expert consultants design and implement comprehensive IT solutions tailored to your e-commerce needs, ensuring a seamless and scalable online presence.</p>
    },
    {
        image: 'https://zentech-it.com/wp-content/uploads/2017/06/project-7-300x200.jpg',
        number: '03',
        title: 'Web Development & Designing',
        content: <>
            <p>Enhance your online visibility with our responsive web design services. We offer a full range of solutions, including hosting, SEO, Google indexing, XML Sitemaps, e-commerce sites, and ongoing maintenance to safeguard your site against security risks while providing an engaging user experience.</p>
            <p>Our designs are not only visually appealing but also optimized for performance and user engagement.</p>
        </>
    },
    {
        image: 'https://zentech-it.com/wp-content/uploads/2017/06/project-4-300x200.jpg',
        number: '04',
        title: 'Social Media Marketing',
        content: <p>Connect with your audience and tell your brand’s story through effective social media marketing. Our services include social media strategy, content creation, and management, ensuring your business stays relevant and engaging to your customers.</p>
    },
    {
        image: 'https://zentech-it.com/wp-content/uploads/2021/08/trader-using-bitcoin-crypto-payment-service-app-wi-YJ9M2ZM-scaled-300x200.jpg',
        number: '05',
        title: 'Financial Technology (FinTech) Consultancy',
        content: <>
            <p>Stay ahead in the rapidly evolving financial landscape with our FinTech consultancy. We provide insights and solutions to leverage technology for more efficient financial services, from secure online transactions to innovative payment systems.</p>
            <p>Our expertise helps you navigate the complexities of FinTech, ensuring you can offer cutting-edge solutions to your customers.</p>
        </>
    }
];

const CardsSection = () => (
    <section id='cards' className='flex relative'>
        {cardsData.map((card, index) => (
            <Card key={index} image={card.image} number={card.number} title={card.title}>
                {card.content}
            </Card>
        ))}
    </section>
);

export default CardsSection;