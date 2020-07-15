import React, { Component } from 'react'
import Alerts from './../Components/Alerts'

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
            <h1>This is the inform page</h1>
        </div>
        )
    }
}

export default Inform;