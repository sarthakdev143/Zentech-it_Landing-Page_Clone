import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import '../make-up/Reviews.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Reviews = () => {
    const [expanded, setExpanded] = useState({});
    const sliderRef = useRef();

    const toggleReadMore = (index) => {
        setExpanded((prevState) => ({
            ...prevState,
            [index]: !prevState[index]
        }));
    };

    const next = () => {
        sliderRef.current.slickNext();
    };

    const previous = () => {
        sliderRef.current.slickPrev();
    };

    const reviewsData = [
        {
            name: 'Alice Johnson',
            date: '19-05-2024',
            text: 'The coding bootcamp was an amazing experience. The instructors were knowledgeable and always available to help. The curriculum was well-structured and covered a wide range of topics. I especially enjoyed the hands-on projects which helped me build a strong portfolio. Highly recommend!',
        },
        {
            name: 'Michael Brown',
            date: '18-05-2024',
            text: 'I learned so much in such a short period. The intensive training and real-world projects prepared me for my new job as a web developer. The staff was incredibly supportive, and the networking opportunities were invaluable. Definitely worth the investment.',
        },
        {
            name: 'Sophia Davis',
            date: '17-05-2024',
            text: 'Fantastic program! The curriculum is up-to-date with the latest industry trends. The instructors are passionate and engaging. The career services team was instrumental in helping me land my first tech job. Would recommend to anyone looking to switch careers.',
        },
        {
            name: 'James Wilson',
            date: '16-05-2024',
            text: 'This bootcamp exceeded my expectations. The small class sizes and one-on-one mentorship provided a personalized learning experience. The projects were challenging but rewarding, and I gained a deep understanding of full-stack development. Great community and support.',
        },
        {
            name: 'Emily Clark',
            date: '15-05-2024',
            text: 'A transformative experience. The curriculum is rigorous, but the instructors and TAs are always there to help. The job placement assistance was top-notch, and I was able to secure a developer position shortly after graduation. Highly recommend for anyone serious about a career in tech.',
        }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <section id='reviews' className='faic'>
            <aside className='fdc center1 faic'>
                <h1>Excellent</h1>
                <span className='rating'>
                    <span className="material-symbols-outlined">star</span>
                    <span className="material-symbols-outlined">star</span>
                    <span className="material-symbols-outlined">star</span>
                    <span className="material-symbols-outlined">star</span>
                    <span className="material-symbols-outlined">star</span>
                </span>
                <p>Based On <b>5 Reviews</b></p>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png' alt='Google Image' />
            </aside>
            <div id='carousel-wrapper' className='faic'>
                <div className="navigation-button">
                    <button onClick={previous}>
                        <span class="material-symbols-outlined">
                            chevron_left
                        </span>
                    </button>
                </div>
                <Slider {...settings} ref={sliderRef}>
                    {reviewsData.map((review, index) => (
                        <div key={index} className={`review fdc ${expanded[index] ? 'expanded' : ''}`}>
                            <div className='review-head faic'>
                                <div className='profile-details faic'>
                                    <img className='profile-pic' src='https://images.unsplash.com/placeholder-avatars/extra-large.jpg?bg=fff&crop=faces&dpr=1&h=150&w=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' alt='Profile Picture' />
                                    <div className='fdc'>
                                        <h3>{review.name}</h3>
                                        <span>{review.date}</span>
                                    </div>
                                </div>
                                <img className='google-logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png' alt='Google Logo' />
                            </div>
                            <div className='review-body fdc s-gap'>
                                <span className='rating faic'>
                                    <span className="material-symbols-outlined">star</span>
                                    <span className="material-symbols-outlined">star</span>
                                    <span className="material-symbols-outlined">star</span>
                                    <span className="material-symbols-outlined">star</span>
                                    <span className="material-symbols-outlined">star</span>
                                </span>
                                <p className={`review-text ${expanded[index] ? 'expanded' : ''}`}>
                                    {review.text}
                                </p>
                                <button className='read-more' onClick={() => toggleReadMore(index)}>
                                    {expanded[index] ? 'Show Less' : 'Read More'}
                                </button>
                            </div>
                        </div>
                    ))}
                </Slider>
                <div className="navigation-button">
                    <button onClick={next}>
                        <span class="material-symbols-outlined">
                            chevron_right
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Reviews;