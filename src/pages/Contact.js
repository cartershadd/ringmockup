import React, {Component} from 'react';
import Form from "react-bootstrap/Form";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

class Contact extends Component {
    render() {
        return (
            <Form>
                <div className="contact">
                    <h2>Contact</h2>
                    <div>
                        <form action="/action_page.php">
                            <label>First Name</label>
                            <input type="text" id="fname" name="firstname" placeholder="Your first name..." />

                            <label>Last Name</label>
                            <input type="text" id="lname" name="lastname" placeholder="Your last name..." />


                            <label>Email</label>
                            <input type="email" id="email" name="email" placeholder="Your email" />


                            <label>Subject</label>
                            <textarea id="subject" name="subject" placeholder="Subject"></textarea>


                            <label>Message</label>
                            <textarea id="text" name="text" placeholder="Write something..."></textarea>
                            <input type="submit" value="Submit" className="submit"/>
                        </form>
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
            </Form>
        );
    }
}

export default Contact;
