import React, {Component} from 'react';
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

class Something extends Component {
    render() {
        return (
            <div className="something-div">
                <section className="something-hero">
                    <div className="something-top-words">
                        <h1>Oink Oink</h1>
                        <Button className="button-something" variant="danger">Oink!</Button>
                        <Button className="button-something" variant="warning">Oink!</Button>
                    </div>
                    <div>
                        <img src="/images/fractal9.png" alt="fractal" className="img-hero-top"/>
                    </div>
                </section>

                <section className="wrapper">
                    <p className='p'>
                        Chicken pork belly landjaeger drumstick.
                        Doner short ribs turducken bacon salami chicken.
                        Swine fatback buffalo hamburger.
                        Beef turkey tongue kevin doner sirloin.
                    </p>
                    <img src="/images/fractal2.png" alt="img" className="grid-img"/>
                </section>

                <section className="wrapper">
                    <img src="/images/fractal2.png" alt="img" className="grid-img"/>
                    <p className='p'>
                        Chicken pork belly landjaeger drumstick.
                        Doner short ribs turducken bacon salami chicken.
                        Swine fatback buffalo hamburger.
                        Beef turkey tongue kevin doner sirloin.
                    </p>
                </section>

                <section className="wrapper">
                    <p className='p'>
                        Chicken pork belly landjaeger drumstick.
                        Doner short ribs turducken bacon salami chicken.
                        Swine fatback buffalo hamburger.
                        Beef turkey tongue kevin doner sirloin.
                    </p>
                    <img src="/images/fractal2.png" alt="img" className="grid-img"/>
                </section>

                <section className="wrapper">
                    <img src="/images/fractal2.png" alt="img" className="grid-img"/>
                    <p className='p'>
                        Chicken pork belly landjaeger drumstick.
                        Doner short ribs turducken bacon salami chicken.
                        Swine fatback buffalo hamburger.
                        Beef turkey tongue kevin doner sirloin.
                    </p>
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

export default Something;
