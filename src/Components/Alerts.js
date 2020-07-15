import React from 'react';
import Alert from 'react-bootstrap/Alert';

// Very basic function to generate a Bootstrap Alert Element
function Alerts(props) {
    return (
        <Alert variant = "primary" >
            This is a bootstrap element!
        </Alert >
    )
}

// Always need an export for others to access
export default Alerts;