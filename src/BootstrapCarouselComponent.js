import React from "react";

import { Carousel } from 'react-bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';
import c1 from './j1.jpg';
import c2 from './j2.jpg';
import c3 from './m3.jpg';




class BootstrapCarouselComponent extends React.Component {

    render() {
        return (
            <div >
                <div className='container-fluid  ' style={{marginTop:"50px",borderRadius:"20px" , boxShadow:"0px, 0px,15px black" , height:"60%" , width:"60%"  , opacity:'0.7' , marginBottom:'30%'}}>
                    <div className="row">
                        <div>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <Carousel > 

                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={c1}
                                        alt="First slide"
                                        border-radius="20px"
                                    />
                                    <Carousel.Caption>
                                        <h3 className="text-light"></h3>
                                        <p className="text-light"></p>
                                    </Carousel.Caption>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={c2}
                                        alt="Second slide"
                                    /><br/>

                                    <Carousel.Caption>
                                        <h3 className="text-light"></h3>
                                        <p className="text-light"></p>
                                    </Carousel.Caption>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={c3}
                                        alt="Third slide"
                                    /><br/>
                                    <Carousel.Caption>
                                        <h3 className="text-light"></h3>
                                        <p className="text-light"></p>
                                    </Carousel.Caption>
                                </Carousel.Item>

                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}

export default BootstrapCarouselComponent;