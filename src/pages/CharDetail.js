import { useLayoutEffect } from "react";
import { Image } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import chars from "../chars";

const CharDetail = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    const params = useParams();
    const character = chars.find(function (newArr) {
        return newArr.nickname === params.character;
    });
    const otherChars = [];
    for (let i = 0; i < chars.length; ++i) {
        if (chars[i].nickname !== character.nickname) {
            otherChars.push(chars[i].nickname);
        }
    }
    const charBtns = otherChars.map((char, ind) =>
        <Link className="backBtn" to={"/characters/" + char}>{char}</Link>
    );
    return (

        <div className="sec" style={{marginTop: "110px", color: "white"}}>
           
        <div style={{border: "dashed 5px #6EFFB3", backgroundColor: "#27006670", marginRight: "10%", marginLeft: "10%", padding: "20px", borderRadius: "2%"}}>
            {/*Basic Info*/}
            <div style={{textAlign: "center"}}>
            <p style={{fontSize: "40px", color: "#6EFFB3", textShadow:"0.063rem 0rem 0.25rem #0029FF"}}>{character.name}</p>
            <p style={{fontSize: "30px", color: "#6EFFB3", textShadow:"0.063rem 0rem 0.25rem #0029FF"}}>"{character.nickname}"</p>
            <p style={{fontStyle: "italic", color: "#FF8CFA", textShadow: "0.063rem 0rem 0.25rem #D940FF"}}>{character.title}</p>
            <p style={{color: "#54FFF5", textShadow: "0.063rem 0rem 0.25rem #3838BA"}}>{character.pronouns}</p>
            <p style={{color: "#54FFF5", textShadow: "0.063rem 0rem 0.25rem #3838BA"}}>age: {character.age}</p>
            <p style={{color: "#54FFF5", textShadow: "0.063rem 0rem 0.25rem #3838BA"}}>race: {character.race}</p>
            <p style={{color: "#54FFF5", textShadow: "0.063rem 0rem 0.25rem #3838BA"}}>height: {character.height}</p>
            <p style={{color: "#54FFF5", textShadow: "0.063rem 0rem 0.25rem #3838BA"}}>occupation: {character.occupation}</p>
            </div>
            {/*Bio*/}
            <div style={{textAlign: "center"}}>
            <p style={{color: "#54FFF5", textShadow: "0.063rem 0rem 0.25rem #3838BA"}}>{character.description}</p>
            </div>
        </div>
        <Image style={{marginTop: "50px"}} fluid src={"/imgs/characters/turnarounds/" + character.nickname + ".jpg"} alt="pic"></Image>
        <div className="charBtns">
        <Link className="backBtn" to="/characters">Back</Link>
        {charBtns}
        </div> 

        </div>

    )
}
export default CharDetail;