import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FormControl from "react-bootstrap/FormControl";
import CardGroup from "react-bootstrap/CardGroup";

class Home extends Component {
    render() {
        return (
            <div className="main-body">
                <section id="home-banner">
                    <div className="home-hero">
                        <Container>
                            <Row>
                                <Col xs={12} md={8}>
                                    <div className="home-top">
                                        <h1>Short ribs</h1>
                                        <p>Spicy jalapeno bacon ipsum dolor amet doner capicola prosciutto brisket.
                                            Rump prosciutto short ribs beef ribs t-bone capicola.</p>
                                        <Button variant="secondary">Frankfurter</Button>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </section>

                <section id="interstitials">
                    <Container>
                        <Row>
                            <Col xs={12} sm={6} className="left-block">
                                <div className="block-container1">
                                    <div className="copy-container">
                                        <h4>
                                            Meatloaf
                                        </h4>
                                        <p>ribeye jowl ut cillum </p>
                                        <Button>Bacon</Button>
                                    </div>
                                </div>
                            </Col>

                            <Col xs={12} sm={6} className="right-block">
                                <div className="block-container2">
                                    <div className="copy-container">
                                        <h4>
                                            Spicy jalapeno bacon
                                        </h4>
                                        <p>Bacon ipsum dolor amet pariatur</p>
                                        <Button>Bacon</Button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section id="featured-products">
                    <Container>
                        <Row>
                            <Col xs={12} sm={6} className="left-block">
                                <div className="block-container1">
                                    <div className="copy-container">
                                        <h4>
                                            Brisket ad burgdoggen
                                        </h4>
                                        <p>nostrud chuck</p>
                                        <Button>Bacon</Button>
                                    </div>
                                </div>
                            </Col>

                            <Col xs={12} sm={6} className="right-block">
                                <div className="block-container2">
                                    <div className="copy-container">
                                        <h4>
                                            Qui ad turkey sed
                                        </h4>
                                        <p>Pariatur andouille laborum exercitation.</p>
                                        <Button>Bacon</Button>
                                    </div>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={12} sm={6} className="left-block">
                                <div className="block-container1">
                                    <div className="copy-container">
                                        <h4>
                                            Burgdoggen
                                        </h4>
                                        <p>officia exercitation pork laboris tail.</p>
                                        <Button>Bacon</Button>
                                    </div>
                                </div>
                            </Col>

                            <Col xs={12} sm={6} className="right-block">
                                <div className="block-container2">
                                    <div className="copy-container">
                                        <h4>
                                            Tenderloin
                                        </h4>
                                        <p>Hamburger aliquip</p>
                                        <Button>Bacon</Button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
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

export default Home;