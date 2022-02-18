import React, { useLayoutEffect } from 'react';
import { Image } from 'react-bootstrap';
import AnimatedPage from '../components/AnimatedPage';


function About() {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    return (
    <AnimatedPage>
    <div className="sec" style={{marginTop: "100px"}}>
    <Image fluid src="/imgs/twoheadedanimal.png"></Image>
    <p className="aboutlogo">Twoheadedanimal</p>
    <div className="aboutgrid">
    <div className="melaboutpic"> <img className="melaboutimg" src="/imgs/mel.png" alt="mel's pic"></img> </div>
    <div className="melabouttext abouttext"> <p>Mel (she/her) (they/them)
        Is based in the US and recently became a self taught artist, studying from various Youtube art channels.
        <br></br><br></br>
        She never really felt like an artist until she and Squid teamed up. He encouraged her to refine her painting skills more, and she's still learning too!
        <br></br><br></br>
        Her main focus right now is self improvement as an artist/colorist and streamer!</p></div>
    <div className="squidaboutpic"> <img className="squidaboutimg" src="/imgs/squid.png" alt="squid's pic"></img> </div>
    <div className="squidabouttext abouttext"> <p>Squid (He/Him) (it/Its)
        Is based in Australia and he's been doing art his whole life and worked as a game developer for a short time after graduating from AIE
        <br></br><br></br>
        He was never super good at showing off his own art to an audience before we teamed up, with encouragement from Mel he's gotten less shy about it.
        <br></br><br></br>
        His main focus right now is to raise money for his top surgery! He's been on HRT for over a year now and it's made him feel a lot more self confident</p></div>
    </div>
    </div>
    </AnimatedPage>

    );
}
export default About;