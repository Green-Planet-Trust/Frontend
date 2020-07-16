import React, { Component } from 'react'
import logo from './../logo.svg';
import Alerts from './../Components/Alerts'
import Navbars from './../Components/Navbars'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import Link from 'react-router-dom/Link'
import { Form, CardDeck } from 'react-bootstrap';
import truck_img from '../truck.jpg';
import './../search.css';
import retail_img from '../retail.jpg';
import prod from '../production.jpg';
import trans from '../transportation.jpg';

class Search extends Component {
    componentDidMount() {
        // If you inspect the page and go to console you can see the output
        console.log("On Search Page now")
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
        const popover_prod = (
        <Popover id="popover-basic">
            <Popover.Title as="h3">Where does CO2 come from in production of goods?</Popover.Title>
            <Popover.Content>
            In manufacturing, there are 3 main ways energy is used: fuel, electricity, and steam. This energy is needed for heating, cooling, machinery, chemical reactions, HVAC, and other processses. CO2 and other greenhouse gases are released in combustion of natural gas, coal, and other energy sources.
            </Popover.Content>
        </Popover>
        );
        // https://www.energy.gov/sites/prod/files/2013/11/f4/energy_use_and_loss_and_emissions.pdf
        const popover_transp = (
        <Popover id="popover-basic">
            <Popover.Title as="h3">Where does CO2 come from in transportation of goods?</Popover.Title>
            <Popover.Content>
            Imports and exports of goods and their supply chains are a large source of carbon emissions. Road transportation accounts for more than half of the transportation emmissions. Air transportation is the least efficient, while maritime shipping is the most efficient. Burning gasoline and diesel for these modes of transportation releases CO2.
            </Popover.Content>
        </Popover>
        );
        // https://www.itf-oecd.org/sites/default/files/docs/cop-pdf-06.pdf
        const popover_retail = (
        <Popover id="popover-basic">
            <Popover.Title as="h3">Where does CO2 come from in retail of goods?</Popover.Title>
            <Popover.Content>
            The impact of retail is often not as significant as production and transportation, but it is still important to consider. Heating, A/C, lighting, cooking, refrigeration, and ventilation are the main uses of energy in stores. Oil, gas, and refrigerants produce carbon emissions. 
            </Popover.Content>
        </Popover>
        );
        // https://ec.europa.eu/environment/industry/retail/pdf/Issue%20Paper%206.pdf
        // contains the default react project imagery 
        return (
        <div className="App">
            <Navbars />
            <br></br>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
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
            </div>
            {product !== null && product !== undefined ? 
                <div className="container">
                    <h1>{product[0].CurrentCompany}</h1>
                    <h3>{product[0].description}</h3>
                    <h3>Total carbon footprint: {product[0].CarbonFootprint}</h3>
                    <CardDeck>
                    <Card style={{ width: '18rem' }} text='dark'>
                    <Card.Img variant="top" src={prod} />
                    <Card.Body>
                        <Card.Title>Production</Card.Title>
                        <Card.Text>
                        CO2: {product[0].Stages.Production}
                        </Card.Text>
                        <OverlayTrigger trigger="click" placement="bottom" overlay={popover_prod}>
                            <Button variant="primary">Learn more</Button>
                        </OverlayTrigger>
                    </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }} text='dark'>
                    <Card.Img variant="top" src={trans} />
                    <Card.Body>
                        <Card.Title>Transportation</Card.Title>
                        <Card.Text>
                        CO2: {product[0].Stages.Transportation}
                        </Card.Text>
                        <OverlayTrigger trigger="click" placement="bottom" overlay={popover_transp}>
                            <Button variant="primary">Learn more</Button>
                        </OverlayTrigger>
                    </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }} text='dark'>
                    <Card.Img variant="top" src={retail_img} />
                    <Card.Body>
                        <Card.Title>Retail</Card.Title>
                        <Card.Text>
                        CO2: {product[0].Stages.Retail}
                        </Card.Text>
                        <OverlayTrigger trigger="click" placement="bottom" overlay={popover_retail}>
                            <Button variant="primary">Learn more</Button>
                        </OverlayTrigger>
                    </Card.Body>
                    </Card>
                    </CardDeck>

                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
                : null}
        </div>
        )
    }
}

export default Search;