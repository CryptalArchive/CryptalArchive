import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import AnimatedPage from "../components/AnimatedPage";

import Synopsis from "../components/Synopsis";
import Updates from "../components/Updates";

const Home = () => {
    return (
        <AnimatedPage>
        <div  style={{marginTop: "100px", textAlign: "center"}}>
        <Image fluid style={{width: "450px", height: "300px"}} src="/imgs/grouppic.png"></Image>
        <p style={{fontSize: "4vw", color: "white"}}>Welcome to Cryptal Archive!</p>
        <Updates />
        <Synopsis />
 
        <br></br>
        <br></br>
        <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
        <Link className="backBtn" to="/pages/0/1" style={{marginRight: "50px"}}>Start Reading!</Link>
        
        <Link className="backBtn" to="/pages/1/1">Latest Page</Link>        
        </div>

        
        {/*<TwitterTimelineEmbed sourceType="timeline" theme="dark" screenName="CryptalArchive" options={{height: 900, width: 400}} />*/}
        </div>
        </AnimatedPage>
    );
}
export default Home;