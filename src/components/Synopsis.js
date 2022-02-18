import { useState } from "react";
import { Alert, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Synopsis() {
    const [show, setShow] = useState(true);
  
    if (show) {
      return (
        <Alert style={{marginRight: "5%", marginLeft: "5%", textAlign: "left", lineHeight: "2"}} variant="primary">
        <Alert.Heading>synopsis</Alert.Heading>
            <p>
            <Link to="/characters/Sym">Symic</Link> is a researcher of extinct elemental magics and natural paranormal phenomena who has dedicated their life to 
            educating the public of these topics with their podcast, Cryptal Archive.
            <br></br>
            <br></br>
            Along with their immortal best friend and bodyguard, <Link to="/characters/Ded">Ded</Link>, they present these findings to a wary public who 
            largely finds these subjects taboo and frightening.
            <br></br>
            <br></br>
            As their journey for knowledge progresses they uncover not only deep rooted conspiracies, 
            but the mysteries behind them, leading them to understand not only the world around them, but what may come next.
            </p>
        </Alert>
      );
    }
    return <Button style={{marginRight: "3%", marginLeft: "3%", marginBottom: "3%"}} onClick={() => setShow(true)}>Synopsis</Button>;
  }
  export default Synopsis;