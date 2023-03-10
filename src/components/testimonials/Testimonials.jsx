
import React from 'react'
import {Container, Row, Col } from 'reactstrap'
import './testimonials.css'

import testimonialsImg from '../../assets/images/review1.png'
import Slider from 'react-slick'

const Testimonials = () => {

    const settings = {
        infinite:true,
        speed:500,
        slidesToShow:1,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed:3000

    }


  return <section>
    <Container>
        <Row >
            <Col lg='8' sm='12' md='12' className='m-auto'>
                <div className="slider__wrapper d-flex align-items-center gap-5">
                    <div className="slider__content w-50">
                    <h2 className='mb-4'>What our customers are saying</h2>
                <Slider {...settings}>
                    <div>
                        <div className="single__testimonial">
                            <p className="review__content">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni illum cumque ratione repudiandae corporis ducimus perspiciatis doloribus animi alias dolorum, ad, inventore magnam aliquam molestiae corrupti repellat voluptatem. Eos, provident!
                            </p>
                            <h6>Jhon Doe</h6>
                            <p>Web Developer</p>
                        </div>
                    </div>

                    <div>
                        <div className="single__testimonial">
                            <p className="review__content">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni illum cumque ratione repudiandae corporis ducimus perspiciatis doloribus animi alias dolorum, ad, inventore magnam aliquam molestiae corrupti repellat voluptatem. Eos, provident!
                            </p>
                            <h6>Jhon Doe</h6>
                            <p>Web Developer</p>
                        </div>
                    </div>

                    <div>
                        <div className="single__testimonial">
                            <p className="review__content">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni illum cumque ratione repudiandae corporis ducimus perspiciatis doloribus animi alias dolorum, ad, inventore magnam aliquam molestiae corrupti repellat voluptatem. Eos, provident!
                            </p>
                            <h6>Jhon Doe</h6>
                            <p>Web Developer</p>
                        </div>
                    </div>
                </Slider>
                </div>
                <div className="slider__img w-50">
                <img src={testimonialsImg} alt="slider-img"  />
                </div>  
                    </div>

                   
            </Col>
        </Row>
    </Container>
  </section>
}

export default Testimonials
