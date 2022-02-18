
import { NavLink } from "react-router-dom";
import classes from '../components/buttons.css';
const GallerySelection = () => {

    return (
        <div className="galleryButtons" style={{marginTop: "100px", textAlign: "center"}}>
        <NavLink activeClassName={classes.active} className="backBtn" to="/gallery/fanart">Fanart</NavLink>
        <NavLink activeClassName={classes.active} className="backBtn" to="/gallery/challenges">Challenges</NavLink>
        <NavLink activeClassName={classes.active} className="backBtn" to="/gallery/collabs">Collabs</NavLink>
        <NavLink activeClassName={classes.active} className="backBtn" to="/gallery/squidmel">Squid/Mel</NavLink>
        <NavLink activeClassName={classes.active} className="backBtn" to="/gallery/concept">Concept</NavLink>
        </div>
    )
}
export default GallerySelection;