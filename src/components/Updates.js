import { useState } from "react";
import { Alert, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Updates() {
    const [show, setShow] = useState(true);
  
    if (show) {
      return (
        <Alert style={{marginRight: "5%", marginLeft: "5%"}} variant="info" >
        <Alert.Heading>02/22/2022</Alert.Heading>
            <p>
                new page! check it out <Link to="/pages/1/3">here!</Link>
            </p>
            <hr />
            
        </Alert>
      );
    }
    return <Button style={{marginRight: "3%", marginLeft: "3%", marginBottom: "3%"}} onClick={() => setShow(true)}>Updates</Button>;
  }
  export default Updates;