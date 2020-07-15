import React, { Component } from 'react'
import Alerts from './../Components/Alerts'
import Button from 'react-bootstrap/Button'
import Link from 'react-router-dom/Link'

class Inform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: null,
        };
    }

    componentDidMount() {
        console.log("On Inform Page now")
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