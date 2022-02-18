import chars from "../chars";
import AnimatedPage from "../components/AnimatedPage";
import CharCard from "../components/CharCard";

const Characters = () => {
    
    const characterCards = chars.map((char, ind) =>
        <CharCard characterName={char.nickname} key={ind} />
    );

    return (
        <AnimatedPage>
        <div className="sec" style={{marginTop: '100px', textAlign: "center"}}>
        <p style={{color: "white"}}>Select a character to learn more about them!</p>    
        <div className="charCardGrid" style={{}}>
        {characterCards}
        
        </div>
        </div>
        </AnimatedPage>
    );
}
export default Characters;