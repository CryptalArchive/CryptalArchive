import { useState } from "react";
import { Alert, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Updates() {
    const [show, setShow] = useState(true);
  
    if (show) {
      return (
        <Alert style={{marginRight: "5%", marginLeft: "5%"}} variant="info" >
        <Alert.Heading>02/08/2022</Alert.Heading>
            <p>
                new page! check it out <Link to="/pages/1/1">here!</Link>
            </p>
            <hr />
            <p className="mb-0">
                other updates:
                <br></br>
                <a href="https://twitter.com/CryptalArchive/status/1493541409390874625?s=20&t=RvAOzdCRpW1YEEPqrgV5-g">non-canonical comic #2</a>
            </p>
        </Alert>
      );
    }
    return <Button style={{marginRight: "3%", marginLeft: "3%", marginBottom: "3%"}} onClick={() => setShow(true)}>Updates</Button>;
  }
  export default Updates;