import React, {Component} from 'react';
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

class About extends Component {
    render() {
        return (
            <div className="about-body">
                <div className="about-top">
                    <div className="img-div">
                        <img src="/images/fractal9.png" alt="top" className="top-img"/>
                    </div>
                    <div className="about-top-words">
                        <h1>Bacon Time</h1>
                        <p>
                            Fatback ribeye meatball brisket spare ribs capicola deserunt kevin flank tail picanha
                            nostrud lorem boudin eu.
                            Pariatur andouille laborum exercitation. Salami nisi adipisicing cillum.
                            Bresaola tenderloin deserunt bacon dolore velit.
                        </p>
                    </div>
                </div>

                <div className="mission-div">
                    <h1>Our Mission</h1>
                    <p className="mission-font">
                        Ham alcatra short ribs pancetta biltong,
                        ground round bacon spare ribs kielbasa salami shankle.
                        Buffalo alcatra pancetta, swine short loin kevin short ribs shank meatloaf turkey bacon
                        chislic
                        fatback.
                        Fatback cupim tongue brisket, jowl kevin pancetta.
                        Doner salami ball tip pork shoulder kielbasa alcatra turkey pastrami venison filet
                        mignon. <hr/>
                        Bresaola biltong prosciutto ribeye.
                        Chislic doner landjaeger filet mignon capicola pig.
                        Duis andouille jerky voluptate, bresaola officia chuck turducken veniam flank.
                        Bacon andouille officia sunt kevin picanha chicken filet mignon prosciutto buffalo ea id turducken pancetta.
                        Ut et veniam pig flank chuck sausage culpa.
                        Bresaola frankfurter proident ut bacon biltong minim sirloin beef.
                        <hr/>
                        Ea ullamco strip steak jerky short ribs. Short ribs turkey labore landjaeger shankle minim. Strip steak minim pastrami, dolor prosciutto pork chop corned beef. Cow jerky leberkas ipsum sed.
                        In alcatra est, short ribs chicken nulla boudin corned beef nostrud dolor beef cillum pig in.
                    </p>
                </div>

                <div className="inner-body">
                    <div className="img-div">
                        <img src="/images/fractal7.png" alt="fractal" className="about-img"/>
                    </div>
                    <div className="contact-info-div">
                        <div className="about-inner-body">
                            <h2>Contact Us</h2>
                            <p>Excepteur cillum adipisicing sint?</p>

                            <div>
                                <h4>Bacon Bacon</h4>
                                <p>
                                    Bacon
                                </p>
                            </div>

                            <div>
                                <h4>Bacon Bacon</h4>
                                <p>
                                    Bacon
                                </p>
                            </div>

                            <div>
                                <h4>Bacon Bacon</h4>
                                <p>
                                    Bacon
                                </p>
                            </div>

                            <div>
                                <h4>Bacon Bacon</h4>
                                <p>
                                    Bacon
                                </p>
                            </div>

                            <div>
                                <h4>Bacon Bacon</h4>
                                <p>
                                    Bacon
                                </p>
                            </div>

                            <div>
                                <h4>Bacon Bacon</h4>
                                <p>
                                    Bacon
                                </p>
                            </div>
                            <div>
                                <h4>Bacon Bacon</h4>
                                <p>
                                    Bacon
                                </p>
                            </div>

                            <div>
                                <h4>Bacon Bacon</h4>
                                <p>
                                    Bacon
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

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

export default About;
