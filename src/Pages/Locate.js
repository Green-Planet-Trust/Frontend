import React, { Component } from 'react'
import logo from './../logo.svg';
import Alerts from './../Components/Alerts'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Link from 'react-router-dom/Link'
import { Form, CardDeck } from 'react-bootstrap';
import truck_img from '../truck.jpg';


class Locate extends Component {
    componentDidMount() {
        // If you inspect the page and go to console you can see the output
        console.log("On Locate Page now")
    }

    state = {
        product: null
    }

    handleSearchSubmit(event) {
        event.preventDefault();
        const form = event.currentTarget;
        const barcode_id = form.elements[0].value;
        console.log("got barcode!");
        console.log(barcode_id);
        this.search(barcode_id)
    }

    search(barcode_id) {
       // Go to this url and get the response 
        fetch(`http://127.0.0.1:5000/v1/product?barcode_id=${barcode_id}`, {
            mode: 'cors',
            method: "GET",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Request-Headers": "*",
                "Access-Control-Allow-Headers": "*"
            }
        }).then(res => res.json()) // then convert to json 
        .then( // then do somethin with result or the error 
            (result) => {
                console.log("We heard something!!")
                console.log(result)
                this.setState({ product: result })
            },
            (error) => {
                console.log(error);
                console.log("ERROR!")
            }
        )
        this.render()
    }

    render() {
        const product = this.state.product;
        // contains the default react project imagery 
        return (
        <div className="App">
            <Link to="/">
                <Button variant="primary">Take me Home!</Button>
            </Link>
                <form onSubmit={e => this.handleSearchSubmit(e)}>
                    <Row>
                        <Col xs="auto">
                            <Form.Group controlId="barcode">
                                <Form.Control type="input" placeholder="Barcode" />
                            </Form.Group>
                        </Col>
                        <Col xs="auto">
                            <Button variant="primary" type="submit" block>
                                Search
                            </Button>
                        </Col>
                    </Row>
                </form>
                {product != null && product != undefined ? 
                    <div className="container">
                        <span>{product[0].category}</span>
                        <CardDeck>
                        <Card style={{ width: '18rem' }} text='dark'>
                        <Card.Img variant="top" src={truck_img} />
                        <Card.Body>
                            <Card.Title>Production</Card.Title>
                            <Card.Text>
                            CO2: {product[0].rating_data.CO2}
                            </Card.Text>
                            <Button variant="primary">Learn more</Button>
                        </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }} text='dark'>
                        <Card.Img variant="top" src={truck_img} />
                        <Card.Body>
                            <Card.Title>Transportation</Card.Title>
                            <Card.Text>
                            CO2: {product[0].rating_data.CO2}
                            </Card.Text>
                            <Button variant="primary">Learn more</Button>
                        </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }} text='dark'>
                        <Card.Img variant="top" src={truck_img} />
                        <Card.Body>
                            <Card.Title>Retail</Card.Title>
                            <Card.Text>
                            CO2: {product[0].rating_data.CO2}
                            </Card.Text>
                            <Button variant="primary">Learn more</Button>
                        </Card.Body>
                        </Card>
                        </CardDeck>
                    </div>
                 : null}
        </div>
        )
    }
}

export default Locate;