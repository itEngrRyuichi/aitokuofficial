import React, { Component, Fragment } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import ClientNavigation from '../components/clientNavigation.component';
import Footer from '../components/footer.component';
import Head from 'next/head';

export default class Facility extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {
        return (
            <Fragment>
                <Head>
                    <title>ゲストハウス愛徳 | 館内施設</title>
                    <meta name="title" content="ゲストハウス愛徳 | 館内施設" />
                </Head>
                <div className="main">
                    <ClientNavigation
                        animated={false}
                        page={'facility'} />
                    <h1 className="main-title text-center">お部屋の紹介</h1>
                    <div className="facility-wrapper py-4">
                        <div className="row pb-2 washitsu">
                            <div className="offset-3 col-3">
                                <h1 className="room-title p-2">
                                    和室
                                </h1>
                                <Carousel fade interval={2600} className="pl-4">
                                    <Carousel.Item>
                                        <span className="blur">
                                            <img
                                            className="d-block w-100"
                                            src="/images/main/washitsu0.jpg"
                                            alt="First slide"
                                            />
                                        </span>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <span className="blur">
                                            <img
                                            className="d-block w-100"
                                            src="/images/main/washitsu001.jpg"
                                            alt="Second slide"
                                            />
                                        </span>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <span className="blur">
                                            <img
                                            className="d-block w-100"
                                            src="/images/main/amenity.jpg"
                                            alt="Third slide"
                                            />
                                            </span>
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                            <div className="col-3">
                                <p className="room-contents pt-4">
                                    
                                </p>
                            </div>
                        </div>
                        <div className="row pb-2 youshitsu">
                            <div className="offset-3 col-3">
                                <h1 className="room-title p-2">
                                    洋室
                                </h1>
                                <Carousel fade interval={2400} className="pl-4">
                                    <Carousel.Item>
                                        <span className="blur">
                                            <img
                                            className="d-block w-100"
                                            src="/images/main/youshitsu1.jpg"
                                            alt="First slide"
                                            />
                                        </span>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <span className="blur">
                                            <img
                                            className="d-block w-100"
                                            src="/images/main/youshitsu2.jpg"
                                            alt="Second slide"
                                            />
                                        </span>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <span className="blur">
                                            <img
                                            className="d-block w-100"
                                            src="/images/main/amenity.jpg"
                                            alt="Third slide"
                                            />
                                            </span>
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                        </div>
                        <div className="row pb-4 amenity">
                            <div className="offset-3 col-3">
                                <h1 className="room-title p-2">
                                    アメニティー
                                </h1>
                                <Carousel fade interval={2400} className="pl-4">
                                    <Carousel.Item>
                                        <span className="blur">
                                            <img
                                            className="d-block w-100"
                                            src="/images/main/amenity2.jpg"
                                            alt="Third slide"
                                            />
                                            </span>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <span className="blur">
                                            <img
                                            className="d-block w-100"
                                            src="/images/main/amenity.jpg"
                                            alt="Third slide"
                                            />
                                            </span>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <span className="blur">
                                            <img
                                            className="d-block w-100"
                                            src="/images/main/amenity2.jpg"
                                            alt="Third slide"
                                            />
                                            </span>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <span className="blur">
                                            <img
                                            className="d-block w-100"
                                            src="/images/main/amenity3.jpg"
                                            alt="Third slide"
                                            />
                                            </span>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <span className="blur">
                                            <img
                                            className="d-block w-100"
                                            src="/images/main/amenity4.jpg"
                                            alt="Third slide"
                                            />
                                            </span>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <span className="blur">
                                            <img
                                            className="d-block w-100"
                                            src="/images/main/amenity5.jpg"
                                            alt="Third slide"
                                            />
                                            </span>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <span className="blur">
                                            <img
                                            className="d-block w-100"
                                            src="/images/main/amenity6.jpg"
                                            alt="Third slide"
                                            />
                                            </span>
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </Fragment>
        );
    }
}