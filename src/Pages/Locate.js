import React, { Component } from 'react'
import logo from './../logo.svg';
import Alerts from './../Components/Alerts'
import Button from 'react-bootstrap/Button'
import Link from 'react-router-dom/Link'


class Locate extends Component {
    componentDidMount() {
        console.log("On Locate Page now")
    }

    render() {
        return (
        <div className="App">
            <Alerts />
            <Link to="/">
                <Button variant="primary">Take me Home!</Button>
            </Link>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>Welcome to the Future of IBM Energy Trust</h1>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
            </header>
        </div>
        )
    }
}

export default Locate;