import React, { Component } from 'react'
import Alerts from './../Components/Alerts'
import Button from 'react-bootstrap/Button'
import Link from 'react-router-dom/Link'

class Inform extends Component {
    // Contructor has to take props and pass it to super 
    constructor(props) {
        super(props);
        this.state = {
            info: null,
        };
    }

    componentDidMount() {
        console.log("On Inform Page now")

        // Barcode ID to look up 
        let barcode_id = "0125551234508"

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
            },
            (error) => {
                console.log(error);
                console.log("ERROR!")
            }
        )
    }

    render() {
        return (
        <div className="Inform">
            <Alerts />
            <Link to="/">
                <Button variant="primary">Take me Home!</Button>{' '}
            </Link>
            <br></br>
            <h1>This is the inform page</h1>
            <br></br>
            <h3>This is where a supplier could update carbon emmissions</h3>
        </div>
        )
    }
}

export default Inform;