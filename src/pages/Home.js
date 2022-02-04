import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import AnimatedPage from "../components/AnimatedPage";

const Home = () => {
    return (
        <AnimatedPage>
        <div className="sec" style={{marginTop: "100px"}}>
        <Image style={{width: "450", height: "300px"}} src="/imgs/grouppic.png"></Image>
        <p style={{fontSize: "4vw", color: "white"}}>Welcome to Cryptal Archive!</p>
        <p>Latest update: </p>
        
        <Link className="backBtn" to="/pages/0/1" style={{marginRight: "50px"}}>Start Reading!</Link>
        <Link className="backBtn" to="/pages/1/1">Latest Page</Link>
        
        
        <TwitterTimelineEmbed sourceType="timeline" theme="dark" screenName="CryptalArchive" options={{height: 900, width: 400}} />
        </div>
        </AnimatedPage>
    );
}
export default Home;