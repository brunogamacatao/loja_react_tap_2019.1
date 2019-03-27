import React, { Component } from 'react';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBMask, MDBView } from "mdbreact";
import ListaDeProdutos from './ListaDeProdutos';

class Home extends Component {
    render(){
        return (
            <>
            <MDBContainer>
                <MDBCarousel activeItem={1} length={3} showControls={true} showIndicators={true} className="z-depth-1">
                    <MDBCarouselInner>
                        <MDBCarouselItem itemId="1">
                            <MDBView>
                                <img className="w-200" src={process.env.PUBLIC_URL + '/slides/1.jpg'} alt="First slide" />
                                <MDBMask overlay="black-light" />
                            </MDBView>
                        </MDBCarouselItem>

                        <MDBCarouselItem itemId="2">
                            <MDBView>
                                <img className="w-200" src={process.env.PUBLIC_URL + '/slides/2.jpg'} alt="Second slide" />
                                <MDBMask overlay="black-strong" />
                            </MDBView>
                        </MDBCarouselItem>

                        <MDBCarouselItem itemId="3">
                            <MDBView>
                                <img className="w-200" src={process.env.PUBLIC_URL + '/slides/3.jpg'} alt="Third slide" />
                                <MDBMask overlay="black-slight" />
                            </MDBView>
                        </MDBCarouselItem>

                    </MDBCarouselInner>
                </MDBCarousel>
            </MDBContainer>

            <div class="m-3">
                <ListaDeProdutos/>
            </div>
            </>
        );
    }

}

export default Home;
