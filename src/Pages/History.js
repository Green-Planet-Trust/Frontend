import React, { Component } from 'react'
import Navbars from './../Components/Navbars'
import './../Styling/history.css'




class History extends Component {
    // Runs when the component is visibe 
    componentDidMount() {
        console.log("On History Page")
    }

    // Actually contains the HTML elements that are displayed 
    render() {
        // Notice that return must take one container (div) but can have lots inside
        return (
        <div className="History">
            <Navbars /> 
            <h1>History</h1>
            <br></br>
            Hello

        </div>
        )
    }
}

// Always need an export for others to access
export default History;