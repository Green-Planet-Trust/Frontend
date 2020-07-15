import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Link from 'react-router-dom/Link'

class Home extends Component {
    componentDidMount() {
        console.log("On Home Page")
    }

    render() {
        return (
        <div className="Home">
            <Link to="Locate">
                <Button variant="primary">Locate</Button>{' '}
            </Link>
            <Link to="/Inform">
                <Button variant='Warning'>Inform</Button>
            </Link>
        </div>
        )
    }
}

export default Home;