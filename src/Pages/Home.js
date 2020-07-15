import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Link from 'react-router-dom/Link'
import Alerts from './../Components/Alerts'

class Home extends Component {
    // Runs when the component is visibe 
    componentDidMount() {
        console.log("On Home Page")
    }

    // Actually contains the HTML elements that are displayed 
    render() {
        // Notice that return must take one container (div) but can have lots inside
        return (
        <div className="Home">
            <Alerts />
            <h1>Welcome to the Future of IBM Energy Trust</h1>
            <br></br>
            <h3>
                The following links will let you view carbon emissions 
                or update the carbon emmisions of a product.
            </h3>
            <br></br>
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

// Always need an export for others to access
export default Home;