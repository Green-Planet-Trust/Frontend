import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Link from 'react-router-dom/Link'
import Alerts from './../Components/Alerts'

class Home extends Component {
    componentDidMount() {
        console.log("On Home Page")
    }

    render() {
        return (
        <div className="Home">
            <Alerts />
            <Link to="/locate">
                <Button variant="primary">Locate</Button>{' '}
            </Link>
            <Link to="/inform">
                <Button variant="secondary">Inform</Button>
            </Link>
        </div>
        )
    }
}

export default Home;