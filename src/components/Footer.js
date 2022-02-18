import React from 'react';

function Footer() {

    return (

        <div className="footer">
        <div className="copyright">
            <p style={{color: "white"}}>© 2021 cryptal archive </p>
        </div>
        <div className="contactbuttons">
            <a href="https://www.deviantart.com/twoheadedanimal"><img className="socialicon" src="/imgs/deviantart.png" alt=""></img></a>
            <a href="https://discord.gg/jHFKmxYcE3"><img className="socialicon" src="/imgs/discord.png" alt=""></img></a>
            <a href="https://www.instagram.com/twoheadedanimal/"><img className="socialicon" src="/imgs/instagram.png" alt=""></img></a>
            <a href="https://www.patreon.com/CryptalArchive?fan_landing=true"><img className="socialicon" src="/imgs/patreon.png" alt=""></img></a>
            <a href="https://www.redbubble.com/people/TeamGuysArt/shop"><img className="socialicon" src="/imgs/redbubble.png" alt=""></img></a>
            <a href="https://www.twitch.tv/twoheadedanimal"><img className="socialicon" src="/imgs/twitch.png" alt=""></img></a>
            <a href="https://twitter.com/TwoHeadedAnimal"><img style={{marginRight: "0px"}} className="socialicon" src="/imgs/twitter.png" alt=""></img></a>
            
        </div>
        </div>

    
    );
}
export default Footer;