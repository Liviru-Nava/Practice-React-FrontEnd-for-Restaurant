import React from 'react';	
import {Container} from "reactstrap";
import Slider from "react-slick";
import sliderData from "../../assets/fake-data/slider";
import './HeroSlider.css';

const HeroSlider =() => {
    return <section>
            <Container>
                <Slider>
                    {
                        sliderData.map(item => (
                            <div>
                                <div className="slider_wrapper d-flex align-items-center justify-content-between pt-5">
                                    <div className="slider_content w-50 ps-2">
                                        <h2 id="h2">{item.title}</h2>
                                        <p>{item.desc}</p>
                                        <button className="btn">Explore Food</button>
                                    </div>
                                    <div className="slider_image w-50">
                                        <img src={item.imgUrl} alt="" className="w-100"></img>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </Container>
    </section>
}

export default HeroSlider;