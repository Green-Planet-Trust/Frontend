import React, { Component } from 'react'
import Alerts from './../Components/Alerts'
import Button from 'react-bootstrap/Button'
import Link from 'react-router-dom/Link'
import Navbars from './../Components/Navbars'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import './../inform.css';

class Inform extends Component {
    // Contructor has to take props and pass it to super 
    constructor(props) {
        super(props);
        this.state = {
            UID: -1,
            carbon_footprint: -1
        };
    }

    componentDidMount() {
        console.log("On Inform Page now")
    }

    postUpdate(json_string) {
        fetch(`http://127.0.0.1:5000/v1/product?barcode_id=${this.state.UID}`, {
            mode: 'cors',
            method: "POST",
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
        this.setState({UID: barcode_id, carbon_footprint: carbon_footprint}, function() {
        this.postUpdate(JSON.stringify(this.state)); });
    }

    render() {
        return (
        <div className="Inform">
            <Navbars />
            <br></br>
            <h1>This is the inform page</h1>
            <br></br>
            <h3>This is where a supplier could update carbon emmissions</h3>
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

export default Inform;