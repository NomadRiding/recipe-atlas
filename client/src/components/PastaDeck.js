import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBody } from 'reactstrap';
const pasta1 = './Images/pasta1.jpg';
const pasta2 = './Images/pasta2.jpg';
const pasta3 = './Images/pasta3.jpg';


class PastaDeck extends React.Component {
    render() {
        return(
            <div>
                <div>
                <div className="pastaStuff">
                <select className="optionBar" name="select">
                    <option value="first Dish">First Pasta</option>
                    <option value="second Dish">Second Pasta</option>
                    <option value="third Dish">Third Pasta</option>
                </select>
                <h2>Pasta</h2>
             </div>
             </div>
                <div className="pastaGroup">
                <CardDeck className="pastaCards">
                    < Card className = "firstPasta" >
                    <CardImg src={pasta2} alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                        <Button>Button</Button>
                    </CardBody>
                    </Card>
                     < Card className = "secondPasta" >
                    <CardImg src={pasta1} alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                        <Button>Button</Button>
                    </CardBody>
                    </Card>
                     < Card className = "thirdPasta" >
                    <CardImg src={pasta3} alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                        <Button>Button</Button>
                    </CardBody>
                    </Card>
                </CardDeck>
            </div>
            </div>
        )
    }
}


export default PastaDeck;
