import React, {Component} from 'react';
import Carousel from "react-bootstrap/Carousel";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

class Nothing extends Component {
    render() {
        return (
            <div>
                <section className="product-list">
                    <div className="list">
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/images/fractal1.png"
                                    alt="First slide"
                                    className="product-img"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/images/fractal9.png"
                                    alt="2 slide"
                                    className="product-img"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/images/fractal2.png"
                                    alt="Third slide"
                                    className="product-img"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/images/fractal7.png"
                                    alt="4 slide"
                                    className="product-img"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/images/fractal3.png"
                                    alt="5 slide"
                                    className="product-img"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/images/fractal10.png"
                                    alt="6 slide"
                                    className="product-img"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </section>

                <footer>
                    <CardGroup>
                        <Card.Img className="footer-img" variant="top" src="/images/fractal10.png"/>
                        <Card>
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Body>
                                <Form className="search-form" inline>
                                    <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                                    <Button type="submit">Submit</Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                    <Card.Footer>
                        <small className="text-muted">Copyright Bacon 2020</small>
                    </Card.Footer>
                </footer>
            </div>
        );
    }
}

export default Nothing;