import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Link from 'react-router-dom/Link'
import Alerts from './../Components/Alerts'
import Navbars from './../Components/Navbars'
import './../home.css';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'

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
            <Navbars /> 
            <h1>Welcome to the Future of IBM Energy Trust</h1>
            <br></br>
            <h3>
                The following links will let you view carbon emissions 
                or update the carbon emmisions of a product.
            </h3>
            <br></br>
         
            <CardDeck> 
            <Card className='carbonCard' text='dark'>
            <Card.Img variant="top" src="carbon.jpg" />
            <Card.Body>
                <Card.Title>For Consumers</Card.Title>
                <Card.Text>
                Search for an item by barcode to view its carbon footprint.
                </Card.Text>
                <Link to="/search">

                
                 <Button variant="success">Search</Button>
                 </Link>
             </Card.Body>
            </Card>{' '}   
            

            <Card className='carbonCard' text='dark'>
            <Card.Img variant="top" src="charts.jpeg" />
            <Card.Body>
                <Card.Title>For Producers</Card.Title>
                <Card.Text>
                Enter and update your company's products and carbon emissions.
                </Card.Text>
                <Link to="/update">

                
                 <Button variant="success">Update</Button>
                 </Link>
             </Card.Body>
            </Card>   
            
            </CardDeck>

        </div>
        )
    }
}

// Always need an export for others to access
export default Home;