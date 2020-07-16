import React, { Component } from 'react'
import Alerts from './../Components/Alerts'
import Button from 'react-bootstrap/Button'
import Link from 'react-router-dom/Link'
import Navbars from './../Components/Navbars'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import './../update.css';

class Update extends Component {
    // Contructor has to take props and pass it to super 
    constructor(props) {
        super(props);
        this.state = {
            UID: -1,
            CarbonFootprint: -1,
            CurrentCompany: "",
            isRecycleable: false,
            Stages: {
                Production: -1,
                Transportation: -1,
                Retail: -1
            },
            Date: ""
        };
    }

    componentDidMount() {
        console.log("On Update Page now")
    }

    postUpdate(method, json_string) {
        fetch(`http://127.0.0.1:5000/v1/product/${this.state.UID}`, {
            mode: 'cors',
            method: method,
            body: json_string,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Request-Headers": "*",
                "Access-Control-Allow-Headers": "*"
            }
        }).then(function(res) {
            console.log(res);
            return res.json();
        });
    }

    tryGet(barcode_id, json_string) {
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
                console.log(result);
                this.postUpdate("PUT", json_string);
            },
            (error) => {
                this.postUpdate("POST", json_string);
            }
        )
    }

    handleSupplierUpdateSubmit(event) {
        event.preventDefault();
        const form = event.currentTarget;
        const company_name = form.elements[0].value;
        const sector = form.elements[1].value;
        const product = form.elements[2].value;
        const barcode_id = Number(form.elements[3].value);
        const carbon_footprint = Number(form.elements[4].value);
        const production = Number(form.elements[5].value);
        const transportation = Number(form.elements[6].value);
        const retail = Number(form.elements[7].value);
        const is_recyclable = form.elements[8].value;
        this.setState({UID: barcode_id, CarbonFootprint: carbon_footprint, 
            CurrentCompany: company_name, isRecycleable: is_recyclable, 
            Stages: {Production: production, Transportation: transportation, Retail: retail}, 
            Date: "", description: product}, function() {
            const json_string = JSON.stringify(this.state);
            console.log(json_string);
            this.tryGet(barcode_id, json_string); 
        });
    }

    render() {
        return (
        <div className="Update">
            <Navbars />
            <br></br>
            <h1>Update</h1>
            <h3>Enter a new product or update the carbon emissions of an existing product.</h3>
            <Card className="supplier_update">
                <form onSubmit={e => this.handleSupplierUpdateSubmit(e)}>
                    <Form.Group controlId="company_name">
                        <Form.Control type="input" placeholder="Company Name" />
                    </Form.Group>
                    <Form.Group controlId="sector">
                        <Form.Control type="input" placeholder="Sector" />
                    </Form.Group>
                    <Form.Group controlId="product">
                        <Form.Control type="input" placeholder="Product" />
                    </Form.Group>
                    <Form.Group controlId="barcode_id">
                        <Form.Control type="input" placeholder="Barcode ID" />
                    </Form.Group>
                    <Form.Group controlId="carbon_footprint">
                        <Form.Control type="input" placeholder="Total Carbon Footprint" />
                    </Form.Group>
                    <Row>
                        <Col>
                            <Form.Group controlId="production">
                                <Form.Control type="input" placeholder="Production" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="transportation">
                                <Form.Control type="input" placeholder="Transportation" />
                            </Form.Group>
                        </Col>
                    <Col>
                    <Form.Group controlId="retail">
                        <Form.Control type="input" placeholder="Retail" />
                    </Form.Group></Col>
                    </Row>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Recyclable?" />
                    </Form.Group>
                    <Button variant="primary" type="submit" block>
                        Submit
                    </Button>
                </form>
            </Card>

        </div>
        )
    }
}

export default Update;