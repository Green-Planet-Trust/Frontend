import React, { Component } from 'react'
import Navbars from './../Components/Navbars'
import './../aboutMe.css';



class About extends Component {
    // Runs when the component is visibe 
    componentDidMount() {
        console.log("On About Page")
    }

    // Actually contains the HTML elements that are displayed 
    render() {
        // Notice that return must take one container (div) but can have lots inside
        return (
        <div className="About">
            <Navbars /> 
            <h1>About Us</h1>
            <br></br>
            <div className="body">
                <p>
                    <h2>Why do we need the Energy Trust?</h2>
                    <br></br><br></br>
                    Pollution is a modern problem that requires a modern solution. With billions of tons of CO2 emitted every year, 
                    at a continually growing rate, we will need to address these problems now. Currently the largest oil and gas 
                    companies are required to publish their carbon emissions in an annual report; however, this data is rarely 
                    relevant to consumer nor tangible in its affects. As the effects of climate change continue to become more 
                    apparent, it is likely more governments and consumers will require more stringent tracking of companies' carbon 
                    emissions. IBM Energy Trust aims at being the platform built on blockchain and public record keeping to track 
                    this data. 

                    <br></br><br></br>
                    Consumers need an easy, fast way to compare carbon emissions of products that is simple to use and trusted by 
                    companies. IBM Energy Trust provides an modern React website utilizing Bootstrap and hosted on a Node Server 
                    allowing users to rapidly lookup the tracked carbon emissions and see where these emissions originated. This 
                    puts the power in the hands of the buyer to make the most energy efficient decision possible. 
                    <br></br><br></br>
                    For this solution to be trusted and used by companies, it needs to be both secure and accurate. 
                    This is where the IBM Blockchain Platform will serve a key role. Using smart contracts, as products exchange 
                    hands during the manufacturing process, both companies must acknowledge the carbon emissions that are 
                    associated with a product. These exist on a public ledger, growing until they reach the hands of the consumer. 
                    Beyond this, the existence of wallets allow only permitted parties to access the ledger, as well as even the 
                    possibility of setting limitations on the carbon emissions of its members. The use of a permissioned blockchain 
                    allows for companies to not disclose their business partners, while still requiring them to maintain an honest 
                    record of carbon emissions. 
                    <br></br><br></br>
                    Once a company deems a product eligible for consumers, IBM Energy Trust securely moves a copy of the information 
                    from the blockchain to a database, allowing for rapid querying as well as access by external parties. Monitoring 
                    is continually done to assure accurate database entries. An OpenAPI backend written in python provides a public 
                    way to access this data. 
                    <br></br><br></br>
                    IBM Energy Trust serves to connect manufacturers, suppliers, distributors, and consumers with accurate 
                    carbon emission tracking. 

                <br></br><br></br>
                <h2>Who are we?</h2>
                    <br></br>
Ariel Uy: auy@ibm.com
<br></br>
Christopher Shortell: christophershortell@ibm.com
<br></br>
Daniel Rodriguez: daniel.rodriguez@ibm.com
<br></br>
                    Jacob Engelbrecht: jacob.engelbrecht@ibm.com
                </p>
                

            </div>
            <br></br><br></br><br></br><br></br><br></br><br></br>
        </div>
        )
    }
}

// Always need an export for others to access
export default About;