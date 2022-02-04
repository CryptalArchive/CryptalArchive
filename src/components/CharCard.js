import { useLayoutEffect } from "react";
import { Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import chars from "../chars";

const CharCard = (props) => {
    const history = useHistory();
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    const character = chars.find(function (newArr) {
        return newArr.nickname === props.characterName;
    });

    function handleClick() {
        history.push("/characters/" + character.nickname)
    }

    return (
        <Card onClick={handleClick} className="charCard">
            <Card.Img variant="top" src={"/imgs/characters/" + character.nickname + ".png"} />
            <Card.Body>
            <Card.Text>"{character.nickname}"</Card.Text>
                <Card.Title>{character.name}</Card.Title>
                
            </Card.Body>
        </Card>
    )
}
export default CharCard;