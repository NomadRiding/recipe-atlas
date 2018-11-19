import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBody } from 'reactstrap';




class DessertDeck extends React.Component {
    render() {
        return(
            <div>
                 <div>
                <div className="titleStuff">
                <select className="optionBarCont" name="select">
                    <option value="first Dish">First Dessert</option>
                    <option value="second Dish">Second Dessert</option>
                    <option value="third Dish">Third Dessert</option>
                </select>
                <h2>Dessert</h2>
             </div>
             </div>
                <div className="dessertGroup">
                <CardDeck className="dessertCards">
                    < Card className = "firstDessert" >
                    <CardImg src="https://cocineroaficionado.com/wp-content/uploads/2015/09/tiraminu-s.jpg" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Tiramisu</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                        <Button>Button</Button>
                    </CardBody>
                    </Card>
                     < Card className = "secondDessert" >
                    <CardImg src="https://teaandtakes.files.wordpress.com/2015/03/almond-chocolate-amaretto-cake.jpg?w=529&h=353" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Chocolate Amaretto Cake</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                        <Button>Button</Button>
                    </CardBody>
                    </Card>
                     < Card className = "thirdDessert" >
                    <CardImg src="https://cmt.azureedge.net/media/orig_lemon_ricotta_cake_with_candied_lemons_20170403134855560196absb4.jpg" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Lemon Ricotta Cake</CardTitle>
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


export default DessertDeck;
