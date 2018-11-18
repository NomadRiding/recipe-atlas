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
                    <CardImg src="https://assets.marthastewart.com/styles/wmax-1500/d31/pizza-margherita-0606-mla102155/pizza-margherita-0606-mla102155_sq.jpg?itok=3FuCCotM" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Marguerita Pizza</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                        <Button>Button</Button>
                    </CardBody>
                    </Card>
                     < Card className = "secondPizza" >
                    <CardImg src="https://www.giallozafferano.it/images/ricette/36/3601/foto_hd/hd450x300.jpg" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Pizza Arrotolata</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                        <Button>Button</Button>
                    </CardBody>
                    </Card>
                     < Card className = "thirdPizza" >
                    <CardImg src="http://www.ricettapizzanapoletana.it/images/pizza_fritta_napoletana.jpg" alt="Card image cap" />
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
