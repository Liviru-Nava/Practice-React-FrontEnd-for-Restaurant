import {Container, Row, Col} from "reactstrap";
import './choose-us.css';
import pastaImg from "../../assets/images/pasta.png";

const ChooseUs = () => {
    return(
        <section>
            <Container>
                <Row>
                    <Col lg='6'>
                        <img src={pastaImg} alt="" className="w-100"/>
                    </Col>
                    <Col lg='6'>
                        <div className="choose_content">
                            <h4>Who we are?</h4>
                            <h2 id="h2">Take a look at the benefits we offer you</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam eos delectus praesentium, nemo repudiandae sequi aspernatur error qui culpa voluptatem soluta dolore consequuntur modi laboriosam tempora laborum necessitatibus! Ducimus, placeat. Libero laudantium ratione, eligendi officia quisquam ducimus nulla adipisci maxime, nihil sapiente iusto earum saepe facere doloremque sed harum at!</p>
                        </div>
                        <div className="features mt-4">
                            <div className="feature1 d-flex align-items-center gap-5">
                                <div className="single_feature">
                                    <span>
                                        <i className="ri-truck-line"></i>
                                    </span>
                                    <h6>Free Home Delivery</h6>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, hic!
                                    </p>
                                </div>
                                <div className="single_feature">
                                    <span className="feature_icon_2">
                                        <i className="ri-money-dollar-circle-line"></i>
                                    </span>
                                    <h6>Free Cash back</h6>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, hic!
                                    </p>
                                </div>
                            </div>
                            <div className="feature1 d-flex align-items-center gap-5 mt-3">
                                <div className="single_feature">
                                    <span className='feature_icon_3'>
                                        <i className="ri-truck-line"></i>
                                    </span>
                                    <h6>Free Home Delivery</h6>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, hic!
                                    </p>
                                </div>
                                <div className="single_feature">
                                    <span className="feature_icon_4">
                                        <i className="ri-money-dollar-circle-line"></i>
                                    </span>
                                    <h6>Free Cash back</h6>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, hic!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ChooseUs