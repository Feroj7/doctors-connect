import React from 'react';
import { Container } from 'react-bootstrap';
import Slider from "react-slick";
import './Testimonial.css';


const Testimonial = () => {

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="mt-5 p-5">
            <div>
                <h1>Testimonial</h1>
                <p>What people say about us and our services</p>
                <hr />
            </div>
            <Container className="mt-5">
                <Slider {...settings} className="testimonial">
                    <div className="testimonial-1 p-2">
                        <img className="img-fluid m-auto" src="https://randomuser.me/api/portraits/women/32.jpg" alt="" />
                        <p className="mt-3">This is the best service in dhaka city.I am benefitted from this.</p>
                        <h5 className="mb-3">Maureen Perkins</h5>
                    </div>
                    <div className="testimonial-2 p-2">
                        <img className="img-fluid m-auto" src="https://randomuser.me/api/portraits/men/15.jpg" alt="" />
                        <p className="mt-3">Their service is just awesome.They are very helpful.</p>
                        <h5 className="mb-3">Tommy Hall</h5>
                    </div>
                    <div className="testimonial-3 p-2">
                        <img className="img-fluid m-auto" src="https://randomuser.me/api/portraits/men/58.jpg" alt="" />
                        <p className="mt-3">I really found this website helpful.</p>
                        <h5 className="mb-3">Cecil Cruz</h5>
                    </div>
                    <div className="testimonial-4 p-2">
                        <img className="img-fluid m-auto" src="https://randomuser.me/api/portraits/women/63.jpg" alt="" />
                        <p className="mt-3">I was sick and I used their service and their services are great.</p>
                        <h5 className="mb-3">Faysal Ahmed</h5>
                    </div>
                </Slider>
            </Container>
        </div>
    );
};

export default Testimonial;