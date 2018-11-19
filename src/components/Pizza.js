import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBody } from 'reactstrap';
const pizza1 = './Images/pizza1.jpg';
const pizza2 = './Images/pizza2.jpg';
const pizza3 = './Images/pizza3.jpg';


class PizzaDeck extends React.Component {
    render() {
        return(
            <div>
                 <div>
                <div className="titleStuff">
                <select className="optionBarCont" name="select">
                    <option value="first Dish">First Pizza</option>
                    <option value="second Dish">Second Pizza</option>
                    <option value="third Dish">Third Pizza</option>
                </select>
                <h2>Pizza</h2>
             </div>
             </div>
                <div className="pizzaGroup">
                <CardDeck className="pizzaCards">
                    < Card className = "firstPizza" >
                    <CardImg src={pizza2} alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Marguerita Pizza</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                        <Button>Button</Button>
                    </CardBody>
                    </Card>
                     < Card className = "secondPizza" >
                    <CardImg src={pizza1} alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Pizza Arrotolata</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                        <Button>Button</Button>
                    </CardBody>
                    </Card>
                     < Card className = "thirdPizza" >
                    <CardImg src={pizza3} alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Pizza Fritta</CardTitle>
                        <CardSubtitle>Fried Pizza</CardSubtitle>
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


export default PizzaDeck;
