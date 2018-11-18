import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBody } from 'reactstrap';




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
                    <CardImg src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                        <Button>Button</Button>
                    </CardBody>
                    </Card>
                     < Card className = "secondPizza" >
                    <CardImg src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                        <Button>Button</Button>
                    </CardBody>
                    </Card>
                     < Card className = "thirdPizza" >
                    <CardImg src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
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


export default PizzaDeck;
